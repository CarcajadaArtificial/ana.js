import { MatchAttributeValue } from "../../../types"
import { Attribute } from "./Attribute"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). A Nonstandard Attribute is one that is compatible with HTML and isn't deprecated nor experimental, nevertheless it was opted out for the Ana standard.
 * @module Ana/Render
 */
 export class AttNonstandard extends Attribute {
  /**
   * ```Typescript
   * new AttributeNonstandard('example')
   * ```
   * @param name {@link Attribute.name | Read more}
   */
  constructor(name: string) {
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      return false
    })
  }
}