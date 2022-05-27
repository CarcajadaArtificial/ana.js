//    ____  _                  _               _
//   / ___|| |_ __ _ _ __   __| | __ _ _ __ __| |
//   \___ \| __/ _` | '_ \ / _` |/ _` | '__/ _` |
//    ___) | || (_| | | | | (_| | (_| | | | (_| |
//   |____/ \__\__,_|_| |_|\__,_|\__,_|_|  \__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The Standard module contains a diversity of classes, they are abstracts for standard HTML Elements with attributes and event listeners
 * @module Ana/Standard
 */

import {
  MatchFunctionsDictionary,
  AttributeValuesDictionary,
  AttributesDictionary,
} from '../../types'
import { iAnaConfiguration } from '../../Ana/Ana.interface'
import { AttributeList } from './Attribute/AttributeList/AttributeList'
import { AttributeString } from './Attribute/AttributeString/AttributeString'
import { AttributeBoolean } from './Attribute/AttributeBoolean/AttributeBoolean'
import { AttributeFunction } from './Attribute/AttributeFunction/AttributeFunction'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Global Overrides
declare global {
  // HTML Element interface override to support match functions.
  interface HTMLElement {
    matchDictionary: MatchFunctionsDictionary
    has(attributes: AttributeValuesDictionary): HTMLElement
    setAttributes(attributes: AttributeValuesDictionary): HTMLElement
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is used to manage the HTMLElements standard, renders them correctly and extends the HTMLElement prototype to support a match dictionary.
 */
export class Element {
  /**
   * The individual HTMLElement Tag Name in lowercase. It is used as a unique identifier among all Elements.
   */
  name: string = ''

  /**
   * Most elements can have children elements rendered inside, but some are built specifically to not have one, and doing so would go against it's design. The list of empty elements is the following:
   * - `<area/>`
   * - `<base/>`
   * - `<br/>`
   * - `<col/>`
   * - `<embed/>`
   * - `<hr/>`
   * - `<img/>`
   * - `<input/>`
   * - `<link/>`
   * - `<meta/>`
   * - `<param/>`
   * - `<source/>`
   * - `<track/>`
   * - `<wbr/>`
   */
  empty: boolean = false

  /**
   * The Attribute Dictionary with all attributes related to the element. This dictionary is what standarizes all elements and their attributes.
   */
  attributes?: AttributesDictionary = {}

  /**
   * This function extends the HTMLElement prototype to support a attribute standard filter. If `standardVerificationMode` is set to False, this function will simply continue to `this.setAttributes(attributes)`.
   * @param attributes The attributes that might be set to this element.
   * @returns An element with the dictionary of attributes applied if the attributes match the element's satandard.
   */
  private has = function (
    this: HTMLElement,
    attributes: AttributeValuesDictionary
  ): HTMLElement {
    let tagName = this.tagName.toLowerCase()
    if (this.matchDictionary[tagName](attributes)) {
      return this.setAttributes(attributes)
    } else {
      return this
    }
  }

  /**
   * This function extends the HTMLElement prototype to support a dictionary version of the similar method `.setAttribute()`.
   * @param attributes The attributes that will be set to this element.
   * @returns An element with the dictionary of attributes applied.
   */
  private setAttributes = function (
    this: HTMLElement,
    attributes: AttributeValuesDictionary
  ): HTMLElement {
    Object.keys(attributes).forEach((attributeName: string) => {
      let attribute = attributes[attributeName]
      if (typeof attribute === 'string') {
        this.setAttribute(attributeName, attribute)
      } else {
        let listenerFunction: Function = attribute
        this.addEventListener(attributeName, (event: Event) => {
          listenerFunction(event)
        })
      }
    })
    return this
  }

  /**
   * This function overrides the HTMLElement prototype to support the `HTMLElement.prototype.match` dictionary.
   * @param standardVerificationMode If True, it creates standarized `match` functions inside the overriten dictionary. If False, all `match` functions return true, without standarization.
   * @returns The match function for this particular Element adjusted to `standardVerificationMode`.
   */
  addMatch = (standardVerificationMode: boolean): Function =>
    standardVerificationMode
      ? (attributes: AttributeValuesDictionary): boolean => {
          let allGood = true
          Object.keys(attributes).forEach((attributeName: string) => {
            if (this.attributes && this.attributes[attributeName]) {
              if (
                !this.attributes[attributeName].match(
                  attributes[attributeName],
                  attributes.type
                )
              ) {
                allGood = false
              }
            } else if (GLOBAL_ATTRIBUTES[attributeName]) {
              if (
                !GLOBAL_ATTRIBUTES[attributeName].match(
                  attributes[attributeName],
                  attributes.type
                )
              ) {
                allGood = false
              }
            } else {
              allGood = false
            }
          })
          return allGood
        }
      : () => true

  /**
   * This function assigns renderer functions. This will be the building block of the framework.
   * @param standardVerificationMode If True, it creates standarized `match` functions inside the overriten dictionary. If False, it all `match` functions return true, without standarization.
   * @returns One of two different renderer functions, depending on `this.empty` value.
   * - renderWithChildren `a.div(a.div(), a.div(), ...)`
   * - renderWithoutChildren `a.input({type: 'text', class: 'example'})`
   */
  render = (configuration: iAnaConfiguration): Function => {
    let standardVerificationMode: boolean =
      configuration.standardVerificationMode === true
    let newMatch: MatchFunctionsDictionary = {}
    newMatch[this.name] = this.addMatch(standardVerificationMode)

    HTMLElement.prototype.matchDictionary = {
      ...HTMLElement.prototype.matchDictionary,
      ...newMatch,
    }
    HTMLElement.prototype.has = this.has
    HTMLElement.prototype.setAttributes = this.setAttributes

    const renderWithChildren = (
      ...children: [HTMLElement | string]
    ): HTMLElement => {
      let elem = document.createElement(this.name)
      elem.append(...children)
      return elem
    }

    const renderWithoutChildren = (
      attributes: {
        [key: string]: string | Function
      } = {}
    ): HTMLElement => {
      let elem = document.createElement(this.name)
      elem.has(attributes)
      return elem
    }

    return this.empty ? renderWithoutChildren : renderWithChildren
  }

  /**
   * ```Typescript
   * new Element('example', true, {
   *  exampleAttribute: new AttributeString('exampleAttribute')
   * })
   * ```
   * @param name {@link Element.name | Read more}
   * @param empty {@link Element.empty | Read more}
   * @param attributes {@link Element.attributes | Read more}
   */
  constructor(name: string, empty: boolean, attributes?: AttributesDictionary) {
    this.name = name
    this.empty = empty
    this.attributes = attributes
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This dictionary contains attributes that can be used in any Element.
 */
 export const GLOBAL_ATTRIBUTES: AttributesDictionary = {
  autocapitalize: new AttributeList('autocapitalize', 'autocapitalize'),
  dir: new AttributeList('dir', 'bdoDir'),
  enterkeyhint: new AttributeList('enterkeyhint', 'enterkeyhint'),
  inputmode: new AttributeList('inputmode', 'inputmode'),
  lang: new AttributeList('lang', 'isoCodes'),
  contenteditable: new AttributeList('contenteditable', 'softBoolean'),
  draggable: new AttributeList('draggable', 'softBoolean'),
  spellcheck: new AttributeList('spellcheck', 'softBoolean'),
  accesskey: new AttributeString('accesskey'),
  class: new AttributeString('class'),
  data: new AttributeString('data'),
  id: new AttributeString('id'),
  itemid: new AttributeString('itemid'),
  itemprop: new AttributeString('itemprop'),
  itemref: new AttributeString('itemref'),
  itemtype: new AttributeString('itemtype'),
  nonce: new AttributeString('nonce'),
  style: new AttributeString('style'),
  tabindex: new AttributeString('tabindex'),
  title: new AttributeString('title'),
  hidden: new AttributeBoolean('hidden'),
  itemscope: new AttributeBoolean('itemscope'),
  // Event Listener
  cancel: new AttributeFunction('cancel'),
  error: new AttributeFunction('error'),
  scroll: new AttributeFunction('scroll'),
  select: new AttributeFunction('select'),
  show: new AttributeFunction('show'),
  wheel: new AttributeFunction('wheel'),
  copy: new AttributeFunction('copy'),
  cut: new AttributeFunction('cut'),
  paste: new AttributeFunction('paste'),
  compositionend: new AttributeFunction('compositionend'),
  compositionstart: new AttributeFunction('compositionstart'),
  compositionupdate: new AttributeFunction('compositionupdate'),
  blur: new AttributeFunction('blur'),
  focus: new AttributeFunction('focus'),
  focusin: new AttributeFunction('focusin'),
  focusout: new AttributeFunction('focusout'),
  fullscreenchange: new AttributeFunction('fullscreenchange'),
  fullscreenerror: new AttributeFunction('fullscreenerror'),
  keydown: new AttributeFunction('keydown'),
  keypress: new AttributeFunction('keypress'),
  keyup: new AttributeFunction('keyup'),
  auxclick: new AttributeFunction('auxclick'),
  click: new AttributeFunction('click'),
  contextmenu: new AttributeFunction('contextmenu'),
  dblclick: new AttributeFunction('dblclick'),
  mousdown: new AttributeFunction('mousdown'),
  mouseenter: new AttributeFunction('mouseenter'),
  mouseleave: new AttributeFunction('mouseleave'),
  mousemove: new AttributeFunction('mousemove'),
  mouseout: new AttributeFunction('mouseout'),
  mouseover: new AttributeFunction('mouseover'),
  mouseup: new AttributeFunction('mouseup'),
  change: new AttributeFunction('change'),
  webkitmouseforcechanged: new AttributeFunction('webkitmouseforcechanged'),
  webkitmouseforcedown: new AttributeFunction('webkitmouseforcedown'),
  webkitmouseforcewillbegin: new AttributeFunction('webkitmouseforcewillbegin'),
  webkitmouseforceup: new AttributeFunction('webkitmouseforceup'),
  touchcancel: new AttributeFunction('touchcancel'),
  touchend: new AttributeFunction('touchend'),
  touchmove: new AttributeFunction('touchmove'),
  touchstart: new AttributeFunction('touchstart'),
}
