/**
 * @module Element/Attribute/Function
 */
import { MatchAttributeValue } from '../../../types'
import { Attribute } from './Attribute'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _   _   _   _____                 _   _
//     / \ | |_| |_|  ___|   _ _ __   ___| |_(_) ___  _ __
//    / _ \| __| __| |_ | | | | '_ \ / __| __| |/ _ \| '_ \
//   / ___ \ |_| |_|  _|| |_| | | | | (__| |_| | (_) | | | |
//  /_/   \_\__|\__|_|   \__,_|_| |_|\___|\__|_|\___/|_| |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * A Function Attribute works for event listeners that receive functions as values.
 */
export class AttFunction extends Attribute {
  constructor(name: string) {
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      let value = attributeValues.value
      if (typeof value !== 'function') {
        // Error: the attribute ${this.name} must receive a function value, instead found: ${value} with type of ${typeof value}.
        return false
      }
      return true
    })
  }
}
