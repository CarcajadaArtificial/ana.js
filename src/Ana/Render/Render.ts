/**
 * @module Render
 */
import { AnaConfiguration } from '../Ana/Ana.interface'
import { StaticAttributes, StaticChild } from '../types'
import { Observable } from '../Observable/Observable'
import { GenericData } from '../types'
import { byId } from '../Utils/Utils'

/**
 * Ana.js extends the HTMLElement and SVGELement modules. This module extensions are essential to the
 * library.
 */
declare global {
  interface HTMLElement {
    rerender(): Function
    has(attributes: StaticAttributes): HTMLElement
  }
  interface SVGElement {
    has(attributes: StaticAttributes): HTMLElement
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                _
//  |  _ \ ___ _ __   __| | ___ _ __
//  | |_) / _ \ '_ \ / _` |/ _ \ '__|
//  |  _ <  __/ | | | (_| |  __/ |
//  |_| \_\___|_| |_|\__,_|\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This class is in charge of rendering the application and react to changes made to the app's data 
 * state by rerendering the app.
 * 
 * ```Typescript
 * const ana = new Ana()
 * const app = ana.createApp
 * const a = app.render // This is the ReactiveRenderer instance
 * ```
 */
export class ReactiveRenderer {
  /**
   * Using the global configuration, creates the renderer function. This step happens after the Ana 
   * instance is constructed and there should be only one instance of ReactiveRenderer per application.
   * It adds the extensions for the HTMLElement and SVGElement interfaces.
   *
   * @param config The global configuration is required for various rendering functionalities.
   */
  constructor(config: AnaConfiguration) {
    this.config = config
    HTMLElement.prototype.has = has
    SVGElement.prototype.has = has
  }

  private config: AnaConfiguration

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This property makes the latest snapshot of the app's data sate available to the rest of the class.
   */
  private d: GenericData = {}

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This property is in charge of emitting changes to the app's data state and running rerendering functions.
   */
  private obs: Observable = new Observable()

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * Used to mount the application and start the rendering process. By default, it adds the rendered 
   * elements inside an element with a predefined id. This can be configured using the attribute 
   * `appContainerId` in the global configuration object.
   *
   * @param data This is the initial state of the app's data. Contains all of the values that can be
   * changed after the rendering has finished. Also, the application will rerender when any of these
   * change.
   *
   * @param appRenderFunction This function should receive the app's data state as argument and return
   * an the HTMLElement containing the app. For example: `(d: GenericData) => a.div()()`
   */
  init: Function = (data: GenericData, appRenderFunction: Function): void => {
    this.d = data
    const rerender = (d: GenericData) =>
      (byId(this.config.appContainerId).innerHTML =
        appRenderFunction(d).outerHTML)
    rerender(this.d)
    this.obs.subscribe(rerender)
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This funciton is used to update the state and rerender the app's view.
   *
   * @param data The new values that will update the current app's data state.
   */
  up: Function = (data: GenericData): void => {
    this.d = { ...this.d, ...data }
    this.obs.emit(this.d)
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This dictionary is used to contain the render functions of custom components. As a convention, 
   * component names should start with uppercase.
   */
  components: { [key:string]: Function } = {}

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This function is an extremely simplified HTMLElement/SVGElement renderer. It receives a property in
   * an `a.div` syntax (`a`, being the renderer and `div` being the property). The renderer `a` is a
   * mere ES6 Proxy Object. When the prop `div` is passed to the proxy, it looks inside the configured
   * `svgElements` list and uses an SVG Renderer. Then, it looks inside the configured `emptyElements`
   * list and uses a Renderer Without Children. If the property is not found in any of these lists use a
   * Renderer With Children.
   * 
   * This property will be used by the developer right after constructing the instance of 
   * ReactiveRenderer. Also, it provides intellisense functionalities to TypeScript developers using Ana.
   * js this is thanks to the Render Interface.
   *
   * @param config The library's configuration object is necessary because the function accesses
   * `svgElements` and `emptyElements`.
   *
   * @returns a Proxy that emulates a dictionary of render functions. Some properties of this dictionary
   * render SVGElements, others render Empty Elements, and others render Elements that can be parents.
   * If it "tries to access" property not defined inside this emulated dictionary, then it renders a
   * custom Element.
   *
   * SVG Render:
   * `a.svg(children)(attributes)`
   *
   * Empty Element Render:
   * `a.input(class).has(attributes)`
   *
   * Parent Element (and Custom Element):
   * `a.div(class)(children).has(attributes)`, `a.custom(class)(children).has(attributes)`
   */
  render = <RenderType>(): RenderType => {
    return new Proxy(
      {},
      {
        get: (target, prop) => {
          target
          const tagName: string = String(prop)
          const svgElements: string[] = this.config.svgElements
          const emptyElements: string[] = this.config.emptyElements
          const componentNames: string[] = Object.keys(this.components)

          if (componentNames.includes(tagName)) {
            return this.components[tagName]
          } else if (svgElements.includes(tagName)) {
            return this.renderSVG(tagName)
          } else if (emptyElements.includes(tagName)) {
            return this.renderEmpty(tagName)
          } else {
            return this.renderParent(tagName)
          }
        },
      }
    ) as RenderType
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * By design, Ana.js gives priority to two properties of an HTML element. Firstly, in their classes,
   * the most important of them all. There shouldn't be any filler elements without classes, every part
   * of the interface must be designed with element classes in mind. Secondly, the children are rendered
   * inside the element. Their functionality is essential for the framework, they are the most basic
   * feature, demonstrated here: `a.div(...classes)(...children)`.
   * 
   * ```TypeScript
   * renderParent(name)(...classes)(...children)
   * ```
   *
   * @param elementName To create an element renderer
   *
   * @returns Function that can start the rendering process of a parent HTMLElement.
   */
  private renderParent =
    (elementName: string): Function =>
    /**
     * ```TypeScript
     * a.div(...classes)(...children)
     * //   | <- This function
     * ```
     * 
     * @param classes It is the only attribute not added with the `.has()` function, it is special that
     * way, first the class, then everything else.
     *
     * @returns A function that can render an HTMLElement.
     */
    (...classes: string[]): Function => {
      let htmlelement = document.createElement(elementName)
      if (classes.length > 0) {
        htmlelement.classList.add(...classes)
      }
      return (
        /**
         *```TypeScript
         * a.div(...classes)(...children)
         * //               | <- This function
         * ```
         * 
         * @param children The array of elements to be placed inside this one.
         *
         * @returns An element, fully classed, with the list of children inside of it.
         */
        (...children: StaticChild[]): HTMLElement => {
          htmlelement.append(...children)
          return htmlelement
        }
      )
    }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * What is an "empty element"? It's not designed to have any other elements inside of it. Examples of
   * this are: `<input />`, `<img />`, `<link />`, `<meta />`, etc. This function renders these kinds of
   * elements. `a.input(class).has(attributes)`.
   * 
   * ```TypeScript
   * renderEmpty(name)(...classes)
   * ```
   *
   * @param elementName The name of the element that will be rendered.
   *
   * @returns A completely rendered empty element with classes.
   */
  private renderEmpty =
    (elementName: string): Function =>
    /**
     * ```TypeScript
     * a.img(...classes)
     * //   | <- This function
     * ```
     * @param classes The only input that an empty element need is a class. Anything else will be added
     * later, using auxiliary functions like 'has'.
     *
     * @returns A complete html element without any attributes other than the class.
     */
    (...classes: string[]): HTMLElement => {
      let htmlelement = document.createElement(elementName)
      if (classes.length > 0) {
        htmlelement.classList.add(...classes)
      }
      return htmlelement
    }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This function creates an SVGElement renderer using only the element's tag name. To finish the
   * rendering process, two additional steps must be made, one that adds children, and another that sets
   * attributes. `renderSVG('svg')` will be accessed like this: `a.svg`.
   *
   * ```TypeScript
   * renderSVG(name)(...children)(attributes)
   * ```
   *
   * @returns A render function for an SVGElement.
   *
   * @todo Check if Obejct.getPrototypeOf(child).constructor.name starts with "HTML", and throw an error
   * if so.
   */
  private renderSVG =
    (elementName: string): Function =>
    /**
     * ```TypeScript
     * a.svg(...children)(attributes)
     * //   | <- This function
     * ```
     * @param children This spread argument contains the elements that will be appended inside the one
     * being rendered.
     *
     * @returns A function that renders an SVGElement given a dictionary of attributes.
     */
    (...children: StaticChild[]): Function =>
    /**
     * * ```TypeScript
     * a.svg(...children)(attributes)
     * //                | <- This function
     * ```
     *
     * @param attributes A dictionary of attributes to render the SVGElement.
     *
     * @returns A completely rendered SVG Element with children an attributes.
     */
    (attributes: StaticAttributes): Node => {
      let svgElement = document.createElementNS(
        'http://www.w3.org/2000/svg',

        elementName
      )
      svgElement.append(...children)
      if (attributes) {
        svgElement.has(attributes)
      }
      return svgElement
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
