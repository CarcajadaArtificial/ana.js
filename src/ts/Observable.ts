
import { State } from './types'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//    ___  _                              _     _      
//   / _ \| |__  ___  ___ _ ____   ____ _| |__ | | ___ 
//  | | | | '_ \/ __|/ _ \ '__\ \ / / _` | '_ \| |/ _ \
//  | |_| | |_) \__ \  __/ |   \ V / (_| | |_) | |  __/
//   \___/|_.__/|___/\___|_|    \_/ \__,_|_.__/|_|\___|
//                                                     
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 * @module Observable
 */
const thrush = (state: State) => (subscription: Function) => subscription(state)

export class Observable {
  callbacks: Function[] = []

  subscribe(callback: Function): void {
    this.callbacks.push(callback)
  }

  emit(state: State): void {
    this.callbacks.map(thrush(state))
  }
}