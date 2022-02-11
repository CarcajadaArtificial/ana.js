//    ___           _
//   |_ _|_ __   __| | _____  __
//    | || '_ \ / _` |/ _ \ \/ /
//    | || | | | (_| |  __/>  <
//   |___|_| |_|\__,_|\___/_/\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains overrides of global prototypes to support the functionality needed to execute the framework.
 * @module Index
 */

import { Ana } from './ana'
import { AttributeValuesDictionary } from './standard'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Global Overrides
declare global {
  // Window interface override to support `const a = new Ana()`.
  interface Window {
    Ana: Object
    Test: Object
  }

  // HTML Element interface override to support has and setAttributes functions.
  interface HTMLElement {
    has(attributes: AttributeValuesDictionary): HTMLElement
    setAttributes(attributes: AttributeValuesDictionary): HTMLElement
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function extends the HTMLElement prototype to support a attribute standard filter. If `standardVerificationMode` is set to False, this function will simply continue to `this.setAttributes(attributes)`.
 * @param attributes The attributes that might be set to this element.
 * @returns An element with the dictionary of attributes applied if the attributes match the element's satandard.
 */
export const has = function (
  this: HTMLElement,
  attributes: AttributeValuesDictionary
): HTMLElement {
  let tagName = this.tagName.toLowerCase()
  if (this.match[tagName](attributes)) {
    return this.setAttributes(attributes)
  } else {
    return this
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function extends the HTMLElement prototype to support a dictionary version of the similar method `.setAttribute()`.
 * @param attributes The attributes that will be set to this element.
 * @returns An element with the dictionary of attributes applied.
 */
export const setAttributes = function (
  this: HTMLElement,
  attributes: AttributeValuesDictionary
): HTMLElement {
  Object.keys(attributes).forEach((attributeName: string) => {
    let attribute = attributes[attributeName]
    if (typeof attribute === 'string') {
      this.setAttribute(attributeName, attribute)
    } else {
      let listenerFunction: Function = attribute
      this.addEventListener(attributeName, (event) => {
        listenerFunction()
      })
    }
  })
  return this
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Global prototype overrides
window.Ana = Ana
HTMLElement.prototype.has = has
HTMLElement.prototype.setAttributes = setAttributes
