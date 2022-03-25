//     ___                        _                   
//    / _ \ _ __ __ _  __ _ _ __ (_)___ _ __ ___  ___ 
//   | | | | '__/ _` |/ _` | '_ \| / __| '_ ` _ \/ __|
//   | |_| | | | (_| | (_| | | | | \__ \ | | | | \__ \
//    \___/|_|  \__, |\__,_|_| |_|_|___/_| |_| |_|___/
//              |___/                                 
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Organisms
 */
 import { AnaComponent, extendParameterDefaults } from './elements'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iPage {
  /**
   * iPage children property
   */
  children?: HTMLElement[]
  /**
   * iPage pageLayout property
   */
  pageLayout?: string
  /**
   * iPage pageMargin property
   */
  pageMargin?: string
  /**
   * iPage string indexer
   */
  [key: string]: tPage
}
/**
 * Page Types
 */
export type tPage = undefined | HTMLElement[] | string
/**
 * Page Class
 */
export class Page extends AnaComponent {
  render: Function = (param: iPage = {}): HTMLElement => {
    const a = this.a
    param = extendParameterDefaults<tPage>(param, {
      children: [],
      pageLayout: 'full',
      pageMargin: 'full',
    })

    return a
      .div(
        a
          .main(
            a.div(...param.children!).has({
              class: `${this.classRoot}-layout a-layout-${param.pageLayout} a-layout-margin-${param.pageMargin}`,
            })
          )
          .has({ class: this.classRoot })
      )
      .has({ class: `${this.classRoot}-container` })
  }
}