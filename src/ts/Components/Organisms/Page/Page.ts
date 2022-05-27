//   ___               
//  | _ \__ _ __ _ ___ 
//  |  _/ _` / _` / -_)
//  |_| \__,_\__, \___|
//           |___/     
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Organism/Page
 * Description
 */
 //import { AnaComponent, extendParameterDefaults } from '../../elements'
 // import { Component } from '../ComponentType/component'
 
 /**
  * Usage
  */
 export class Page {
   render: Function = (param: iPage = {}): void => {
     //const a = this.a
 
     //return a.div(a.span('Page'))
   }
 }
 
 /**
  * Properties
  */
 interface iPage {
   // Properties of Page
   [key: string]: tPage
 }
 
 type tPage = undefined // | Property types of Page