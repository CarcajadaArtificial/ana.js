/**
 * @module Element/Attribute/Boolean
 */
import { MatchAttributeValue } from '../../../types'
import { Attribute } from './Attribute'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _   _   _   ____              _
//     / \ | |_| |_| __ )  ___   ___ | | ___  __ _ _ __
//    / _ \| __| __|  _ \ / _ \ / _ \| |/ _ \/ _` | '_ \
//   / ___ \ |_| |_| |_) | (_) | (_) | |  __/ (_| | | | |
//  /_/   \_\__|\__|____/ \___/ \___/|_|\___|\__,_|_| |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * A Boolean Attribute works for "hard boolean" attributes that either are or ot declared in the element.
 */
export class AttBoolean extends Attribute {
  constructor(name: string) {
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      let value = attributeValues.value
      if (value === true || value === false) {
        return true
      } else {
        // Error: the attribute ${this.name} must receive the exact string value (case-sensitive) of 'true' or 'false', instead found: ${value}.
        return false
      }
    })
  }
}
