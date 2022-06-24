import { GenericData } from '../types'
import { Observable } from './Observable'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//    ___  _                              _     _        _____         _   
//   / _ \| |__  ___  ___ _ ____   ____ _| |__ | | ___  |_   _|__  ___| |_ 
//  | | | | '_ \/ __|/ _ \ '__\ \ / / _` | '_ \| |/ _ \   | |/ _ \/ __| __|
//  | |_| | |_) \__ \  __/ |   \ V / (_| | |_) | |  __/   | |  __/\__ \ |_ 
//   \___/|_.__/|___/\___|_|    \_/ \__,_|_.__/|_|\___|   |_|\___||___/\__|
//                                                                         
////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('Observable', () => {
  let obs = new Observable()

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  describe('constructor()', () => {
    test('Creates a defined instance.', () => {
      expect(obs).toBeTruthy()
    })
    test('An empty observable has no callbacks.', () => {
      expect(obs.callbacks.length).toBe(0)
    })
    test('[Throws] when emitting an empty observable.', () => {
      expect(() => obs.emit({})).toThrowError()
    })
  })

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  describe('subscribe()', () => {
    test('Subscribing one function, adds it to the callbacks.', () => {
      expect(obs.callbacks.length).toBe(0)
      obs.subscribe((state: GenericData) => state)
      expect(obs.callbacks.length).toBe(1)
    })
  })
  
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  describe('emit()', () => {
    test('Emitting a state, having one subscription.', () => {
      expect(obs.callbacks.length).toBe(1)
      expect(obs.emit({})).toStrictEqual({})
    })
  })
})
