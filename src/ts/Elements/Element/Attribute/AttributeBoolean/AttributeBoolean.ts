import { Attribute } from "../Attribute"
import { iAttributeBoolean } from "./AttributeBoolean.interface"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Boolean Attribute works for "hard boolean" attributes that either are or ot declared in the element.
 */
 export class AttributeBoolean extends Attribute implements iAttributeBoolean {
  /**
   * ```Typescript
   * new AttributeBoolean('example')
   * ```
   * @param name {@link Attribute.name | Read more}
   */
  constructor(name: string) {
    super(name, 'boolean')
  }

  /**
   * This function checks if the attribute value matches a 'true' or 'false' string.
   * @returns True if value is 'true' or 'false'.
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    if (value === 'true' || value === 'false') {
      return true
    } else {
      // Error: the attribute ${this.name} must receive the exact string value (case-sensitive) of 'true' or 'false', instead found: ${value}.
      return false
    }
  }
}