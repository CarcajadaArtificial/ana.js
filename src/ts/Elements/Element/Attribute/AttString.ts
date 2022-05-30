import { MatchAttributeValue } from "../../../types"
import { Attribute } from "./Attribute"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A String Attribute can get any string as it's value.
 * @todo Check for a string length limit.
 * @module Ana/Render
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