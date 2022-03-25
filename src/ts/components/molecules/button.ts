//    ___      _   _            
//   | _ )_  _| |_| |_ ___ _ _  
//   | _ \ || |  _|  _/ _ \ ' \ 
//   |___/\_,_|\__|\__\___/_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The `Ana` class is the first thing that has contact with developers using this framework. It's main job is to give access to everything they
 * @module Molecules
 */
 import { AnaComponent, extendParameterDefaults } from '../../elements'
 import { Small } from '../atoms/small'

 /**
  * Button Class
  */
  export class Button extends AnaComponent {
   /**
    * @param param Properties of type {@link iButton} that customize the component's rendering.
    * @returns The {@link Subheading} component as a stand-alone, customized and stylized element.
    */
   render: Function = (param: iButton = {}): HTMLElement => {
     const a = this.a
     param = extendParameterDefaults<tButton>(param, {})
 
     return a.div()
   }
 }
 /**
  * Interface for the properties of the {@link Button} constructor.
  */
  export interface iButton {
   /**
    * 
    */
 
   [key: string]: tButton
 }
 /**
  * Possible types for the properties of the {@link Button} constructor.
  */
 export type tButton = undefined