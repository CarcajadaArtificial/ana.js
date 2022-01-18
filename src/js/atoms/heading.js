//          _   _                _ _             
//     __ _| | | | ___  __ _  __| (_)_ __   __ _ 
//    / _` | |_| |/ _ \/ _` |/ _` | | '_ \ / _` |
//   | (_| |  _  |  __/ (_| | (_| | | | | | (_| |
//    \__,_|_| |_|\___|\__,_|\__,_|_|_| |_|\__, |
//                                         |___/ 
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Heading is the medium-sized heading of the three heading types, the other two being the Subheading and the Title. It is conventionally used for titles of page sections, multiple of these can be found inside a single page.
 * @param {array} children All of the elements immediatly inside the Heading.
 */
 function aHeading(edit = {}, ...children) {
  // Parameter Validation
  let attr = validateComponent(edit, {})
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-heading' }

  return RR('span', { ...attr, ...{ class: classes.default } }, ...children)
}
