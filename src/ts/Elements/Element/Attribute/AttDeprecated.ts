/**
 * @module Element/Attribute/Deprecated
 */
import { MatchAttributeValue } from '../../../types'
import { Attribute } from './Attribute'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _   _   _   ____                                _           _
//     / \ | |_| |_|  _ \  ___ _ __  _ __ ___  ___ __ _| |_ ___  __| |
//    / _ \| __| __| | | |/ _ \ '_ \| '__/ _ \/ __/ _` | __/ _ \/ _` |
//   / ___ \ |_| |_| |_| |  __/ |_) | | |  __/ (_| (_| | ||  __/ (_| |
//  /_/   \_\__|\__|____/ \___| .__/|_|  \___|\___\__,_|\__\___|\__,_|
//                            |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). A Deprecated Attribute is one that is old and proven no to work anymore. It might be because it was replaced by a newer technology or because modern web browsing weeded it out eventually.
 */
export class AttDeprecated extends Attribute {
  constructor(name: string) {
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      attributeValues
      return false
    })
  }
}
