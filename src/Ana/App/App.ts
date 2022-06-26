/**
 * @module App
 */
import { AnaConfiguration } from '../Ana/Ana.interface'
import { Observable } from '../Observable/Observable'
import { createRenderer } from '../Render/Render'
import { Render } from '../Render/Render.interface'
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
  constructor(config: AnaConfiguration) {
    this.render = createRenderer(config)
  }

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
   */
  render: Render

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
