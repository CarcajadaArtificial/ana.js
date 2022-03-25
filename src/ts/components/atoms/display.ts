//    ___  _         _           
//   |   \(_)____ __| |__ _ _  _ 
//   | |) | (_-< '_ \ / _` | || |
//   |___/|_/__/ .__/_\__,_|\_, |
//             |_|          |__/ 
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Atom/Display
 */
 import { AnaComponent, extendParameterDefaults } from '../../elements'

 /**
  * A Display is large decorative text found rarely on a page. It can be used in any way as long as the text doesn't feel crowded and is legible.
  */
 export class Display extends AnaComponent {
   render: Function = (param: iDisplay = {}): HTMLElement => {
     const a = this.a
     param = extendParameterDefaults<tDisplay>(param, { text: 'Display' })
 
     return a
       .div(a.span(param.text).has({ class: this.classRoot }))
       .has({ class: `${this.classRoot}-container` })
   }
 }
 
 interface iDisplay {
   /**
    * Every typographical element has the `text` property, it is the content inside the element.
    */
   text?: string
   [key: string]: tDisplay
 }
 
 type tDisplay = undefined | string
 