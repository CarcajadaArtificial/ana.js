/**
 * @module Ana
 */
import {
  AnaConfiguration,
  dAnaConfiguration,
  iAnaConfiguration,
} from './Ana.interface'
import { StaticAttributes } from '../types'
import { applyDefaultParameters } from '../Utils/Utils'
import { App } from '../App/App'

declare global {
  interface HTMLElement {
    has(attributes: StaticAttributes): HTMLElement
  }
  interface SVGElement {
    has(attributes: StaticAttributes): HTMLElement
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//       _
//      / \   _ __   __ _
//     / _ \ | '_ \ / _` |
//    / ___ \| | | | (_| |
//   /_/   \_\_| |_|\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Home of the Ana framework.
 */
export class Ana {
  /**
   *
   */
  createApp: App

  /**
   * This function instantiates the framework.
   */
  constructor(configuration: iAnaConfiguration = {}) {
    let config = applyDefaultParameters<AnaConfiguration, iAnaConfiguration>(
      dAnaConfiguration,
      configuration
    )

    this.createApp= new App(config)

    HTMLElement.prototype.has = has
    SVGElement.prototype.has = has

    // Adds ana.js-check
    if (config.extensions.check) {
      config.extensions.check()
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function extends HTMLElement.prototype.setAttribute to support a dictionary of attributes instead of setting them one by one.
 */
export const has = function (
  this: HTMLElement,
  attributes: StaticAttributes
): HTMLElement {
  Object.keys(attributes).forEach((attributeName: string) => {
    let attribute = attributes[attributeName]
    if (typeof attribute === 'string') {
      this.setAttribute(attributeName, attribute)
    } else if (typeof attribute === 'boolean') {
      if (attribute === true) {
        this.setAttribute(attributeName, '')
      } else {
        this.removeAttribute(attributeName)
      }
    } else {
      let listenerFunction: Function = attribute
      this.addEventListener(attributeName, (event: Event) => {
        listenerFunction(event)
      })
    }
  })
  return this
}
