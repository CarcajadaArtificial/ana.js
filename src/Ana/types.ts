//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _____
//  |_   _|   _ _ __   ___  ___
//    | || | | | '_ \ / _ \/ __|
//    | || |_| | |_) |  __/\__ \
//    |_| \__, | .__/ \___||___/
//        |___/|_|
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { AnaConfiguration } from './Ana/Ana.interface'
import { Reactive } from './Reactive.ts/Reactive'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Why is there a need for a dictionary with 'any' value? Because that is what the state of the application is. When creating an app, one should be able to store any piece of data of any type in a dictionary for reference along with the app. Everything that depends on the application's reactive data dictionary, will also involve this type.
 */
export type GenericData = { [key: string]: any }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * There are three main types of HTMLElement Attributes, each with its data type. Attributes with string values look like this: `<element attribute="value" />`. While boolean attributes don't have any value to equal to. If the value is true, then the attribute is present like this:  `<element attribute />`. Finally, attributes with function values are event listeners.
 */
export type StaticAttribute = boolean | string | Function

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * HTMLElements can have numerous attributes set at the same time. This dictionary is a data structure specifically made for the cases where attributes need to be grouped.
 */
export type StaticAttributes = { [key: string]: StaticAttribute }

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * There are only two types of children of HTMLElements, strings and other elements. They can be in any number and order.
 */
export type StaticChild = Node | string

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export class StateReference {
  constructor(public value: any, public name: string) {}
  get: Function = (): any => this.value
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export interface ReactivityDictionary {}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type RenderClass<T> = (...classes: (StateReference | string)[]) => T

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type RenderChildren<T> = (
  ...children: (StateReference | StaticChild)[]
) => T

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type RenderAttributes<T> = (attributes: StaticAttributes) => T

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type EmptyElement = RenderClass<HTMLElement>

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export type ParentElement = RenderClass<RenderChildren<HTMLElement>>

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
// export type SVGElement = RenderChildren<RenderAttributes<SVGElement>>

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export interface WindowAna {
  config: AnaConfiguration
  state: { [key: string]: StateReference }
  reactives: { [key: string]: Reactive }
  relations: { [key: string]: string[] }
}
