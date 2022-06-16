/**
 * @module Element/Attribute/Experimental
 */
import { MatchAttributeValue } from '../../../types'
import { Attribute } from './Attribute'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _   _   _   _____                      _                      _        _
//     / \ | |_| |_| ____|_  ___ __   ___ _ __(_)_ __ ___   ___ _ __ | |_ __ _| |
//    / _ \| __| __|  _| \ \/ / '_ \ / _ \ '__| | '_ ` _ \ / _ \ '_ \| __/ _` | |
//   / ___ \ |_| |_| |___ >  <| |_) |  __/ |  | | | | | | |  __/ | | | || (_| | |
//  /_/   \_\__|\__|_____/_/\_\ .__/ \___|_|  |_|_| |_| |_|\___|_| |_|\__\__,_|_|
//                            |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This class is one of the three forbidden attributes ({@link AttributeNonstandard}, {@link AttributeDeprecated}, and {@link AttributeExperimental}). An Experimental Attribute is one that isn't fully compatible with modern browsers yet, it has new functionalities that may or may not become standard practice in the future.
 */
export class AttExperimental extends Attribute {
  constructor(name: string) {
    super(name, (attributeValues: MatchAttributeValue): boolean => {
      attributeValues
      return false
    })
  }
}
