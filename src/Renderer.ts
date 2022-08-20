//   ___             _
//  | _ \___ _ _  __| |___ _ _ ___ _ _
//  |   / -_) ' \/ _` / -_) '_/ -_) '_|
//  |_|_\___|_||_\__,_\___|_| \___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { dictionaryReduce } from './utils.ts';
import { Attribute, Attributes, Child, Children } from './types.ts';

/**
 *
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
