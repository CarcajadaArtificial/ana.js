//  _____
// |_   _|  _ _ __  ___ ___
//   | || || | '_ \/ -_|_-<
//   |_| \_, | .__/\___/__/
//       |__/|_|
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Renderer } from './Renderer.ts';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type is a convention to avoid repetition of the code `{ [key: string]: EntryType }` used as a
 * type.
 */
export type Dictionary<EntryType> = { [key: string]: EntryType };

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This sets the possible types an HTMLElement's Attribute can have.
 * - string: attributes like `<input type="email" />`
 * - boolean: attributes like `<input required />`
 *
 * Note: Event listeners will not be viewed as attributes like previous Ana.js versions. Instead,
 * listeners will be added to their own method ".on()"
 */
export type Attribute = string | boolean;

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A `Dictionary` with entries of type `Attribute`.
 */
export type Attributes = Dictionary<Attribute>;

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This sets the possible types of children inside a Parent HTMLElement.
 * - string: a text node like `<span>Example</span>`
 * - Renderer: a Renderer instance for another element like `<div><input/></div>`
 */
export type Child = Renderer | string;

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * An array with values of type `Attribute`. It can be empty.
 */
export type Children = Child[] | [];
