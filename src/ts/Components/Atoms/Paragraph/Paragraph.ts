//    ___                                  _    
//   | _ \__ _ _ _ __ _ __ _ _ _ __ _ _ __| |_  
//   |  _/ _` | '_/ _` / _` | '_/ _` | '_ \ ' \ 
//   |_| \__,_|_| \__,_\__, |_| \__,_| .__/_||_|
//                     |___/         |_|        
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Atom/Paragraph
 */
 import { AnaComponent } from '../../Components'

 /**
  * A Paragraph is one of two base typographical elements, slightly larger than a Label. This element is used for text that has multiple lines and more text after it, maybe a heading or another paragraph. If the content inside the element is a few words long, use a Label instead.
  */
 export class Paragraph extends AnaComponent {
   render: Function = (param: iParagraph = {}): HTMLElement => {
     const a = this.a
     //param = extendParameterDefaults<tParagraph>(param, { text: 'Paragraph' })
 
     return a
       .div(a.span(param.text).has({ class: this.classRoot }))
       .has({ class: `${this.classRoot}-container` })
   }
 }
 
 interface iParagraph {
   text?: string
   [key: string]: tParagraph
 }
 
 type tParagraph = undefined | string