import { describe, expect, test } from 'vitest'
import { State } from '../types'
import { Observable } from './Observable'

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
      obs.subscribe((state: State) => state)
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
