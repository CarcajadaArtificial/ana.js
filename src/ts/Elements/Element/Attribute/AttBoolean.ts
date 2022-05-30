import { MatchAttributeValue } from "../../../types"
import { Attribute } from "./Attribute"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Boolean Attribute works for "hard boolean" attributes that either are or ot declared in the element.
 * @module Ana/Render
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