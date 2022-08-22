//   ___             _
//  | _ \___ _ _  __| |___ _ _ ___ _ _
//  |   / -_) ' \/ _` / -_) '_/ -_) '_|
//  |_|_\___|_||_\__,_\___|_| \___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * What is a Renderer? It is an object that holds data and renders HTML/SVG code with it. This class is the minimum abstraction of an element. Ana uses Renderers as the objects delivered by the `const a = ana.render` Proxy. Renderers are not immutable, as soon as they are created, they are modified to have css classes and children nodes added to them. Afterwards, you may add attributes with the `.has()` function.
 *
 * ### Example
 * ```TypeScript
 * const divRenderer = new Renderer('div', false, false)
 * divRenderer.render() // -> <div></div>
 *
 * const inputRenderer = new Renderer('input', false, true)
 * inputRenderer.render() // -> <input />
 *
 * const svgRenderer = new Renderer('svg', true, false)
 * svgRenderer.render() // -> <svg xmnls="http://www.w3.org/2000/svg"></svg>
 * ```
 *
 * @module
 */

import { dictionaryReduce } from './utils.ts';
import { Attribute, Attributes, Child, Children } from './types.ts';

/**
 * Renderer class
 */
export class Renderer {
  constructor(
    private tagName: string,
    private isSvg: boolean,
    private isEmpty: boolean
  ) {
    this.attributes = {};
    this.children = [];
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  private attributes: Attributes;

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  private children: Children;

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   * @param attributes
   * @returns
   */
  has = (attributes: Attributes): Renderer => {
    this.attributes = { ...this.attributes, ...attributes };
    return this;
  };

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   * @param children
   * @returns
   */
  addChildren = (...children: Children): Renderer => {
    if (!this.isEmpty) {
      this.children = children;
    }
    return this;
  };

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  render = (): string => {
    const opening = '<' + this.tagName;
    const svgAttribute = this.isSvg
      ? ' xmnls="http://www.w3.org/2000/svg"'
      : '';
    const attributes = renderAttributes(this.attributes);
    const children = this.isEmpty ? '' : '>' + renderChildren(this.children);
    const closing = this.isEmpty ? ' />' : '</' + this.tagName + '>';

    return opening + svgAttribute + attributes + children + closing;
  };
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 * @param attributes
 * @returns
 */
function renderAttributes(attributes: Attributes): string {
  return dictionaryReduce<Attribute, string>(
    attributes,
    (entry: Attribute, key: string, acum: string): string => {
      if (typeof entry === 'string') {
        return acum + `${key}="${entry}" `;
      } else {
        return acum + `${key} `;
      }
    },
    ' '
  ).slice(0, -1);
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 * @param children
 * @returns
 */
function renderChildren(children: Children): string {
  let acum = '';
  children.forEach((child: Child) => {
    if (typeof child === 'string') {
      acum += child;
    } else {
      acum += child.render();
    }
  });
  return acum;
}
