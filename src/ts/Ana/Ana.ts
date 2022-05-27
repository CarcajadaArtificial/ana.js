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

import { iAna, iAnaConfiguration } from './Ana.interface'
import { getElements } from '../Elements/Elements'
import { RenderDictionary } from '../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * The main class of the framework.
 */
export class Ana implements iAna {
  /**
   * This property is used to manage the developing mode that enables or disables the standard checking in HTMLElements and all of their attributes.
   */
  configuration: iAnaConfiguration = {
    standardVerificationMode: true
  }

  /**
   *
   */
  render: Function = ():RenderDictionary => {
    let elements = getElements(this.configuration);
    return elements
  }

  /**
   * ```Typescript
   * const a = new Ana({
   *  // Options
   * })
   * ```
   */
  constructor(configuration: iAnaConfiguration = {}) {
    this.configuration = {...this.configuration, ...configuration}
  }
}
