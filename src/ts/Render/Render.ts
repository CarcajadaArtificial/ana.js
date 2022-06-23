/**
 * @module Render
 */
import { AttributeValuesDictionary } from '../types'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                _
//  |  _ \ ___ _ __   __| | ___ _ __
//  | |_) / _ \ '_ \ / _` |/ _ \ '__|
//  |  _ <  __/ | | | (_| |  __/ |
//  |_| \_\___|_| |_|\__,_|\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * 
 * @returns 
 */
export const createRenderer = (): any => {
  return new Proxy({}, { 
    get: (target, prop) => {
      target
      const tagName = String(prop)
      // prettier-ignore
      const svgElements: string[] = ['circle','ellipse','line','polygon','polyline','rect','defs','g','marker','mask','svg','switch','symbol','desc','linearGradient','radialGradient','stop','image','path','text','use']
      // prettier-ignore
      const emptyElements: string[] = ['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']
      
      if(svgElements.includes(tagName)) {
        return renderSVG(tagName)
      } else if(emptyElements.includes(tagName)) {
        return renderWithoutChildren(tagName)
      } else {
        return renderWithChildren(tagName)
      }
    }
  })
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Checks if a function is being passed as children to an element. Usually because of a missed parenthesis: Incorrect: `div('class')(div('class'))` Correct: `div('class')(div('class')())`
 * @param children This array of *potential* children, must have the functions filtered out. These happen when the developer using this framework forgets to add a second set of parenthesis when rendering an element.
 * @returns An array of children, with the functions filtered out.
 */
const checkChildren = (
  children: [Node | string | Function]
): [Node | string] => {
  var checkedChildren: any[] = []
  children.forEach((child) => {
    if (typeof child === 'function') {
      // Error: Recieved a function as an element's child. This is because the second parentesis was missed: a.div() => a.div()()
    } else {
      checkedChildren.push(child)
    }
  })
  return checkedChildren as [Node | string]
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
  (...classes: string[]): Function => {
    let htmlelement = document.createElement(elementName)
    if (classes.length > 0) {
      htmlelement.classList.add(...classes)
    }
    return (...children: [Node | string | Function]): HTMLElement => {
      htmlelement.append(...checkChildren(children))
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
  (...classes: string[]): HTMLElement => {
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
  (...children: [Node | string | Function]): Function =>
  (attributes: AttributeValuesDictionary): Node => {
    let svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      elementName
    )
    svgElement.append(...checkChildren(children))
    if (attributes) {
      svgElement.has(attributes)
    }
    return svgElement
  }
