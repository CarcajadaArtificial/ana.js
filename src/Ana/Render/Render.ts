/**
 * @module Render
 */
import { AnaConfiguration } from '../Ana/Ana.interface'
import { StaticAttributes, StaticChildren, StaticClasses } from '../types'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                _
//  |  _ \ ___ _ __   __| | ___ _ __
//  | |_) / _ \ '_ \ / _` |/ _ \ '__|
//  |  _ <  __/ | | | (_| |  __/ |
//  |_| \_\___|_| |_|\__,_|\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This function is an extremely simplified HTMLElement/SVGElement renderer. It receives a property in a `a.div` syntax (`a`, being the renderer and `div` being the property). The renderer `a` is a mere ES6 Proxy Object. When the prop `div` is passed to the proxy, it looks inside the configured `svgElements` list and uses a SVG Renderer. Then, it looks inside the configured `emptyElements` list and uses a Renderer Without Children. If the property is not found in any of these lists uses a Renderer With Children.
 *
 * @param config The library's configuration object is necessary because the function accesses `svgElements` and `emptyElements`
 *
 * @returns a Proxy that emulates a dictionary of render functions. Some properties of this dictionary render SVG Wlements, other render Empty Elements, and others render Elements that can be parents. If it "tries to access" property not defined inside this emulated dictionary, then it renders a custom Element.
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
export const createRenderer = (config: AnaConfiguration): any => {
  return new Proxy(
    {},
    {
      get: (target, prop) => {
        target
        const tagName: string = String(prop)
        const svgElements: string[] = config.svgElements
        const emptyElements: string[] = config.emptyElements

        if (svgElements.includes(tagName)) {
          return renderSVG(tagName)
        } else if (emptyElements.includes(tagName)) {
          return renderWithoutChildren(tagName)
        } else {
          return renderWithChildren(tagName)
        }
      },
    }
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
   By design, Ana.js gives priority to two properties of an HTML element. Firstly, in their classes, the most important of them all. There shouldn't be any filler elements without classes, every part of the interface must be designed with element classes in mind. Secondly, the children are rendered inside the element. Their functionality is essential for the framework, they are the most basic feature, demonstrated here: `a.div(...classes)(...children)`.
   * @param classes It is the only attribute not added with the `.has()` function, it is special that way, first the class, then everything else.
   * @param children The array of elements to be placed inside this one.
   * @returns An element, fully classed, with the list of children inside of it.
   */
const renderWithChildren =
  (elementName: string): Function =>
  (...classes: StaticClasses): Function => {
    let htmlelement = document.createElement(elementName)
    if (classes.length > 0) {
      htmlelement.classList.add(...classes)
    }
    return (...children: StaticChildren): HTMLElement => {
      htmlelement.append(...children)
      return htmlelement
    }
  }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * What is an "empty element"? It's not designed to have any other elements inside of it. Examples of this are: `<input />`, `<img />`, `<link />`, `<meta />`, etc. This function renders these kinds of elements. `a.input(class).has(attributes)`.
 * @param classes The only input that an empty element need is a class. Anything else will be added later, using auxiliary functions like 'has'.
 * @returns A complete html element without any attributes other than the class.
 */
const renderWithoutChildren =
  (elementName: string): Function =>
  (...classes: StaticClasses): HTMLElement => {
    let htmlelement = document.createElement(elementName)
    if (classes.length > 0) {
      htmlelement.classList.add(...classes)
    }
    return htmlelement
  }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function creates an SVGElement renderer, and it is the step where the framework's configuration affects the way the svgs are rendered. This function is necesary be
 * @returns A render function for an SVGElement.
 *
 * @todo Check if Obejct.getPrototypeOf(child).constructor.name starts with "HTML", and throw an error if so.
 */
const renderSVG =
  (elementName: string): Function =>
  (...children: StaticChildren): Function =>
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
