//         _____ _ _   _      
//     __ |_   _(_) |_| | ___ 
//    / _` || | | | __| |/ _ \
//   | (_| || | | | |_| |  __/
//    \__,_||_| |_|\__|_|\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Title is the largest heading of the three heading types, the other two being the Heading and Subheading. It is conventionally used for page title and only one can be found, usually at the top of the page.
 * @param {array} children All of the elements immediatly inside the Title.
 */
 function aTitle(edit = {}, ...children) {
  // Parameter Validation
  let attr = validateComponent(edit, {})
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-title' }

  return RR('span', { ...attr, ...{ class: classes.default } }, ...children)
}
