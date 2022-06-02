//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * The HTMLElement prototype is extended to support `.match` functions that check an element for standard rendering. These functions are indexed using `HTMLElement.tagName.toLowerCase()`.
 */
export type MatchFunctionsDictionary = { [key: string]: Function }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type represents the dictionary of attribte values inputed by the user.
 */
export type AttributeValuesDictionary = {
  [key: string]: boolean | string | Function
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type is for a dictionary that contains the render methods of all individual HTML elements.
 */
export type RenderDictionary = { [key: string]: Function }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Attributes are systematically categorized according to their value. Must be part of the following list:
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
export type MatchAttributeValue = {
  /**
   * The attribute values are generally strings, and in case of event listeners are functions.
   */
  value: string | boolean | Function
  /**
   * In the cases of attributes in the `<input/>` element that depend on the value of the type attribute, must also receive said value to compare.
   */
  typeValue?: string
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type PartTree = { [key: string]: HTMLElement }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type ContrastValues = 'lowest' | 'low' | 'mid' | 'high' | 'highest'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type ColorValues =
  | 'red'
  | 'violet'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'grey'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type LayoutType =
  | 'full'
  | 'center'
  | 'focus'
  | 'halves'
  | 'thirds'
  | 'quarters'
  | 'right'
  | 'left'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type LayoutMargin = 'full' | 'single' | 'none'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type Spacing = 'triple' | 'double' | 'single' | 'none'