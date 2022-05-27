//    ___             _ 
//   / __|__ _ _ _ __| |
//  | (__/ _` | '_/ _` |
//   \___\__,_|_| \__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Molecule/Card
 * Description
 */
 import { AnaComponent } from '../../Components'
 
 /**
  * Usage
  */
 export class Card extends AnaComponent {
   render: Function = (param: iCard = {}): HTMLElement => {
     const a = this.a
 
     return a.div(a.span('Card'))
   }
 }
 
 /**
  * Properties
  */
 interface iCard {
   // Properties of Card
   [key: string]: tCard
 }
 
 type tCard = undefined // | Property types of Example