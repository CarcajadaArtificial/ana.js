/**
 * @module Element/Attribute/Input
 */
import { MatchAttributeValue } from '../../../types'
import { Attribute } from './Attribute'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _   _   _   ___                   _
//     / \ | |_| |_|_ _|_ __  _ __  _   _| |_
//    / _ \| __| __|| || '_ \| '_ \| | | | __|
//   / ___ \ |_| |_ | || | | | |_) | |_| | |_
//  /_/   \_\__|\__|___|_| |_| .__/ \__,_|\__|
//                           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * An Input Attribute is a type exclusive to the `<input/>` element. Some attributes of this element depend on the `type` attribute's value. This attribute is the only one that requires a `typeValue` for the `match()` function.
 */
export class AttInput extends Attribute {
  constructor(
    name: string,
    public dependantValue: string[],
    public matchingType: 'string' | 'boolean'
  ) {
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      let value = attributeValues.value
      let typeValue = attributeValues.typeValue ? attributeValues.typeValue : ''

      if (
        typeof value === this.matchingType &&
        this.dependantValue.includes(typeValue)
      ) {
        return true
      } else if (
        typeof value === this.matchingType &&
        (value === true || value === false)
      ) {
        return true
      } else {
        return false
      }
    })
  }
  /**
   * This function checks if `value` and `typeValue` match the attribute's property settings.
   * @returns True if `value` matches `this.matchingType` and `typeValue` is included in `this.dependantValue`.
   */
}
