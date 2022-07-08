import { GenericData } from '../types'
import { thrush } from '../Utils/Utils'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//    ___  _                              _     _
//   / _ \| |__  ___  ___ _ ____   ____ _| |__ | | ___
//  | | | | '_ \/ __|/ _ \ '__\ \ / / _` | '_ \| |/ _ \
//  | |_| | |_) \__ \  __/ |   \ V / (_| | |_) | |  __/
//   \___/|_.__/|___/\___|_|    \_/ \__,_|_.__/|_|\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This class is the engine that gives reactiveness to the app.
 */
export class Observable {
  callbacks: Function[] = []

  /**
   * This function pushes functions to a list. When `this.emit` is executed, all of the functions in the list will be called sequencially.
   * @param callback The render function that will be executed when the state changes.
   */
  subscribe(callback: Function): void {
    this.callbacks.push(callback)
  }

  /**
   * This function receives an update in the app's state and executes all functions inside `this.callbascks`.
   * @param state The new state of the app
   */
  emit(state?: GenericData): GenericData | undefined {
    if (this.callbacks.length === 0) {
      throw new Error()
    } else {
      this.callbacks.map(thrush<GenericData>(state))
      return state
    }
  }
}
