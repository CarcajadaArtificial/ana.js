//    _         _         _ 
//   | |   __ _| |__  ___| |
//   | |__/ _` | '_ \/ -_) |
//   |____\__,_|_.__/\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Atom/Label
 */
 import { AnaComponent } from '../../Components'

 /**
  * ## Description
  * A Label is one of two base typographical elements, slightly smaller than a Paragraph.
  * 
  * ## Usage
  * - This element is used for short text, a few words at most. For multilinear text, use a Paragraph instead
  * 
  * ## Anatomy
  * 
  * ### Properties
  * - `text?` Every typographical element must be able to render custom text.
  * 
  * ### Styles
  * - `font-size` 12px
  * - `line-height` 16px
  * - `font-weight` 400
  * - `margin-bottom` 0px
  * - `text-align` left
  */
 export class Label extends AnaComponent {
   render: Function = (param: iLabel = {}): HTMLElement => {
     const a = this.a
     //param = extendParameterDefaults<tLabel>(param, { text: 'Label' })
 
     return a
       .div(a.span(param.text).has({ class: this.classRoot }))
       .has({ class: `${this.classRoot}-container` })
   }
 }
 
 interface iLabel {
   text?: string
   [key: string]: tLabel
 }
 
 type tLabel = undefined | string