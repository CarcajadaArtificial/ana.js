//    _____ _ _   _     
//   |_   _(_) |_| |___ 
//     | | | |  _| / -_)
//     |_| |_|\__|_\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Atoms
 */
 import { AnaComponent } from '../../Components'

 /**
  * A Title is the largest heading of the three heading types, the other two being the Heading and Subheading. It is conventionally used for page title and only one can be found, usually at the top of the page.
  */
 export class Title extends AnaComponent {
   render: Function = (param: iTitle = {}): HTMLElement => {
     const a = this.a
     //param = extendParameterDefaults<tTitle>(param, { text: 'Title' })
 
     return a
       .div(a.span(param.text).has({ class: this.classRoot }))
       .has({ class: `${this.classRoot}-container` })
   }
 }
 
 interface iTitle {
   /**
    * Every typographical element has the `text` property, it is the content inside the element.
    */
   text?: string
   [key: string]: tTitle
 }
 
 type tTitle = undefined | string