/**
 * @module App
 */
import { Observable } from '../Observable/Observable'
import { GenericData } from '../types'
import { byId } from '../Utils/Utils'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _
//     / \   _ __  _ __
//    / _ \ | '_ \| '_ \
//   / ___ \| |_) | |_) |
//  /_/   \_\ .__/| .__/
//          |_|   |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export class App {
  /**
   *
   */
  private d: GenericData = {}

  /**
   *
   */
  private obs: Observable = new Observable()

  /**
   *
   * @param initialRender
   */
  init: Function = (data: GenericData, appRenderFunction: Function): void => {
    this.d = data
    const rerender = (d: GenericData) => (byId('app').innerHTML = appRenderFunction(d).outerHTML)
    rerender(this.d)
    this.obs.subscribe(rerender)
  }

  /**
   *
   * @param data
   */
  up: Function = (data: GenericData): void => {
    this.d = { ...this.d, ...data }
    this.obs.emit(this.d)
  }
}
