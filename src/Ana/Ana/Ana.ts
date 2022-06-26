/**
 * @module Ana
 */
import {
  AnaConfiguration,
  dAnaConfiguration,
  iAnaConfiguration,
} from './Ana.interface'
import { applyDefaultParameters } from '../Utils/Utils'
import { ReactiveRenderer } from '../Render/Render'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//       _
//      / \   _ __   __ _
//     / _ \ | '_ \ / _` |
//    / ___ \| | | | (_| |
//   /_/   \_\_| |_|\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Home of the Ana framework.
 */
export class Ana {
  /**
   *
   */
  createApp: ReactiveRenderer

  /**
   * This function instantiates the framework.
   */
  constructor(configuration: iAnaConfiguration = {}) {
    let config = applyDefaultParameters<AnaConfiguration, iAnaConfiguration>(
      dAnaConfiguration,
      configuration
    )

    this.createApp = new ReactiveRenderer(config)

    // Adds ana.js-check
    if (config.extensions.check) {
      config.extensions.check()
    }
  }
}
