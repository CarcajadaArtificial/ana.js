import { AnaConfiguration } from './Ana/Ana.interface'
import { Observable } from './Observable/Observable'
import {
  StaticAttribute,
  StaticAttributes,
  StaticChild,
  WindowAna,
} from './types'
import { query } from './Utils/Utils'

declare global {
  interface HTMLElement {
    has(attributes: StaticAttributes): HTMLElement
    setAnyAttribute(name: string, attributes: StaticAttribute): HTMLElement
  }
  interface SVGElement {
    has(attributes: StaticAttributes): HTMLElement
    setAnyAttribute(name: string, attributes: StaticAttribute): HTMLElement
  }
  interface Window {
    ana: WindowAna
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export function globalOverrides(config: AnaConfiguration): void {
  HTMLElement.prototype.has = has
  SVGElement.prototype.has = has
  HTMLElement.prototype.setAnyAttribute = setAnyAttribute
  SVGElement.prototype.setAnyAttribute = setAnyAttribute
  window.ana = {
    config: config,
    state: {},
    // reactives: {},
    // relations: {},
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function extends HTMLElement.prototype.setAttribute to support a dictionary of attributes
 * instead of setting them one by one. For more information regarding types of attributes, read the
 * description of the StaticAttribute type.
 *
 * @param this The HTMLElement that will have attributes set.
 *
 * @param attributes The attributes to be set to the element.
 *
 * @returns The same HTMLElement but with all attributes set.
 */
const has = function (
  this: HTMLElement,
  attributes: StaticAttributes
): HTMLElement {
  Object.keys(attributes).forEach((attributeName: string) => {
    let attribute: StaticAttribute = attributes[attributeName]
    this.setAnyAttribute(attributeName, attribute)
  })
  return this
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function extends `HTMLElement.prototype.setAttribute()`. It generalizes boolean, string and
 * function attributes. The main problem with the limits of `.setAttribute()` is that it defaults only
 * to strings. For boolean attributes you can't do something like `.setAttribute('hidden', false)`. To
 * correctly remove boolean attributes like `hidden`, one must use the `.removeAttribute()` function,
 * something that `setAnyAttribute()` takes into account. Also, event listeners cannot be used inside
 * `.setAttribute()`, because they must use then `addEventListener()` function.
 *
 * @param this The HTMLElement that will have an attribute set.
 *
 * @param name The name of the attribute like on `.setAttribute()`, but unlike it, it can be used to
 * remove boolean elements and add event listener functions.
 *
 * @param value The attribute's value, can be string, boolean or a function.
 *
 * @returns An HTMLElement with a property set.
 */
const setAnyAttribute = function (
  this: HTMLElement,
  name: string,
  value: StaticAttribute
): HTMLElement {
  if (typeof value === 'string') {
    this.setAttribute(name, value)
  } else if (typeof value === 'boolean') {
    if (value === true) {
      this.setAttribute(name, '')
    } else {
      this.removeAttribute(name)
    }
  } else {
    let listenerFunction: Function = value
    this.addEventListener(name, (event: Event) => {
      listenerFunction(event)
    })
  }

  return this
}

/**
 *
 */
export class Reactive {
  observable: Observable = new Observable()

  // Reference
  dataset: string
  reference: string
  query?: HTMLElement | SVGElement

  // Element
  tag: string
  classes: string[] = []
  children: StaticChild[] = []
  attributes: StaticAttributes = {}

  constructor(id: string, elementBase: HTMLElement | SVGElement) {
    this.dataset = `ref=${id}`
    this.reference = `[data-${this.dataset}]`
    this.query = query(this.reference)
    this.tag = elementBase.tagName.toLowerCase()
  }
}
