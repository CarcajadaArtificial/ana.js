//    ___      _    _                _ _           
//   / __|_  _| |__| |_  ___ __ _ __| (_)_ _  __ _ 
//   \__ \ || | '_ \ ' \/ -_) _` / _` | | ' \/ _` |
//   |___/\_,_|_.__/_||_\___\__,_\__,_|_|_||_\__, |
//                                           |___/ 
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Atom/Subheading
 */
 import { AnaComponent, extendParameterDefaults } from '../../elements'

 /**
  * A Subheading is the smallest of the three heading types, the other two being the Heading and Title. It is conventionally used for titles of subsections, multiple of these can be found inside a section.
  */
 export class Subheading extends AnaComponent {
   render: Function = (param: iSubheading = {}): HTMLElement => {
     const a = this.a
     param = extendParameterDefaults<tSubheading>(param, { text: 'Subheading' })
 
     return a
       .div(a.span(param.text).has({ class: this.classRoot }))
       .has({ class: `${this.classRoot}-container` })
   }
 }
 
 interface iSubheading {
   text?: string
   [key: string]: tSubheading
 }
 
 type tSubheading = undefined | string