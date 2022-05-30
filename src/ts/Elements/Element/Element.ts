import {
  MatchFunctionsDictionary,
  AttributeValuesDictionary,
} from '../../types'
import { iAnaConfiguration } from '../../Ana/Ana.interface'
import { AttList } from './Attribute/AttList'
import { AttString } from './Attribute/AttString'
import { AttBoolean } from './Attribute/AttBoolean'
import { AttFunction } from './Attribute/AttFunction'

declare class Window {
  static matchDictionary: MatchFunctionsDictionary
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _____ _                           _
//  | ____| | ___ _ __ ___   ___ _ __ | |_
//  |  _| | |/ _ \ '_ ` _ \ / _ \ '_ \| __|
//  | |___| |  __/ | | | | |  __/ | | | |_
//  |_____|_|\___|_| |_| |_|\___|_| |_|\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 * @@module Ana/Render
 */
export class Element {
  constructor(
    public name: string,
    public isEmpty: boolean,
    public attributes?: MatchFunctionsDictionary
  ) {
    let newMatch: MatchFunctionsDictionary = {}
    newMatch[this.name] = this.addMatch()
    Window.matchDictionary = {
      ...Window.matchDictionary,
      ...newMatch,
    }
  }

  /**
   *
   */
  private GLOBAL_ATTRIBUTES: MatchFunctionsDictionary = {
    autocapitalize: new AttList('autocapitalize', 'autocapitalize').match,
    dir: new AttList('dir', 'bdoDir').match,
    enterkeyhint: new AttList('enterkeyhint', 'enterkeyhint').match,
    inputmode: new AttList('inputmode', 'inputmode').match,
    lang: new AttList('lang', 'isoCodes').match,
    contenteditable: new AttList('contenteditable', 'softBoolean').match,
    draggable: new AttList('draggable', 'softBoolean').match,
    spellcheck: new AttList('spellcheck', 'softBoolean').match,
    accesskey: new AttString('accesskey').match,
    class: new AttString('class').match,
    data: new AttString('data').match,
    id: new AttString('id').match,
    itemid: new AttString('itemid').match,
    itemprop: new AttString('itemprop').match,
    itemref: new AttString('itemref').match,
    itemtype: new AttString('itemtype').match,
    nonce: new AttString('nonce').match,
    style: new AttString('style').match,
    tabindex: new AttString('tabindex').match,
    title: new AttString('title').match,
    hidden: new AttBoolean('hidden').match,
    itemscope: new AttBoolean('itemscope').match,
    // Event Listener
    cancel: new AttFunction('cancel').match,
    error: new AttFunction('error').match,
    scroll: new AttFunction('scroll').match,
    select: new AttFunction('select').match,
    show: new AttFunction('show').match,
    wheel: new AttFunction('wheel').match,
    copy: new AttFunction('copy').match,
    cut: new AttFunction('cut').match,
    paste: new AttFunction('paste').match,
    compositionend: new AttFunction('compositionend').match,
    compositionstart: new AttFunction('compositionstart').match,
    compositionupdate: new AttFunction('compositionupdate').match,
    blur: new AttFunction('blur').match,
    focus: new AttFunction('focus').match,
    focusin: new AttFunction('focusin').match,
    focusout: new AttFunction('focusout').match,
    fullscreenchange: new AttFunction('fullscreenchange').match,
    fullscreenerror: new AttFunction('fullscreenerror').match,
    keydown: new AttFunction('keydown').match,
    keypress: new AttFunction('keypress').match,
    keyup: new AttFunction('keyup').match,
    auxclick: new AttFunction('auxclick').match,
    click: new AttFunction('click').match,
    contextmenu: new AttFunction('contextmenu').match,
    dblclick: new AttFunction('dblclick').match,
    mousdown: new AttFunction('mousdown').match,
    mouseenter: new AttFunction('mouseenter').match,
    mouseleave: new AttFunction('mouseleave').match,
    mousemove: new AttFunction('mousemove').match,
    mouseout: new AttFunction('mouseout').match,
    mouseover: new AttFunction('mouseover').match,
    mouseup: new AttFunction('mouseup').match,
    change: new AttFunction('change').match,
    webkitmouseforcechanged: new AttFunction('webkitmouseforcechanged')
      .match,
    webkitmouseforcedown: new AttFunction('webkitmouseforcedown').match,
    webkitmouseforcewillbegin: new AttFunction(
      'webkitmouseforcewillbegin'
    ).match,
    webkitmouseforceup: new AttFunction('webkitmouseforceup').match,
    touchcancel: new AttFunction('touchcancel').match,
    touchend: new AttFunction('touchend').match,
    touchmove: new AttFunction('touchmove').match,
    touchstart: new AttFunction('touchstart').match,
  }

  /**
   *
   */
  addMatch =
    (): Function =>
    (attributes: AttributeValuesDictionary): boolean => {
      let allGood = true
      Object.keys(attributes).forEach((name: string) => {
        if (this.attributes && this.attributes[name]) {
          if (
            this.attributes[name]({
              value: attributes[name],
              typeValue: attributes.type,
            }) === false
          ) {
            allGood = false
          }
        } else if (this.GLOBAL_ATTRIBUTES[name]) {
          if (
            this.GLOBAL_ATTRIBUTES[name]({
              value: attributes[name],
              typeValue: attributes.type,
            }) === false
          ) {
            allGood = false
          }
        } else {
          allGood = false
        }
      })
      return allGood
    }

  /**
   * Checks if a function is being passed as children to an element. Usually because of a missed parenthesis: div('class')(div('class')) -> div('class')(div('class')()) 
   */
  private checkChildren = (children: [Node | string | Function]):[Node | string] => {
    var checkedChildren: any[] = [];
    children.forEach((child) => {
      if(typeof child === 'function') {
        // Error: Recieved a function as an element's child. This is because the second parentesis was missed: a.div() => a.div()()
      } else {
        checkedChildren.push(child)
      }
    })
    return checkedChildren as [Node | string]
  }

  /**
   *
   */
  render = (configuration: iAnaConfiguration): Function => {
    const renderWithChildren = (...classes:string[]) => {
      return (...children: [Node | string | Function]): HTMLElement => {
        let elem = document.createElement(this.name)
        elem.append(...this.checkChildren(children))
        if(classes.length>0) {
          elem.classList.add(...classes)
        }
        return elem
      }
    }

    const renderWithoutChildren = (
      attributes: AttributeValuesDictionary = {}
    ): HTMLElement => {
      let elem = document.createElement(this.name)
      elem.has(attributes)
      return elem
    }

    return this.isEmpty ? renderWithoutChildren : renderWithChildren
  }
}
