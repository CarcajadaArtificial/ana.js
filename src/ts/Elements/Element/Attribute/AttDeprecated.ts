import { MatchAttributeValue } from "../../../types"
import { Attribute } from "./Attribute"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). A Deprecated Attribute is one that is old and proven no to work anymore. It might be because it was replaced by a newer technology or because modern web browsing weeded it out eventually.
 * @module Ana/Render
 */
 export class AttDeprecated extends Attribute {
  constructor(name: string) {
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      return false
    })
  }
}