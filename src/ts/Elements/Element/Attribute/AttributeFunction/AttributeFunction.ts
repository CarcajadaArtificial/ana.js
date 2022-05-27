import { Attribute } from "../Attribute"
import { iAttributeFunction } from "./AttributeFunction.interface"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Function Attribute works for event listeners that receive functions as values.
 */
 export class AttributeFunction extends Attribute implements iAttributeFunction {
  /**
   * ```Typescript
   * new AttributeFunction('example')
   * ```
   * @param name {@link Attribute.name | Read more}
   */
  constructor(name: string) {
    super(name, 'function')
  }

  /**
   * This function checks if the attribute value matches a Function type.
   * @returns True if value is a Function.
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    if (typeof value !== 'function') {
      // Error: the attribute ${this.name} must receive a function value, instead found: ${value} with type of ${typeof value}.
      return false
    }
    return true
  }
}