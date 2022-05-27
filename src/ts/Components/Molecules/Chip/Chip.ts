//    ___ _    _      
//   / __| |_ (_)_ __ 
//  | (__| ' \| | '_ \
//   \___|_||_|_| .__/
//              |_|   
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/molecule/Chip
 * Description
 */
 import { AnaComponent } from '../../Components'
 
 /**
  * Usage
  */
 export class Chip extends AnaComponent {
   render: Function = (param: iChip = {}): HTMLElement => {
     const a = this.a
 
     return a.div(a.span('Chip'))
   }
 }
 
 /**
  * Properties
  */
 interface iChip {
   // Properties of Chip
   [key: string]: tChip
 }
 
 type tChip = undefined // | Property types of Chip