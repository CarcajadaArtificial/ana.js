//   ___                _   
//  |_ _|_ _  _ __ _  _| |_ 
//   | || ' \| '_ \ || |  _|
//  |___|_||_| .__/\_,_|\__|
//           |_|            
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Molecule/Input
 * Description
 */
import { AnaComponent } from '../../Components'
 
 /**
  * Usage
  */
 export class Input extends AnaComponent {
   render: Function = (param: iInput = {}): HTMLElement => {
     const a = this.a
 
     return a.div(a.span('Input'))
   }
 }
 
 /**
  * Properties
  */
 interface iInput {
   // Properties of Input
   [key: string]: tInput
 }
 
 type tInput = undefined // | Property types of Input