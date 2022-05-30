import { MatchAttributeValue } from '../../../types'
import { Attribute } from './Attribute'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * An Input Attribute is a type exclusive to the `<input/>` element. Some attributes of this element depend on the `type` attribute's value. This attribute is the only one that requires a `typeValue` for the `match()` function.
 * @module Ana/Render
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
