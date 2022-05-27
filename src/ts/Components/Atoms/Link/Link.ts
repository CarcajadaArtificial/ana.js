//    _    _      _   
//   | |  (_)_ _ | |__
//   | |__| | ' \| / /
//   |____|_|_||_|_\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Atoms
 */
 import { AnaComponent } from '../../Components'

 /**
  * Link Class
  */
  export class Link extends AnaComponent {
   render: Function = (param: iLink = {}): HTMLElement => {
     const a = this.a
     //param = extendParameterDefaults<tLink>(param, {})
 
     return a.div()
   }
 }
 
 interface iLink {
   [key: string]: tLink
 }
 
 type tLink = undefined