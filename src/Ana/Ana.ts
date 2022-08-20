//     _
//    /_\  _ _  __ _
//   / _ \| ' \/ _` |
//  /_/ \_\_||_\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Renderer } from '../Renderer.ts';
import { applyDefaults } from '../utils.ts';
import { AnaConfig, iAnaConfig, dAnaConfig } from './Ana.interface.ts';
import { Elements } from '../Elements.ts';

/**
 * This is the home class for the Ana framework.
 */
export class Ana {
  /**
   * The framework is configured during the construction of the Ana class. Any initial behavior should
   * be placed in here.
   * @param config The settings made by the user to alter the framework configuraiton.
   */
  constructor(config: iAnaConfig = {}) {
    if (config !== {}) {
      this.config = applyDefaults<AnaConfig, iAnaConfig>(dAnaConfig, config);
    }
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * Contains the framework's settings, initially set to the default configuration (`dAnaConfig`).
   */
  private config = dAnaConfig;

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This function is an extremely simplified html renderer. It receives a property in the following
   * syntax: `a.div`. The renderer `a` is a mere ES6 Proxy Object using the get() method. It will have
   * intellisense functionalities thanks to the `Elements` Interface.
   *
   * By design, Ana.js gives priority to two properties of an HTML element. Firstly, in their classes,
   * the most important of them all. There shouldn't be any filler elements without classes. Secondly,
   * the children that are rendered inside the element. Their functionality is essential for the
   * framework, they are the most basic feature, demonstrated here: `a.div(...classes)(...children)`.
   *
   * What is an "empty element"? It's not designed to have any other elements inside of it. Examples of
   * this are: `<input />`, `<img />`, `<link />`, `<meta />`, etc. This function renders these kinds of
   * elements. `a.input(class).has(attributes)`.
   *
   * @returns a Proxy that emulates a dictionary of render functions. Some properties of this dictionary
   * render SVGElements, others render Empty Elements, and others render Elements that can be parents.
   * If it "tries to access" property not defined inside this emulated dictionary, then it renders a
   * custom Element, e.g. `<foo></foo>`.
   */
  render = new Proxy(
    {},
    {
      get: (target, prop) => {
        target;
        const tagName = String(prop);
        const isSvg = this.config.svgElements.includes(tagName);
        const isEmpty = this.config.emptyElements.includes(tagName);
        const element = new Renderer(tagName, isSvg, isEmpty);

        if (isEmpty) {
          return (...classes: [string]): Renderer => {
            if (classes.length > 0) {
              element.has({ class: classes.join(' ') });
            }
            return element;
          };
        } else {
          return (...classes: [string]) =>
            (...children: [Renderer | string]): Renderer => {
              if (classes.length > 0) {
                element.has({ class: classes.join(' ') });
              }
              if (children.length > 0) {
                element.addChildren(...children);
              }
              return element;
            };
        }
      },
    }
  ) as Elements;
}
