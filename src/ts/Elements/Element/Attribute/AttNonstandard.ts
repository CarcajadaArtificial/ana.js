/**
 * @module Element/Attribute/Nonstandard
 */
import { MatchAttributeValue } from "../../../types"
import { Attribute } from "./Attribute"

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _   _   _   _   _                 _                  _               _ 
//     / \ | |_| |_| \ | | ___  _ __  ___| |_ __ _ _ __   __| | __ _ _ __ __| |
//    / _ \| __| __|  \| |/ _ \| '_ \/ __| __/ _` | '_ \ / _` |/ _` | '__/ _` |
//   / ___ \ |_| |_| |\  | (_) | | | \__ \ || (_| | | | | (_| | (_| | | | (_| |
//  /_/   \_\__|\__|_| \_|\___/|_| |_|___/\__\__,_|_| |_|\__,_|\__,_|_|  \__,_|
//                                                                             
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). A Nonstandard Attribute is one that is compatible with HTML and isn't deprecated nor experimental, nevertheless it was opted out for the Ana standard.
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