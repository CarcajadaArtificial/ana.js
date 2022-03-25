//    __  __       _                 _           
//   |  \/  | ___ | | ___  ___ _   _| | ___  ___ 
//   | |\/| |/ _ \| |/ _ \/ __| | | | |/ _ \/ __|
//   | |  | | (_) | |  __/ (__| |_| | |  __/\__ \
//   |_|  |_|\___/|_|\___|\___|\__,_|_|\___||___/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The `Ana` class is the first thing that has contact with developers using this framework. It's main job is to give access to everything they
 * @module Molecules
 */
import { AnaComponent, extendParameterDefaults } from './elements'
import { Small } from './components/atoms/small'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//    ___      _   _            
//   | _ )_  _| |_| |_ ___ _ _  
//   | _ \ || |  _|  _/ _ \ ' \ 
//   |___/\_,_|\__|\__\___/_||_|
//
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
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

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//    ___                _   
//   |_ _|_ _  _ __ _  _| |_ 
//    | || ' \| '_ \ || |  _|
//   |___|_||_| .__/\_,_|\__|
//            |_|            
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Input Class
 */
 export class Input extends AnaComponent {
  /**
   * @param param Properties of type {@link iInput} that customize the component's rendering.
   * @returns The {@link Subheading} component as a stand-alone, customized and stylized element.
   */
  render: Function = (param: iInput = {}): HTMLElement => {
    const a = this.a
    param = extendParameterDefaults<tInput>(param, {})

    return a.div()
  }
}
/**
 * Interface for the properties of the {@link Input} constructor.
 */
 export interface iInput {
  /**
   * 
   */

  [key: string]: tInput
}
/**
 * Possible types for the properties of the {@link Input} constructor.
 */
export type tInput = undefined

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//     ___ _    _      
//    / __| |_ (_)_ __ 
//   | (__| ' \| | '_ \
//    \___|_||_|_| .__/
//               |_|   
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Chip Class
 */
 export class Chip extends AnaComponent {
  /**
   * @param param Properties of type {@link iChip} that customize the component's rendering.
   * @returns The {@link Subheading} component as a stand-alone, customized and stylized element.
   */
  render: Function = (param: iChip = {}): HTMLElement => {
    const a = this.a
    param = extendParameterDefaults<tChip>(param, {})

    return a.div()
  }
}
/**
 * Interface for the properties of the {@link Chip} constructor.
 */
 export interface iChip {
  /**
   * 
   */

  [key: string]: tChip
}
/**
 * Possible types for the properties of the {@link Chip} constructor.
 */
export type tChip = undefined

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//     ___             _ 
//    / __|__ _ _ _ __| |
//   | (__/ _` | '_/ _` |
//    \___\__,_|_| \__,_|
//
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Card Class
 */
 export class Card extends AnaComponent {
  /**
   * @param param Properties of type {@link iCard} that customize the component's rendering.
   * @returns The {@link Subheading} component as a stand-alone, customized and stylized element.
   */
  render: Function = (param: iCard = {}): HTMLElement => {
    const a = this.a
    param = extendParameterDefaults<tCard>(param, {})

    return a.div()
  }
}
/**
 * Interface for the properties of the {@link Card} constructor.
 */
 export interface iCard {
  /**
   * 
   */

  [key: string]: tCard
}
/**
 * Possible types for the properties of the {@link Card} constructor.
 */
export type tCard = undefined