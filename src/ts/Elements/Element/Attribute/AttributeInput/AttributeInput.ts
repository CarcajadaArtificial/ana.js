import { Attribute } from "../Attribute"
import { iAttributeInput } from "./AttributeInput.interface"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * An Input Attribute is a type exclusive to the `<input/>` element. Some attributes of this element depend on the `type` attribute's value. This attribute is the only one that requires a `typeValue` for the `match()` function.
 */
 export class AttributeInput extends Attribute implements iAttributeInput {
  /**
   * The list of acceptable values for the type attribute in this `<input/>` element given this attribute.
   */
  dependantValue: string[]

  /**
   * This value determines if the matching value should be a string or a boolean.
   */
  matchingType: 'string' | 'boolean'

  /**
   * ```Typescript
   * new AttributeInput('example', ['inputType'], 'string')
   * ```
   * @param name {@link Attribute.name | Read more}
   */
  constructor(
    name: string,
    dependantValue: string[],
    matchingType: 'string' | 'boolean'
  ) {
    super(name, 'input')
    this.matchingType = matchingType
    this.dependantValue = dependantValue
  }

  /**
   * This function checks if `value` and `typeValue` match the attribute's property settings.
   * @returns True if `value` matches `this.matchingType` and `typeValue` is included in `this.dependantValue`.
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    if (typeof value !== 'string') {
      // Error: the attribute ${this.name} must receive a string value, instead found: ${value} with type of ${typeof value}.
      return false
    } else if (this.matchingType === 'boolean') {
      if (value === 'true' || value === 'false') {
        return true
      } else {
        // Error: the attribute ${this.name} must receive the exact string value (case-sensitive) of 'true' or 'false', instead found: ${value}.
        return false
      }
    } else if (
      typeValue === 'string' &&
      this.dependantValue.includes(typeValue)
    ) {
      return true
    } else {
      // Error: the attribute ${this.name} received the value ${value} when the type had the invalid value of ${typeValue}, it must be included in the following: ${this.dependantValue}
      return false
    }
  }
}