//   ___      _   _            
//  | _ )_  _| |_| |_ ___ _ _  
//  | _ \ || |  _|  _/ _ \ ' \ 
//  |___/\_,_|\__|\__\___/_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Molecule/Button
 * Description
 */
 import { AnaComponent } from '../../Components'
 
 /**
  * Usage
  */
 export class Button extends AnaComponent {
   render: Function = (param: iButton = {}): HTMLElement => {
     const a = this.a
 
     return a.div(a.span('Button'))
   }
 }
 
 /**
  * Properties
  */
 interface iButton {
   // Properties of Button
   [key: string]: tButton
 }
 
 type tButton = undefined // | Property types of Example