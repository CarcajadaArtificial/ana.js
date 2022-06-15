/**
 * @module Element/Attribute/String
 */
import { MatchAttributeValue } from '../../../types'
import { Attribute } from './Attribute'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _   _   _   ____  _        _
//     / \ | |_| |_/ ___|| |_ _ __(_)_ __   __ _
//    / _ \| __| __\___ \| __| '__| | '_ \ / _` |
//   / ___ \ |_| |_ ___) | |_| |  | | | | | (_| |
//  /_/   \_\__|\__|____/ \__|_|  |_|_| |_|\__, |
//                                         |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * A String Attribute can get any string as it's value.
 * @todo Check for a string length limit.
 */
export class AttString extends Attribute {
  constructor(name: string) {
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      let value = attributeValues.value
      if (typeof value !== 'string') {
        // Error: the attribute ${this.name} must receive a string value, instead found: ${value} with type of ${typeof value}.
        return false
      }
      return true
    })
  }
}
