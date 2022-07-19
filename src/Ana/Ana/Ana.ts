import {
  AnaConfiguration,
  dAnaConfiguration,
  iAnaConfiguration,
} from './Ana.interface'
import { applyDefaults, byId, objectMap } from '../utils'
import { globalOverrides } from '../global'
import { GenericData, StaticChild } from '../types'
import { Reference, ReferenceFunction } from '../Reference/Reference'
import { Render } from '../Render/Render.interface'
import { Reactive } from '../Reactive/Reactive'

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
   * This function instantiates the framework.
   */
  constructor(config: iAnaConfiguration = {}) {
    globalOverrides(
      applyDefaults<AnaConfiguration, iAnaConfiguration>(
        dAnaConfiguration,
        config
      )
    )
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  f: Function = (cb: Function, ...args: Reference[]) =>
    new ReferenceFunction(cb, ...args)

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This funciton is used to update the state and rerender the app's view.
   *
   * @param data The new values that will update the current app's data state.
   */
  up: { [key: string]: Function } = {}
  _up: { [key: string]: Function } = {}

  state: GenericData = {}
  reactives: { [key: string]: Reactive[] } = {}
  relations: { [key: string]: string[] } = {}

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
    this.state = objectMap(data, (value, key) => new Reference(value, key))
    this._up = objectMap(
      data,
      (_value, key) => (newValue: any) =>
        this.state[key].update(newValue, window.ana.reactives[key])
    )
    // Deprecated
    // ---
    for (let key in data) {
      window.ana.state[key] = new Reference(data[key], key)
      window.ana.relations[key] = []
      // Iterate over relations
      this.up[key] = (newValue: any) => {
        console.log(window.ana.state, key, window.ana.state[key])
        window.ana.state[key].value = newValue
        this.state[key].update(newValue)
        window.ana.relations[key].forEach((relation: string) => {
          window.ana.reactives[relation].observable.emit()
        })
      }
    }
    // ---
    byId(window.ana.config.appContainerId).append(appRenderFunction(this.state))
  }

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
   * Empty Element Render:
   * What is an "empty element"? It's not designed to have any other elements inside of it. Examples of
   * this are: `<input />`, `<img />`, `<link />`, `<meta />`, etc. This function renders these kinds of
   * elements. `a.input(class).has(attributes)`.
   *
   * Parent Element (and Custom Element):
   * By design, Ana.js gives priority to two properties of an HTML element. Firstly, in their classes,
   * the most important of them all. There shouldn't be any filler elements without classes, every part
   * of the interface must be designed with element classes in mind. Secondly, the children are rendered
   * inside the element. Their functionality is essential for the framework, they are the most basic
   * feature, demonstrated here: `a.div(...classes)(...children)`.
   *
   * SVG Render:
   * This function creates an SVGElement renderer using only the element's tag name. To finish the
   * rendering process, two additional steps must be made, one that adds children, and another that sets
   * attributes. `renderSVG('svg')` will be accessed like this: `a.svg`.
   *
   * @returns a Proxy that emulates a dictionary of render functions. Some properties of this dictionary
   * render SVGElements, others render Empty Elements, and others render Elements that can be parents.
   * If it "tries to access" property not defined inside this emulated dictionary, then it renders a
   * custom Element.
   */
  readonly render = new Proxy(
    {},
    {
      get: (target, prop) => {
        target
        let tagName: string = String(prop)
        let svgElements: string[] = window.ana.config.svgElements
        let emptyElements: string[] = window.ana.config.emptyElements

        if (svgElements.includes(tagName)) {
          return this.createElementRenderer(tagName, false, true)
        } else if (emptyElements.includes(tagName)) {
          return this.createElementRenderer(tagName, true)
        } else {
          return this.createElementRenderer(tagName)
        }
      },
    }
  ) as Render

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * Creates a renderer function depending on the settings. A renderer function can render one html or
   * svg element, e.g. `a.div(classes)(children)`. This renderer function can be created like this:
   * `a.div = createElementRenderer('div')`.
   *
   * @param tagName The element's tag name.
   *
   * @param isEmpty True for elements that don't render children e.g.
   * `a.input = createElementRenderer('input', true)`
   *
   * @param isSVG True for element that are of type SVG anr require the W3 Url to be rendered e.g.
   * `a.svg = createElementRenderer('svg', false, true)`
   *
   * @returns The function that will render an html or svg element.
   */
  private createElementRenderer(
    tagName: string,
    isEmpty: boolean = false,
    isSVG: boolean = false
  ): Function {
    let element = isSVG
      ? document.createElementNS('http://www.w3.org/2000/svg', tagName)
      : document.createElement(tagName)

    return isEmpty
      ? (...classes: (string | Reference)[]): HTMLElement | SVGElement =>
          this.addClasses(element, ...classes)
      : (...classes: (string | Reference)[]): Function =>
          (
            ...children: (StaticChild | Reference)[]
          ): HTMLElement | SVGElement =>
            this.addChildren(this.addClasses(element, ...classes), ...children)
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  private charge<T>(
    reactiveData: T | Reference,
    element: HTMLElement | SVGElement,
    isReferenceFunction: boolean = false
  ): HTMLElement | SVGElement {
    if (reactiveData instanceof Reference) {
      if (element.dataset.ref === undefined) {
        let reactive = new Reactive(element, this)
        element.dataset.ref = reactive.id
      }

      // Agregar a reactivos

      let dataRef: string = element.dataset.ref

      this.reactives[dataRef]
    } else if (
      isReferenceFunction &&
      reactiveData instanceof ReferenceFunction
    ) {
    } else {
    }

    if (reactiveData instanceof Reference) {
      // Is Reference
      if (element.dataset.ref === undefined) {
        let reactive = new Reactive(element)
        element.dataset.ref = reactive.id
      }
      window.ana.reactives[element.dataset.ref].classes.push(
        window.ana.state[reactiveData.name]
      )
      window.ana.relations[reactiveData.name].push(element.dataset.ref)

      element.classList.add(reactiveData.value)
    } else {
      // Is not State Reference
      if (element.dataset.ref !== undefined) {
        window.ana.reactives[element.dataset.ref].classes.push(reactiveData)
      }

      element.classList.add(reactiveData)
    }
    return element
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  private addClasses(
    element: HTMLElement | SVGElement,
    ...classes: (string | Reference)[]
  ): HTMLElement | SVGElement {
    classes.forEach((reactiveClass: string | Reference): void => {
      if (reactiveClass instanceof Reference) {
        // Is Reference
        if (element.dataset.ref === undefined) {
          let reactive = new Reactive(element)
          element.dataset.ref = reactive.id
        }
        window.ana.reactives[element.dataset.ref].classes.push(
          window.ana.state[reactiveClass.name]
        )
        window.ana.relations[reactiveClass.name].push(element.dataset.ref)

        element.classList.add(reactiveClass.value)
      } else {
        // Is not State Reference
        if (element.dataset.ref !== undefined) {
          window.ana.reactives[element.dataset.ref].classes.push(reactiveClass)
        }

        element.classList.add(reactiveClass)
      }
    })

    return element
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  private addChildren(
    element: HTMLElement | SVGElement,
    ...children: (StaticChild | Reference)[]
  ): HTMLElement | SVGElement {
    children.forEach((reactiveChildren: StaticChild | Reference): void => {
      if (reactiveChildren instanceof Reference) {
        // Is Reference
        if (element.dataset.ref === undefined) {
          let reactive = new Reactive(element)
          element.dataset.ref = reactive.id
        }
        window.ana.reactives[element.dataset.ref].children.push(
          window.ana.state[reactiveChildren.name]
        )
        window.ana.relations[reactiveChildren.name].push(element.dataset.ref)

        element.append(reactiveChildren.value)
      } else if (reactiveChildren instanceof ReferenceFunction) {
        if (element.dataset.ref === undefined) {
          let reactive = new Reactive(element)
          element.dataset.ref = reactive.id
        }
        window.ana.reactives[element.dataset.ref].children.push(
          reactiveChildren
        )
        reactiveChildren.argNames.forEach((argName: string) => {
          window.ana.relations[argName].push(element.dataset.ref!)
        })

        let referenceFunctionResult = reactiveChildren.run()

        if (Array.isArray(referenceFunctionResult)) {
          element.append(...referenceFunctionResult)
        } else {
          element.append(referenceFunctionResult)
        }
      } else {
        // Is not State Reference
        if (element.dataset.ref !== undefined) {
          window.ana.reactives[element.dataset.ref].children.push(
            reactiveChildren
          )
        }

        element.append(reactiveChildren)
      }
    })

    return element
  }
}
