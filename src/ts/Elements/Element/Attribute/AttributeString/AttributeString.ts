import { Attribute } from "../Attribute"
import { iAttributeString } from "./AttributeString.interface"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A String Attribute can get any string as it's value.
 * @todo Check for a string length limit.
 */
 export class AttributeString extends Attribute implements iAttributeString {
  /**
   * ```Typescript
   * new AttributeString('example')
   * ```
   * @param name {@link Attribute.name | Read more}
   */
  constructor(name: string) {
    super(name, 'string')
  }

  /**
   * This function checks if the attribute value matches a string type.
   * @returns True if value is a string.
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    if (typeof value !== 'string') {
      // Error: the attribute ${this.name} must receive a string value, instead found: ${value} with type of ${typeof value}.
      return false
    }
    return true
  }
}