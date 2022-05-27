import { Attribute } from "../Attribute"
import { iAttributeNonstandard } from "./AttributeNonstandard.interface"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). A Nonstandard Attribute is one that is compatible with HTML and isn't deprecated nor experimental, nevertheless it was opted out for the Ana standard.
 */
 export class AttributeNonstandard extends Attribute implements iAttributeNonstandard {
  /**
   * ```Typescript
   * new AttributeNonstandard('example')
   * ```
   * @param name {@link Attribute.name | Read more}
   */
  constructor(name: string) {
    super(name, 'nonstandard')
  }

  /**
   * As this is a forbidden attribute type, it will always return false.
   * @returns False
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    return false
  }
}