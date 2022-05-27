import { iAttribute } from "./Attribute.interface"
import { AttributeType } from "../../../types"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class groups all Attribute classes with their common properties. All of these classes manage different types of HTMLElement Attributes and their standard values.
 */
 export class Attribute implements iAttribute {
  /**
   * Every attribute needs a string name for it to be indexed in a `AttributeDictionary`. These names must remain unchanged from their original HTMLElement Attribute name.
   */
  name: string = ''

  /**
   * This property is set according to the expected correct value for the attribute. If unsure of which to choose look into the classes that inherit `AttributeBase`.
   */
  type: AttributeType = '_empty'

  /**
   * This constructor should not be used except for the `super()` call.
   * ```typescript
   * export class AttributeExample extends AttributeBase {
   *  constructor(name: string, type: AttributeType) {
   *    super(name, type)
   *  }
   * }
   * ```
   * @param name {@link AttributeBase.name | Read more}
   * @param type {@link AttributeBase.type | Read more}
   */
  constructor(name: string, type: AttributeType) {
    this.name = name
    this.type = type
  }
}