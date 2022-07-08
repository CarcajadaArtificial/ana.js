import { StateReference, StaticAttributes, StaticChild } from '../types'
import { Reactive } from '../Reactive.ts/Reactive'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                _
//  |  _ \ ___ _ __   __| | ___ _ __
//  | |_) / _ \ '_ \ / _` |/ _ \ '__|
//  |  _ <  __/ | | | (_| |  __/ |
//  |_| \_\___|_| |_|\__,_|\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
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
export function render<RenderType>(): RenderType {
  return new Proxy(
    {},
    {
      get: (target, prop) => {
        target
        const tagName: string = String(prop)
        const svgElements: string[] = window.ana.config.svgElements
        const emptyElements: string[] = window.ana.config.emptyElements

        if (svgElements.includes(tagName)) {
          // Render SVG
          return (...children: StaticChild[]): Function =>
            (attributes: StaticAttributes): SVGElement => {
              let svgElement = document.createElementNS(
                'http://www.w3.org/2000/svg',
                tagName
              )
              svgElement.append(...children)
              svgElement.has(attributes)
              return svgElement
            }
        } else if (emptyElements.includes(tagName)) {
          // Render Empty
          return (...classes: (string | StateReference)[]): HTMLElement =>
            addClasses(document.createElement(tagName), ...classes)
        } else {
          // Render Parent
          return (...classes: (string | StateReference)[]): Function =>
            (
              ...children: (StaticChild | StateReference)[]
            ): HTMLElement | SVGElement =>
              addChildren(
                addClasses(document.createElement(tagName), ...classes),
                ...children
              )
        }
      },
    }
  ) as RenderType

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  function addClasses(
    element: HTMLElement,
    ...classes: (string | StateReference)[]
  ): HTMLElement {
    classes.forEach((reactiveClass: string | StateReference): void => {
      if (reactiveClass instanceof StateReference) {
        // Is StateReference
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
  function addChildren(
    element: HTMLElement | SVGElement,
    ...children: (StaticChild | StateReference)[]
  ): HTMLElement | SVGElement {
    children.forEach((reactiveChildren: StaticChild | StateReference): void => {
      if (reactiveChildren instanceof StateReference) {
        // Is StateReference
        if (element.dataset.ref === undefined) {
          let reactive = new Reactive(element)
          element.dataset.ref = reactive.id
        }
        window.ana.reactives[element.dataset.ref].children.push(
          window.ana.state[reactiveChildren.name]
        )
        window.ana.relations[reactiveChildren.name].push(element.dataset.ref)

        element.append(reactiveChildren.value)
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
