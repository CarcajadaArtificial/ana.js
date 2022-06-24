/**
 * @module Ana
 */
import {
  AnaConfiguration,
  dAnaConfiguration,
  iAnaConfiguration,
} from './Ana.interface'
import { GenericData, AttributeValuesDictionary } from '../types'
import { Observable } from '../Observable/Observable'
import { createRenderer } from '../Render/Render'
import { applyDefaultParameters } from '../Utils/Utils'
import { Render } from '../Render/Render.interface'

declare global {
  interface HTMLElement {
    has(attributes: AttributeValuesDictionary): HTMLElement
  }
  interface SVGElement {
    has(attributes: AttributeValuesDictionary): HTMLElement
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
   * This private observable is in charge of making the UI react to changes in the state.
   */
  private obs: Observable = new Observable()

  /**
   * This object functions as storage for the state up to the latest changes.
   */
  private state: GenericData = {}

  /**
   * This function creates the starting app for the responsive rendering of a page.
   */
  app(state: GenericData, render: Function): void {
    this.obs.subscribe(render)
    this.up(state)
  }

  /**
   * This function updates the state and emits the change to the observable.
   */
  up(state: GenericData) {
    this.state = { ...this.state, ...state }
    this.obs.emit(this.state)
  }

  /**
   * This function creates a dictionary of render functions for HTMLElements and UI components from the Ana framework.
   */
  render: Render

  /**
   * This function instantiates the framework.
   */
  constructor(configuration: iAnaConfiguration = {}) {
    let config = applyDefaultParameters<
      AnaConfiguration,
      iAnaConfiguration
    >(dAnaConfiguration, configuration)

    HTMLElement.prototype.has = has
    SVGElement.prototype.has = has

    // Adds ana.js-check
    if(config.extensions.check) {
      config.extensions.check()
    }

    // Adds ana.js-ui
    if(config.extensions.atoms) {
      this.render = config.extensions.atoms
    } else {
      this.render = createRenderer(config)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function extends HTMLElement.prototype.setAttribute to support a dictionary of attributes instead of setting them one by one.
 */
export const has = function (
  this: HTMLElement,
  attributes: AttributeValuesDictionary
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