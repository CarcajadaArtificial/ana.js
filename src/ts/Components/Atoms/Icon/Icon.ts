//    ___             
//   |_ _|__ ___ _ _  
//    | |/ _/ _ \ ' \ 
//   |___\__\___/_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Atoms
 */
 import { AnaComponent } from '../../Components'

 /**
  * Icon Class
  */
  export class Icon extends AnaComponent {
   render: Function = (param: iIcon = {}): HTMLElement => {
     const a = this.a
     //param = extendParameterDefaults<tIcon>(param, {})
 
     return a.div()
   }
 }
 
 interface iIcon {
   [key: string]: tIcon
 }
 
 type tIcon = undefined