//    ____                _
//   |  _ \ ___ _ __   __| | ___ _ __
//   | |_) / _ \ '_ \ / _` |/ _ \ '__|
//   |  _ <  __/ | | | (_| |  __/ |
//   |_| \_\___|_| |_|\__,_|\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Render
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function validates a group of attributes. The valid ones are set to the element and the invalid ones will trigger an error.
 * @param {HTMLElement} element This element will have attributes added.
 * @param {Object} attributes Dictionary of attributes, the key is the name and the property is the value.
 * @param {Object} guide Dictionary containing element guidelines.
 * @returns HTMLElement with the valid attributes added.
 */
function _verifyRenderAttributes(
  element = null,
  attributes = null,
  guide = null
) {
  if (CHECK.null(element, true)) {
    return null
  } else {
    let renderedElement = element
    if (CHECK.element(element) && CHECK.object(attributes)) {
      Object.keys(attributes).forEach(function (attributeName) {
        let attributeValue = attributes[attributeName]
        let guideAttribute = undefined

        // The attribute is a 'data-' attribute.
        if(attributeName.startsWith('data-')) {
          MATCH.string(attributeValue, renderedElement, attributeName)
        } else { 
          if (Object.keys(GLOBAL_ATTRIBUTES).includes(attributeName)) {
            guideAttribute = GLOBAL_ATTRIBUTES[attributeName]
          } else if (
            CHECK.object(guide.attr, true) &&
            Object.keys(guide.attr).includes(attributeName)
          ) {
            guideAttribute = guide.attr[attributeName]
          } else {
            console.error(
              alarm('htmlAttribute', {
                found: attributeName,
                invalidness: 'unknown',
              })
            )
            return null
          }
  
          if (
            !CHECK.undefined(guide._deprecatedAttributes, true) &&
            guide._deprecatedAttributes.includes(attributeName)
          ) {
            console.error(
              alarm('htmlAttribute', {
                found: attributeName,
                invalidness: 'deprecated',
              })
            )
            return null
          } else if (
            !CHECK.undefined(guide._experimentalAttributes, true) &&
            guide._experimentalAttributes.includes(attributeName)
          ) {
            console.error(
              alarm('htmlAttribute', {
                found: attributeName,
                invalidness: 'experimental',
              })
            )
            return null
          } else if (
            !CHECK.undefined(guide._nonStandardAttributes, true) &&
            guide._nonStandardAttributes.includes(attributeName)
          ) {
            console.error(
              alarm('htmlAttribute', {
                found: attributeName,
                invalidness: 'nonstandard',
              })
            )
            return null
          } else if (
            guideAttribute._isDependant &&
            attributes[guideAttribute.attributeName] ===
              guideAttribute.attributeValue
          ) {
            console.error(
              alarm('htmlAttribute', {
                found: attributeName,
                invalidness: 'dependant',
              })
            )
            return null
          } else if (
            guideAttribute._isMultivalid &&
            guideAttribute.invalid.includes(attributeValue)
          ) {
            console.error(
              alarm('htmlAttribute', {
                found: attributeName,
                invalidness: 'multivalid',
              })
            )
            return null
          } else {
            guideAttribute.match(attributeValue, renderedElement, attributeName)
          }
        }
      })
    }
    return renderedElement
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function validates a group of attributes. The valid ones are set to the element and the invalid ones will trigger an error.
 * @param {HTMLElement} element This element will have children added. The element's attributes have been already verified.
 * @param {Boolean} isEmpty Element's guidelines say it shouldn't have any children of any type.
 * @param {Null-HTMLElement-Array-String} children The potential content to be inside of the element.
 * @returns HTMLElement with validated children.
 */
function _verifyRenderChildren(
  element = null,
  isEmpty = null,
  children = null
) {
  if (CHECK.element(element, true) && CHECK.boolean(isEmpty, true)) {
    if (isEmpty) {
      if (
        CHECK.null(children, true) ||
        CHECK.undefined(children, true) ||
        (CHECK.array(children, true) && children.length === 0)
      ) {
        return element
      } else if (
        CHECK.element(children, true) ||
        (CHECK.array(children, true) && children.length > 0) ||
        CHECK.string(children, true)
      ) {
        console.error('Error, no children in empty html elements')
        return null
      } else {
        console.error(
          'Error, children must be of type HTMLElement, Array, String or Null.'
        )
        return null
      }
    } else {
      if (CHECK.element(children, true)) {
        element.appendChild(children)
        return element
      } else if (CHECK.array(children, true)) {
        return appendChildren(element, children)
      } else if (CHECK.string(children, true)) {
        element.append(children)
        return element
      } else if (CHECK.null(children, true)) {
        return element
      } else {
        console.error(
          'Error, children must be of type HTMLElement, Array, String or Null.'
        )
        return null
      }
    }
  } else {
    // Error
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _verifyRenderEvents(element = null, events = null) {
  if (CHECK.object(events, true)) {
    let eventList = Object.keys(events)
    eventList.forEach((eventName) => {
      if (EVENT_LISTNERS.includes(eventName)) {
        element.addEventListener(eventName, events[eventName])
      }
    })
  }
  return element
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function creates an HTMLElement out of specific data, a string for the element's name, a dictionary of attributes, and children in it's diversity of forms.
 * @param {String} elementName The name of the element to be rendered.
 * @param {Object} attributes Dictionary of attributes, the key is the name and the property is the value.
 * @param {Null-HTMLElement-Array-String} children The potential content to be inside of the element.
 * @returns {HTMLElement} HTMLElement with valid attribute and children.
 */
function _render(
  elementName = null,
  attributes = null,
  children = null,
  events = null
) {
  if (CHECK.string(elementName)) {
    let guide = htmlElements.find(function (htmlElement) {
      return htmlElement.name === elementName
    })
    if (CHECK.object(guide, true)) {
      return _verifyRenderEvents(
        _verifyRenderChildren(
          _verifyRenderAttributes(
            document.createElement(elementName),
            attributes,
            guide
          ),
          guide.isEmpty === true ? true : false,
          children
        ),
        events
      )
    } else {
      console.error(
        alarm('missing', { found: elementName, list: 'htmlElements' })
      )
      return null
    }
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function creates an HTMLElement out of specific data, a string for the element's name, a dictionary of attributes, and children in it's diversity of forms.
 * @param {String} tagName The name of the element to be rendered.
 * @param {Object} options Dictionary of attributes, the key is the name and the property is the value.
 * @param {Null-HTMLElement-Array-String} children The potential content to be inside of the element.
 * @returns {HTMLElement} HTMLElement with valid attribute and children.
 */
function __render(tagName = null, edit = null, ...children) {
  if (CHECK.string(tagName)) {
    let guide = htmlElements.find(function (htmlElement) {
      return htmlElement.name === tagName
    })
    if (CHECK.object(guide, true)) {
      return _verifyRenderChildren(
        _verifyRenderAttributes(document.createElement(tagName), edit, guide),
        guide.isEmpty === true ? true : false,
        children
      )
    } else {
      console.error(alarm('missing', { found: tagName, list: 'htmlElements' }))
      return null
    }
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
const R = _render
const RR = __render
