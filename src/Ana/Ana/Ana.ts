import {
  AnaConfiguration,
  dAnaConfiguration,
  iAnaConfiguration,
} from './Ana.interface'
import { applyDefaults } from '../Utils/Utils'
import { ReactiveRenderer } from '../Render/Render'
import { globalOverrides } from '../global'

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
  constructor(config: iAnaConfiguration = {}) {
    globalOverrides(
      applyDefaults<AnaConfiguration, iAnaConfiguration>(
        dAnaConfiguration,
        config
      )
    )

    this.createApp = new ReactiveRenderer()
  }
}
