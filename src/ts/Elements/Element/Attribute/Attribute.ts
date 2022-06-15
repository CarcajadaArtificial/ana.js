/**
 * @module Element/Attribute
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _   _   _        _ _           _
//     / \ | |_| |_ _ __(_) |__  _   _| |_ ___
//    / _ \| __| __| '__| | '_ \| | | | __/ _ \
//   / ___ \ |_| |_| |  | | |_) | |_| | ||  __/
//  /_/   \_\__|\__|_|  |_|_.__/ \__,_|\__\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This class is an abstraction that all attribute classes have in common.
 */
export class Attribute {
  constructor(public name: string, public match: Function) {}
}
