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
 * What is the most important feature of Ana.js? Well, the whole point is to be able to render HTMLElements in a quick, readable, and standard way. This module is in charge of all of this. The `Element` class is made to store an HTML standard. Every instance of this class works as a building block for the whole standard.
 *
 * Now I've mentioned this before but what does 'standard' mean? It's a feature in the framework that helps you write code with higher quality. Who's standard? Definitely, *my* standard, but also *your* standard, or even *anyone's* standard, because you can override any block with your own instance of the Element class.
 * @module Ana/Render
 */
export class Element {
  constructor(
    public name: string,
    public isEmpty: boolean,
    public attributes?: MatchFunctionsDictionary
  ) {
    let newMatch: MatchFunctionsDictionary = {}
    newMatch[this.name] = this.addMatch
    Window.matchDictionary = {
      ...Window.matchDictionary,
      ...newMatch,
    }
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This function is in charge of validating input attributes using a standard dictionary of attribute validation functions (`this.attributes?`). The function checks if any of the given attributes are wrong and places none if there are. 
   * @param addedAttributes The input attributes that need to be verified.
   * @returns True if all of the attributes are valid, false if at least one of them is.
   */
  addMatch = (addedAttributes: AttributeValuesDictionary): boolean => {
    let allGood = true
    Object.keys(addedAttributes).forEach((name: string) => {
      if (this.attributes && this.attributes[name]) {
        if (
          this.attributes[name]({
            value: addedAttributes[name],
            typeValue: addedAttributes.type,
          }) === false
        ) {
          allGood = false
        }
      } else if (GLOBAL_ATTRIBUTES[name]) {
        if (
          GLOBAL_ATTRIBUTES[name]({
            value: addedAttributes[name],
            typeValue: addedAttributes.type,
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
    

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * Checks if a function is being passed as children to an element. Usually because of a missed parenthesis: Incorrect: `div('class')(div('class'))` Correct: `div('class')(div('class')())`
   * @param children This array of *potential* children, must have the functions filtered out. These happen when the developer using this framework forgets to add a second set of parenthesis when rendering an element.
   * @returns An array of children, with the functions filtered out.
   */
  private checkChildren = (
    children: [Node | string | Function]
  ): [Node | string] => {
    var checkedChildren: any[] = []
    children.forEach((child) => {
      if (typeof child === 'function') {
        // Error: Recieved a function as an element's child. This is because the second parentesis was missed: a.div() => a.div()()
      } else {
        typeof child === 'string'
          ? checkedChildren.push(child)
          : checkedChildren.push(child.cloneNode())
      }
    })
    return checkedChildren as [Node | string]
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * By design, Ana.js gives priority to two properties of an HTML element. Firstly, in their classes, the most important of them all. There shouldn't be any filler elements without classes, every part of the interface must be designed with element classes in mind. Secondly, the children are rendered inside the element. Their functionality is essential for the framework, they are the most basic feature, demonstrated here: `a.div(...classes)(...children)`.
   * @param classes It is the only attribute not added with the `.has()` function, it is special that way, first the class, then everything else.
   * @param children The array of elements to be placed inside this one.
   * @returns An element, fully classed, with the list of children inside of it.
   */
  private renderWithChildren = (...classes: string[]): Function => {
    let htmlelement = document.createElement(this.name)
    if (classes.length > 0) {
      htmlelement.classList.add(...classes)
    }
    return (...children: [Node | string | Function]): HTMLElement => {
      htmlelement.append(...this.checkChildren(children))
      return htmlelement
    }
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * What is an "empty element"? It's not designed to have any other elements inside of it. Examples of this are: `<input />`, `<img />`, `<link />`, `<meta />`, etc. This function renders these kinds of elements. `a.input(class).has(attributes)`.
   * @param classes The only input that an empty element need is a class. Anything else will be added later, using auxiliary functions like 'has'.
   * @returns A complete html element without any attributes other than the class.
   */
  private renderWithoutChildren = (...classes: string[]): HTMLElement => {
    let htmlelement = document.createElement(this.name)
    if (classes.length > 0) {
      htmlelement.classList.add(...classes)
    }
    return htmlelement
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This function creates an HTMLElement renderer, and it is the step where the framework's configuration affects the way the elements are rendered. Also, this function tells elements apart by using the `this.empty` property, and this incidentally affects the design of the framework's main feature.
   * @param configuration So far there is no use for the framework configuration inside the renderer function. When I enable render configurations, they are going to be applied here.
   * @returns A render function that depends on the `this.empty`. `this.renderWithoutChildren` when true and `renderWhithoutChildren` when false.
   */
  render = (configuration: iAnaConfiguration): Function => {
    return this.isEmpty ? this.renderWithoutChildren : this.renderWithChildren
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This dictionary is simmilar to the contents of `~/src/ts/Elements/Elements.ts`. Contains the specifications of the attributes shared by all elements. When adding attributes to the element, these are always considered.
 */
const GLOBAL_ATTRIBUTES: MatchFunctionsDictionary = {
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
  webkitmouseforcechanged: new AttFunction('webkitmouseforcechanged').match,
  webkitmouseforcedown: new AttFunction('webkitmouseforcedown').match,
  webkitmouseforcewillbegin: new AttFunction('webkitmouseforcewillbegin').match,
  webkitmouseforceup: new AttFunction('webkitmouseforceup').match,
  touchcancel: new AttFunction('touchcancel').match,
  touchend: new AttFunction('touchend').match,
  touchmove: new AttFunction('touchmove').match,
  touchstart: new AttFunction('touchstart').match,
}
