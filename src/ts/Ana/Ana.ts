/**
 * @module Ana
 */
import {
  AnaConfiguration,
  dAnaConfiguration,
  iAnaConfiguration,
} from './Ana.interface'
import { State, AttributeValuesDictionary } from '../types'
import { Observable } from '../Observable'
import { Render } from '../Elements/Elements'
import { applyDefaultParameters } from '../utils'

declare global {
  interface HTMLElement {
    has(attributes: AttributeValuesDictionary): HTMLElement
    setAttributes(attributes: AttributeValuesDictionary): HTMLElement
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
   * This object configures the framework's general functions.
   */
  configuration: AnaConfiguration

  /**
   * This private observable is in charge of making the UI react to changes in the state.
   */
  private obs: Observable = new Observable()

  /**
   * This object functions as storage for the state up to the latest changes.
   */
  private state: State = {}

  /**
   * This function creates the starting app for the responsive rendering of a page.
   */
  app(state: State, render: Function): void {
    this.obs.subscribe(render)
    this.up(state)
  }

  /**
   * This function updates the state and emits the change to the observable.
   */
  up(state: State) {
    this.state = { ...this.state, ...state }
    this.obs.emit(this.state)
  }

  /**
   * This function creates a dictionary of render functions for HTMLElements and UI components from the Ana framework.
   */
  // render: Function = (): RenderDictionary => createRenderDictionary(this.configuration)
  render: Render = new Render()

  /**
   * This function instantiates the framework.
   */
  constructor(configuration: iAnaConfiguration = {}) {
    this.configuration = applyDefaultParameters<
      AnaConfiguration,
      iAnaConfiguration
    >(dAnaConfiguration, configuration)

    HTMLElement.prototype.setAttributes = setAttributes
    HTMLElement.prototype.has = has
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function applies HTMLElement.prototype.setAttributes according to the HTMLElement standard dictionary inside of Window.matchDictionary.
 */
const has = function (
  this: HTMLElement,
  attributes: AttributeValuesDictionary
): HTMLElement {
  return this.setAttributes(attributes)
}

/**
 * This function extends HTMLElement.prototype.setAttribute to support a dictionary of attributes instead of setting them one by one.
 */
const setAttributes = function (
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
