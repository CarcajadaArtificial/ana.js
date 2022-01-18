//     ____ _ _            _     _   _ _   _ _ _ _   _
//    / ___| (_) ___ _ __ | |_  | | | | |_(_) (_) |_(_) ___  ___
//   | |   | | |/ _ \ '_ \| __| | | | | __| | | | __| |/ _ \/ __|
//   | |___| | |  __/ | | | |_  | |_| | |_| | | | |_| |  __/\__ \
//    \____|_|_|\___|_| |_|\__|  \___/ \__|_|_|_|\__|_|\___||___/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @module Ana/Utilities
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This auxiliary function creates a standard way of displaying any value's construction.
 * @param {Any} value This generic paramter can contain any value of any data type.
 * @example new Date()) // returns "object/Dat"
 * @returns {String} Standard construction message.
 */
function _writeDatatypeErrorMessage(value) {
  return value === undefined
    ? TYPE.und
    : value === null
    ? TYPE.nul
    : `${typeof value}/${value.constructor.name}`
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Dictionary of standarized error messages. Every message reports different pieces of data, so the message creation must have different inputs processed individually.
 * @param {Object} errorBody This generic object contains the necessary information to display the standard error message. Every message requires individual properties with different names.
 */
const ERROR_TYPES = {
  handling: function (errorBody) {
    return CHECK.string(errorBody.wrongType)
      ? `Handling Error: \'${errorBody.wrongType}\' is not included among the error types.`
      : ''
  },
  datatype: function (errorBody) {
    return CHECK.string(errorBody.expected)
      ? `Data Type Error: The type \'${
          errorBody.expected
        }\' was expected, but type \'${_writeDatatypeErrorMessage(
          errorBody.found
        )}\' was found.`
      : ''
  },
  missing: function (errorBody) {
    return CHECK.objectKeys(errorBody, {
      found: TYPE.str,
      list: TYPE.str,
    })
      ? `Missing Value Error: The value \'${errorBody.found}\' was not found inside the list \'${errorBody.list}\'.`
      : ''
  },
  slug: function (errorBody) {
    return CHECK.string(errorBody.unslugged)
      ? `Unslugged String Error: The value \'${errorBody.unslugged}\' has special characters, it must contain only normal characters.`
      : ''
  },
  htmlAttribute: function (errorBody) {
    return `HTML Render Error: Invalid attribute. The value (${errorBody.found}) is ${errorBody.invalidness}`
  },
  couldntGetElementById: function (errorBody) {
    return `Missing Element Error: Couldn't get an element by it's id: '${errorBody.found}'. The element might not exist or it may be being looked for before its even created.`
  },
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function creates a "slugged" version of any string. The direct utility of this is to create unique, easy to read and identifiable URLs. The URL ".../albums/37h8278shw8ihucs" is using a hypothetical databse ID, while ".../albums/WishYouWereHere" contains a sluggified version of the album title "Wish You Were Here". To achieve this, it removes any character that isn't helpful for both the browser and the user.
 * @returns {String} A clean and slugged string, ready for URL usage.
 * @param {String} unslugged The String that potentially contains usless characters for the purpose of URL readability.
 * @todo Change errors to standard error handling
 */
function slug(unslugged) {
  if (typeof unslugged === TYPE.str) {
    if (unslugged === '') {
      console.warn(
        'Called slug() function expecting a string, instead got an empty string.'
      )
      return ''
    }
    // Sluggification
    const slugged = unslugged.replace(/[^A-Za-z0-9]/g, '').replace(/\s/g, '')

    if (slugged === '') {
      console.warn(
        'Called slug() function expecting a string, instead got only special characters.'
      )
    }
    return slugged
  } else {
    console.error(
      'Type error, called slug() function expecting a string, instead got: ',
      unslugged
    )
    return ''
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function compares two arrays for exact equality.
 * @returns {Boolean} - Returns true if both arrays are exactly the same, false if not.
 * @param {Array} tenor - This array is arbitrarily set as the base subject of the comparison.
 * @param {Array} vehicle -  The secondary array that is going to be compared to the tenor array.
 */
function areEqualArrays(tenor = [], vehicle = []) {
  // Validate array datatype
  if (!CHECK.array(tenor)) {
    console.error(
      alarm('datatype', {
        expected: TYPE.arr,
        found: tenor,
      })
    )
    return false
  }
  // Validate array datatype
  else if (!CHECK.array(vehicle)) {
    console.error(
      alarm('datatype', {
        expected: TYPE.arr,
        found: vehicle,
      })
    )
    return false
  }
  // Prematrue check
  else if (tenor.length !== vehicle.length) {
    return false
  }
  // Expected path
  else {
    let match = true
    tenor.forEach(function (tenorValue, index) {
      if (tenorValue !== vehicle[index]) {
        match = false
      }
    })
    return match
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function appends an array of HTMLELements inside of another one.
 * @returns {HTMLElement} - This function returns an HTML element with appended children.
 * @param {HTMLElement} parent - The HTML element that will store the children.
 * @param {Array(HTMLElement)} children - All of the HTML elements that will be appended to the parent.
 */
function appendChildren(parent, children) {
  // console.log(parent, children)
  if (!CHECK.element(parent, true)) {
    // console.error("Error, there must be an HTMLElement to append children to.")
    return undefined
  } else if (!CHECK.array(children, true)) {
    // console.error("Error, the list of children must be an array")
    return parent
  } else {
    if(children.length > 0) {
      children.forEach(function (child) {
        if (CHECK.element(child, true)) {
          parent.appendChild(child)
        } else if (CHECK.string(child, true)) {
          parent.appendChild(document.createTextNode(child))
        } else if (CHECK.undefined(child, true)) {
          // Do nothing
        } else {
          console.error("Error, the array of children contains values different than HTMLElement or String or undefined.")
          parent.innerHTML = ''
          return parent
        }
      })
    }
    return parent
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function creates a standard error message.
 * @param {String} type The name of the standard error to be displayed.
 * @param {Object} body This generic object contains the necessary information to display the standard error message. Every message requires individual properties with different names.
 * @returns Standard error message containing the information inside the error body.
 */
function alarm(type = '', body = {}) {
  if (!Object.keys(ERROR_TYPES).includes(type)) {
    console.error(alarm('handling', { wrongType: type }))
    return ''
  }
  return ERROR_TYPES[type](body)
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function is meant to be a summary of the text "document.getElementById"
 * @param {String} id The id of the element that is to be searched.
 * @returns An element with a matching ID.
 */
function eID(id = null) {
  elementWithId = document.getElementById(id)

  try {
    elementWithId.hidden
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(alarm('couldntGetElementById', { found: id }))
      return null
    } else {
      throw error
    }
  }

  if (CHECK.string(id) && CHECK.element(elementWithId)) {
    return document.getElementById(id)
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function is used to simplify the use of the fetch function. If the data attribute is an object, the fetch will become a POST, and if it is null, it will become a GET.
 * @param {String} url The API's url that is to be fetched.
 * @param {Object} data The object that will be posted to the API, null if none.
 * @returns {Pormise} The API's response.
 */
async function bring(url = null, data = null) {
  if (CHECK.string(url)) {
    if (CHECK.object(data, true)) {
      let fetchBody = {
        ...data,
      }
      return fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(fetchBody),
      })
        .then((response) => response.json())
        .catch((error) => console.error(error))
    } else if (CHECK.null(data, true)) {
      console.log('MISSING GET IMPLEMENTATION')
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function msToTime(ms, delim = ':') {
  const showWith0 = (value) => (value < 10 ? `0${value}` : value)
  const hours = showWith0(Math.floor((ms / (1000 * 60 * 60)) % 60))
  const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60))
  const seconds = showWith0(Math.floor((ms / 1000) % 60))
  return `${
    parseInt(hours) ? `${hours}${delim}` : ''
  }${minutes}${delim}${seconds}`
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function createIdManager(dictionaryOfIds) {
  var dictionaryOfElements = {}

  Object.keys(dictionaryOfIds).forEach((entryId) => {
    dictionaryOfElements[entryId] = function (onlyString) {
      if(onlyString) {
        return dictionaryOfIds[entryId]
      } else {
        return eID(dictionaryOfIds[entryId])
      }
    }
  })

  return dictionaryOfElements
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Add validation of data types of parameters with multiple options:
/*
{
  param1: [value, string],
  param2: [value, string, number, undefined],
}
*/
function validateComponent(edit, params) {
  let editor = {...edit}
  let paramNames = Object.keys(params)
  let editorNames = Object.keys(editor)

  if (CLIENT_ENVIRONMENT.UNIT_TESTING) {
    paramNames.forEach(paramName => {
      if(ATTRIBUTE_KEYWORDS.includes(paramName)) {
        console.error(`Cannot use the parameter name ${paramName} because it's an attribute keyword.`)
      }
    })
  }

  editorNames.forEach(editorName => {
    if(paramNames.includes(editorName)) {
      let passedOneType = false
      let paramTypes = params[editorName]
      let paramValue = editor[editorName]

      paramTypes.forEach(paramType => {
        if(CHECK[paramType](paramValue, true)) {
          passedOneType = true
        }
      })

      if(passedOneType) {
        delete editor[editorName]
      } else{
        console.error(alarm('datatype', {
          found: paramValue,
          expected: paramTypes.toString()
        }))
      }
    } else if (editorName === 'class') {
      delete editor[editorName]
    }
  })

  return editor
}