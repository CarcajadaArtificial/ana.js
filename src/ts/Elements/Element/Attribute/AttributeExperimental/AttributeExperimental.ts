import { Attribute } from "../Attribute"
import { iAttributeExperimental } from "./AttributeExperimental.interface"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). An Experimental Attribute is one that isn't fully compatible with modern browsers yet, it has new functionalities that may or may not become standard practice in the future.
 */
 export class AttributeExperimental extends Attribute implements iAttributeExperimental {
  /**
   * ```Typescript
   * new AttributeExperimental('example')
   * ```
   * @param name {@link Attribute.name | Read more}
   */
  constructor(name: string) {
    super(name, 'experimental')
  }

  /**
   * As this is a forbidden attribute type, it will always return false.
   * @returns False
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    return false
  }
}