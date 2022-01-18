//    _____                  __     __    _ _     _       _   _
//   |_   _|   _ _ __   ___  \ \   / /_ _| (_) __| | __ _| |_(_) ___  _ __
//     | || | | | '_ \ / _ \  \ \ / / _` | | |/ _` |/ _` | __| |/ _ \| '_ \
//     | || |_| | |_) |  __/   \ V / (_| | | | (_| | (_| | |_| | (_) | | | |
//     |_| \__, | .__/ \___|    \_/ \__,_|_|_|\__,_|\__,_|\__|_|\___/|_| |_|
//         |___/|_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Check
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This auxiliary function helps with the redundancy in single value data types inside the CHECK namespace. All of them have some way of checking if a single piece of a data is a particular type, so this function generalizes that work.
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {String} datatype The name of the single value data type to be checked.
 * @param {Boolean} silent True to prevent error messages.
 * @param {Boolean} verification When this function is called, this parameter contains the individual single value check for that particular data type. For example, for the CHECK.string function, the value (typeof value === TYPE.str || value instanceof String) is sent as the verification.
 * @returns {Boolean} True if the datatype and the value's type match, false if they dont.
 */
function _singleValue(value, datatype, silent = false, verification) {
  if (verification) {
    return true
  } else {
    if (!silent) {
      console.error(
        alarm('datatype', {
          expected: datatype,
          found: _writeDatatypeErrorMessage(value),
        })
      )
    }
    return false
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value of type string.
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value's type is string, false if it is not.
 */
function _checkString(value, silent = false) {
  return _singleValue(
    value,
    TYPE.str,
    silent,
    typeof value === TYPE.str || value instanceof String
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value of type boolean.
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value's type is boolean, false if it is not.
 */
function _checkBoolean(value, silent = false) {
  return _singleValue(
    value,
    TYPE.boo,
    silent,
    typeof value === TYPE.boo && (value === true || value === false)
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value of type number.
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value's type is number, false if it is not.
 */
function _checkNumber(value, silent = false) {
  return _singleValue(
    value,
    TYPE.num,
    silent,
    typeof value === TYPE.num && !isNaN(value)
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value is exactly undefined.
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value is exactly undefined, false if it is not.
 */
function _checkUndefined(value, silent = false) {
  return _singleValue(
    value,
    TYPE.und,
    silent,
    typeof value === TYPE.und && value === undefined
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value is exactly null.
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value is exactly null, false if it is not.
 */
function _checkNull(value, silent = false) {
  return _singleValue(value, TYPE.nul, silent, value === null)
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value of type array. (It does not check for the items' type)
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value's type is array, false if it is not.
 */
function _checkArray(value, silent = false) {
  return _singleValue(value, TYPE.arr, silent, Array.isArray(value))
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value is an HTMLElement.
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value's type is an HTMLElement, false if it is not.
 */
function _checkElement(value, silent = false) {
  return _singleValue(
    value,
    TYPE.ele,
    silent,
    value instanceof Element || value instanceof HTMLElement
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value of type object. (It does not check for the properties' type nor the object's constructor)
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value's type is object, false if it is not.
 */
function _checkObject(value, silent = false) {
  return _singleValue(
    value,
    TYPE.obj,
    silent,
    typeof value === TYPE.obj &&
      value instanceof Object &&
      !Array.isArray(value)
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value of type function. (It does not execute the function.)
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value's type is function, false if it is not.
 */
 function _checkFunction(value, silent = false) {
  return _singleValue(
    value,
    TYPE.fun,
    silent,
    typeof value === TYPE.fun
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks if a generic value is a valid URL.
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @param {Boolean} silent True to prevent error messages.
 * @returns {Boolean} True if the value's type is a valid URL, false if it is not.
 */
function _checkUrl(value, silent = false) {
  return true
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function checks for an exact match in an object's attributes and the types set in a dictionary of types.
 * @param {Object} object 
 * @param {Object} attributesTypes 
 * @returns {Boolean} True if all of the object's attributes exactly match the attributeTypes dictionary.
 */
function _checkObjectKeys(object, attributesTypes) {
  if (!(CHECK.object(object) && CHECK.object(attributesTypes))) {
    return false
  } else if (
    !areEqualArrays(Object.keys(object), Object.keys(attributesTypes))
  ) {
    return false
  }
  Object.keys(attributesTypes).forEach(function (keyName) {
    let expected = attributesTypes[keyName]
    let valueFound = object[keyName]
  })
  return true
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function generalizes the work of type checking all items inside an array.
 * @param {Array} array The array that will have the item's type checked.
 * @param {String} itemsType The type that must match all of the array's items.
 * @returns {Boolean} True if all items inside the array exactly match the type set.
 */
function _checkArrayItems(array, itemsType) {
  if (!CHECK.array(array)) {
    console.error(
      alarm('datatype', {
        expected: TYPE.arr,
        found: _writeDatatypeErrorMessage(array),
      })
    )
    return false
  } else if (!Object.keys(CHECK).includes(itemsType)) {
    console.error(
      alarm('missing', {
        found: itemsType,
        list: 'Object.keys(CHECK)',
      })
    )
    return false
  } else {
    let allgood = true
    array.forEach(function (checkedItem) {
      if (!CHECK[itemsType](checkedItem)) {
        allgood = false
      }
    })
    return allgood
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This namespace groups all the correct html attribute value validations.
 */
const CHECK = {
  string: _checkString,
  boolean: _checkBoolean,
  number: _checkNumber,
  undefined: _checkUndefined,
  null: _checkNull,
  array: _checkArray,
  element: _checkElement,
  object: _checkObject,
  function: _checkFunction,
  url: _checkUrl,
  objectKeys: _checkObjectKeys,
  arrayItems: _checkArrayItems,
}
