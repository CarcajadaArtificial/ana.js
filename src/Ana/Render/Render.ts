import { AnaConfiguration } from '../Ana/Ana.interface'
import {
  StateReference,
  StaticAttribute,
  StaticAttributes,
  StaticChild,
} from '../types'
import { Observable } from '../Observable/Observable'
import { GenericData } from '../types'
import { byId, query } from '../Utils/Utils'

/**
 * Ana.js extends the HTMLElement and SVGELement modules. This module extensions are essential to the
 * library.
 */
declare global {
  interface HTMLElement {
    has(attributes: StaticAttributes): HTMLElement
    setAnyAttribute(name: string, attributes: StaticAttribute): HTMLElement
  }
  interface SVGElement {
    has(attributes: StaticAttributes): HTMLElement
    setAnyAttribute(name: string, attributes: StaticAttribute): HTMLElement
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
    HTMLElement.prototype.setAnyAttribute = setAnyAttribute
    SVGElement.prototype.setAnyAttribute = setAnyAttribute
  }

  /**
   //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
   * 
   */
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
  private obs: { [key: string]: Observable } = {}

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
    for (const key in data) {
      this.d[key] = new StateReference(data[key], key)
      this.obs[key] = new Observable()
      this.up[key] = (value: any) => this.obs[key].emit(value)
    }
    this.initialRender(this.d, appRenderFunction)
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   * @param d
   * @param appRenderFunction
   * @returns
   */
  private initialRender = (d: GenericData, appRenderFunction: Function) =>
    (byId(this.config.appContainerId).innerHTML =
      appRenderFunction(d).outerHTML)

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This funciton is used to update the state and rerender the app's view.
   *
   * @param data The new values that will update the current app's data state.
   */
  up: { [key: string]: Function } = {}

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This dictionary is used to contain the render functions of custom components. As a convention,
   * component names should start with uppercase.
   */
  components: { [key: string]: Function } = {}

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  private reactiveElements: number = 0

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
    (...classes: string[]): Function =>
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
    (...children: StaticChild[]): HTMLElement | SVGElement =>
      this.addChildren(
        this.addClasses(document.createElement(elementName), ...classes),
        ...children
      )

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
    (...classes: string[] | StateReference[]): HTMLElement =>
      this.addClasses(document.createElement(elementName), ...classes)

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

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  private addClasses(
    htmlelement: HTMLElement,
    ...classes: string[] | StateReference[]
  ): HTMLElement {
    let reactiveReference = false

    // Validates that the array is not empty
    if (classes.length > 0) {
      let staticClasses: string[] = classes.map(
        (child: string | StateReference): string => {
          // If it is a reactive element
          if (child instanceof StateReference) {
            reactiveReference = true
            let referenceAttribute = `[data-ref-${this.reactiveElements}]`
            console.log(referenceAttribute)
            return typeof this.getValueAndSubscribe(child, (value: any) =>
              query(referenceAttribute).setAttribute('class', value)
            ) === 'string'
              ? child.value
              : String(child.value)
          } else {
            // If it is not a reactive element
            return child
          }
        }
      )
      htmlelement.setAttribute('class', staticClasses.join(' '))
    }

    if (reactiveReference) {
      htmlelement.dataset[`ref-${this.reactiveElements}`] = ''
      this.reactiveElements++
    }

    return htmlelement
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  private addChildren(
    element: HTMLElement | SVGElement,
    ...children: StaticChild[] | StateReference[]
  ): HTMLElement | SVGElement {
    let reactiveReference = undefined

    // Validates that the array is not empty
    if (children.length > 0) {
      let staticChildren: StaticChild[] = []
      // If it is a reactive element
      if (children[0] instanceof StateReference) {
        reactiveReference = true
        let referenceAttribute = `[data-ref-${this.reactiveElements}]`
        staticChildren = [
          this.getValueAndSubscribe(
            children[0],
            (value: any) => (query(referenceAttribute).innerHTML = value)
          ),
        ]
      } else {
        // If it is not a reactive element
        staticChildren = children as StaticChild[]
      }

      element.append(...staticChildren)
    }

    if (reactiveReference !== undefined) {
      element.dataset[`ref-${this.reactiveElements}`] = ''
      this.reactiveElements++
    }

    return element
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  private getValueAndSubscribe(
    stateref: StateReference,
    subscription: Function
  ): any {
    this.obs[stateref.name].subscribe(subscription)
    return stateref.value
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
export const setAnyAttribute = function (
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
