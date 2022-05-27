import { iAttributeBoolean } from './Elements/Element/Attribute/AttributeBoolean/AttributeBoolean.interface'
import { iAttributeDeprecated } from './Elements/Element/Attribute/AttributeDeprecated/AttributeDeprecated.interface'
import { iAttributeExperimental } from './Elements/Element/Attribute/AttributeExperimental/AttributeExperimental.interface'
import { iAttributeFunction } from './Elements/Element/Attribute/AttributeFunction/AttributeFunction.interface'
import { iAttributeInput } from './Elements/Element/Attribute/AttributeInput/AttributeInput.interface'
import { iAttributeList } from './Elements/Element/Attribute/AttributeList/AttributeList.interface'
import { iAttributeNonstandard } from './Elements/Element/Attribute/AttributeNonstandard/AttributeNonstandard.interface'
import { iAttributeString } from './Elements/Element/Attribute/AttributeString/AttributeString.interface'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * The HTMLElement prototype is extended to support `.match` functions that check an element for standard rendering. These functions are indexed using `HTMLElement.tagName.toLowerCase()`.
 */
export type MatchFunctionsDictionary = { [key: string]: Function }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type represents the dictionary of attribte values inputed by the user.
 */
export type AttributeValuesDictionary = { [key: string]: string | Function }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type is for a dictionary that contains the render methods of all individual HTML elements.
 */
export type RenderDictionary = { [key: string]: Function }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Attributes are systematically categorized according to their value. Must be part of the following list:
 * - '_empty': Placeholder text
 * - {@link AttributeNonstandard | 'nonstandard'}
 * - {@link AttributeDeprecated | 'deprecated'}
 * - {@link AttributeExperimental | 'experimental'}
 * - {@link AttributeString | 'string'}
 * - {@link AttributeBoolean | 'boolean'}
 * - {@link AttributeFunction | 'function'}
 * - {@link AttributeList | 'list'}
 * - {@link AttributeInput | 'input'}
 */
export type AttributeType =
  | '_empty'
  | 'nonstandard'
  | 'deprecated'
  | 'experimental'
  | 'string'
  | 'boolean'
  | 'function'
  | 'list'
  | 'input'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type generalizes the parameters of `Attribute.match()` functions.
 */
export type AttributeValue = {
  /**
   * The attribute values are generally strings, and in case of event listeners are functions.
   */
  value: string | Function
  /**
   * In the cases of attributes in the `<input/>` element that depend on the value of the type attribute, must also receive said value to compare.
   */
  typeValue: string | Function
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Attributes are mostly organized in dictionary with the attribute's name used as index. The value can be any of the classes extended by the `AttributeBase` class. This is the case for attributes inside the `Element` class or in the `GLOBAL_ATTRIBUTES` variable.
 */
export type AttributesDictionary = {
  [key: string]:
    | iAttributeBoolean
    | iAttributeDeprecated
    | iAttributeExperimental
    | iAttributeFunction
    | iAttributeInput
    | iAttributeList
    | iAttributeNonstandard
    | iAttributeString
}

export type PartTree = { [key: string]: HTMLElement }
