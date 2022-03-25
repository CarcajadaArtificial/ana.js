//    _  _             _ _           
//   | || |___ __ _ __| (_)_ _  __ _ 
//   | __ / -_) _` / _` | | ' \/ _` |
//   |_||_\___\__,_\__,_|_|_||_\__, |
//                             |___/ 
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Atoms
 */
 import { AnaComponent, extendParameterDefaults } from '../../elements'

 /**
  * A Heading is the medium-sized heading of the three heading types, the other two being the Subheading and the Title. It is conventionally used for titles of page sections, multiple of these can be found inside a single page.
  */
 export class Heading extends AnaComponent {
   render: Function = (param: iHeading = {}): HTMLElement => {
     const a = this.a
     param = extendParameterDefaults<tHeading>(param, { text: 'Heading' })
 
     return a
       .div(a.span(param.text).has({ class: this.classRoot }))
       .has({ class: `${this.classRoot}-container` })
   }
 }
 
 interface iHeading {
   text?: string
   [key: string]: tHeading
 }
 
 type tHeading = undefined | string