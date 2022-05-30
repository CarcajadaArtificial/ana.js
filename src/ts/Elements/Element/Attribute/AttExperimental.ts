import { MatchAttributeValue } from "../../../types"
import { Attribute } from "./Attribute"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). An Experimental Attribute is one that isn't fully compatible with modern browsers yet, it has new functionalities that may or may not become standard practice in the future.
 * @module Ana/Render
 */
 export class AttExperimental extends Attribute {
  constructor(name: string) {
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      return false
    })
  }
}