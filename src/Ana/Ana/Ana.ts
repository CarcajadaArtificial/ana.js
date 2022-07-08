import {
  AnaConfiguration,
  dAnaConfiguration,
  iAnaConfiguration,
} from './Ana.interface'
import { applyDefaults, byId } from '../Utils/Utils'
import { globalOverrides } from '../global'
import { GenericData, StateReference } from '../types'
import { render } from '../Render/Render'

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
   * This function instantiates the framework.
   */
  constructor(config: iAnaConfiguration = {}) {
    globalOverrides(
      applyDefaults<AnaConfiguration, iAnaConfiguration>(
        dAnaConfiguration,
        config
      )
    )
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * Used to mount the application and start the rendering process. By default, it adds the rendered
   * elements inside an element with a predefined id. This can be configured using the attribute
   * `appContainerId` in the global configuration object.
   *
   * @param data This is the initial state of the app's data. Contains all of the values that can be
   * changed after the rendering has finished. Also, the application will rerender when any of these
   * change.
   *
   * @param appRenderFunction This function should receive the app's data state as argument and return
   * an the HTMLElement containing the app. For example: `(d: GenericData) => a.div()()`
   */
  init: Function = (data: GenericData, appRenderFunction: Function): void => {
    for (const key in data) {
      window.ana.state[key] = new StateReference(data[key], key)
      window.ana.relations[key] = []
      // Iterate over relations
      this.up[key] = (value: any) => {
        window.ana.state[key].value = value
        window.ana.relations[key].forEach((relation: string) => {
          window.ana.reactives[relation].observable.emit()
        })
      }
    }
    byId(window.ana.config.appContainerId).append(
      appRenderFunction(window.ana.state)
    )
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   *
   */
  render = render

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This funciton is used to update the state and rerender the app's view.
   *
   * @param data The new values that will update the current app's data state.
   */
  up: { [key: string]: Function } = {}
}
