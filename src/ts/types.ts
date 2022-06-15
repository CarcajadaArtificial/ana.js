/**
 * @module Ana/Types
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _____                      
//  |_   _|   _ _ __   ___  ___ 
//    | || | | | '_ \ / _ \/ __|
//    | || |_| | |_) |  __/\__ \
//    |_| \__, | .__/ \___||___/
//        |___/|_|              
////////////////////////////////////////////////////////////////////////////////////////////////////////

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
 * When styling anything with color, these are the options that reference that color's contrast.
 */
export type ContrastValues = 'lowest' | 'low' | 'mid' | 'high' | 'highest'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * When styling anything with color, these are the options that reference that color's name.
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
 * When styling a layout, these are the types of layouts possible.
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
 * When styling a layout, this are the options for the layout margin.
 */
export type LayoutMargin = 'full' | 'single' | 'none'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * - `non` None
 * - `sgl` Single
 * - `dbl` Double
 * - `tpl` Triple
 */
export type Spacing = 'tpl' | 'dbl' | 'sgl' | 'non'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This is the list of HTMLElements that can be used as text elements.
 */
// prettier-ignore
export type TextElements = | 'blockquote' | 'dd' | 'div' | 'dl' | 'dt' | 'figcaption' | 'figure' | 'hr' | 'li' | 'ol' | 'p' | 'pre' | 'ul' | 'a' | 'abbr' | 'b' | 'bdi' | 'cite' | 'code' | 'data' | 'dfn' | 'em' | 'i' | 'kbd' | 'mark' | 'q' | 'rp' | 'rt' | 'ruby' | 's' | 'samp' | 'small' | 'span' | 'strong' | 'sub' | 'sup' | 'time' | 'u' | 'var' | 'wbr'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type is used for dictionaries that override the css classes of any ui component. The key references the affected part of the component.
 */
export type AddClassDictionary = { [key: string]: string }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type is used for the dictionary that holds the mutable data in the app. This dictionary will be linked to an Observable that exectues callback functions when the state is modified.
 */
export type State = { [key: string]: any }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * - `p` Padding
 * - `m` Margin
 * - `g` Gap
 * - `l` Elevation
 * - `r` Roundness
 */
export type SpacingPrefix = 'p' | 'm' | 'g' | 'l' | 'r'
