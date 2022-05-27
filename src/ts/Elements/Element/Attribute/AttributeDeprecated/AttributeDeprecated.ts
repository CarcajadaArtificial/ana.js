import { Attribute } from "../Attribute"
import { iAttributeDeprecated } from "./AttributeDeprecated.interface"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). A Deprecated Attribute is one that is old and proven no to work anymore. It might be because it was replaced by a newer technology or because modern web browsing weeded it out eventually.
 */
 export class AttributeDeprecated extends Attribute implements iAttributeDeprecated {
  /**
   * ```Typescript
   * new AttributeDeprecated('example')
   * ```
   * @param name {@link Attribute.name | Read more}
   */
  constructor(name: string) {
    super(name, 'deprecated')
  }

  /**
   * As this is a forbidden attribute type, it will always return false.
   * @returns False
   */
  match = (value: string | Function, typeValue: string | Function): boolean => {
    return false
  }
}