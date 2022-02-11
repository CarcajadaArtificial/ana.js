//       _                
//      / \   _ __   __ _ 
//     / _ \ | '_ \ / _` |
//    / ___ \| | | | (_| |
//   /_/   \_\_| |_|\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The `Ana` class is the first thing that has contact with developers using this framework. It's main job is to give access to everything they 
 * @module Ana
 */
import { AnaElements } from './elements'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type aids in the configuration object used during the class instance construction.
 * ```Typescript
 * const a = new Ana(AnaConfiguration)
 * ```
 */
export interface AnaConfiguration {
  /**
   * {@link Ana.standardVerificationMode | Read more}
   */
    standardVerificationMode?: boolean
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * The main interface of the framework
 */
export interface Ana {
  Label: Function
}


// Test Component
function aLabel(a: AnaElements, param: AnaConfiguration):Function {
  return (options: any):HTMLElement => a.div().has({class: 'label'})
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * The main class of the framework.
 */
export class Ana extends AnaElements {
  /**
   * This property is used to manage the developing mode that enables or disables the standard checking in HTMLElements and all of their attributes.
   */
  standardVerificationMode: boolean = true

  /**
   * 
   */
  addComponents: Function = (param: AnaConfiguration = {}) => {
    let a = new AnaElements(param)
    this.Label = aLabel(a, param)
  }

  /**
   * ```Typescript
   * const a = new Ana({
   *  // Options
   * })
   * ```
   */
  constructor(param: AnaConfiguration = {}) {
    super(param)
    this.standardVerificationMode = param.standardVerificationMode === true
    this.addComponents(param)
  }
}