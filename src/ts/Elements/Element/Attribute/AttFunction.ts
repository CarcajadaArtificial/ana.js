import { MatchAttributeValue } from "../../../types"
import { Attribute } from "./Attribute"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Function Attribute works for event listeners that receive functions as values.
 * @module Ana/Render
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