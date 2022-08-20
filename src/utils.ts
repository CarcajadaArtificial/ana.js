//   _   _ _   _ _
//  | | | | |_(_) |___
//  | |_| |  _| | (_-<
//   \___/ \__|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Dictionary } from './types.ts';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function emulates the behavior of `Array.prototype.map()` in Dictionaties. It calls a function
 * passing each entry of the dictionary as an argument.
 * @param dictionary The dictionary to be mapped.
 * @param callback The function that will map the entries of the dictionary.
 * @returns A new dictionary with each entry mapped to the function.
 */
export function dictionaryMap<EntryType>(
  dictionary: Dictionary<EntryType>,
  callback: (entry: EntryType, key?: string) => EntryType
): Dictionary<EntryType> {
  const newDictionary: Dictionary<EntryType> = {};
  Object.keys(dictionary).forEach((key: string) => {
    newDictionary[key] = callback(dictionary[key], key);
  });
  return newDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function emulates the behavior of `Array.prototype.reduce()` in Dictionaties. It runs a function that accumulates to a final single value returned.
 * @param dictionary The dictionary to be reduced.
 * @param callback The fucntion that will reduce the dictionary to a single value.
 * @param initialValue The initial value for the acummulator.
 * @returns A single value reduced from the dictionary.
 */
export function dictionaryReduce<EntryType, AcumType>(
  dictionary: Dictionary<EntryType>,
  callback: (entry: EntryType, key: string, acum: AcumType) => AcumType,
  initialValue: AcumType
): AcumType {
  let acum: AcumType = initialValue;
  Object.keys(dictionary).forEach((key: string) => {
    acum = callback(dictionary[key], key, acum);
  });
  return acum;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Inside Ana, there are interfaces that start with a lowercase `i`, e.g. `iAnaConfiguration`. These are input interfaces and have the same properties as their equivalent without the `i`. So then, what is the difference between each other? All of the properties of an input interface must be optional. Because we can't force the developer to input all properties of a interface every time. In other words, if a developer wants to configure Ana, it shouldn't be a requirement to add all AnaConfiguration properties only to change one of them.
 *
 * Then, the problem happens when trying to use the input interface. All values are optional, so it becomes verbose to validate each and everyone of them in a way simmilar to this: `interface.property ? interface.property : undefined`. That's why we need the second non-input interface, where no property is optional. This function transforms `iExample` into `Example` using the default values found in `dExample`.
 *
 * @param defaultParameters To transofrm an input interface into a non-input interface, one needs an Object with default values.
 *
 * @param inputParameters The set properties of the input interface.
 *
 * @returns An object of a non-input interface overwritten with input property values.
 */
export function applyDefaults<Type, iType>(
  defaultParameters: Type,
  inputParameters: iType
): Type {
  return { ...defaultParameters, ...inputParameters };
}
