//    _    _      _   
//   | |  (_)_ _ | |__
//   | |__| | ' \| / /
//   |____|_|_||_|_\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Atoms
 */
 import { AnaComponent, extendParameterDefaults } from '../../elements'

 /**
  * Link Class
  */
  export class Link extends AnaComponent {
   render: Function = (param: iLink = {}): HTMLElement => {
     const a = this.a
     param = extendParameterDefaults<tLink>(param, {})
 
     return a.div()
   }
 }
 
 interface iLink {
   [key: string]: tLink
 }
 
 type tLink = undefined