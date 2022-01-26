//          ____        _     _                    _ _             
//     __ _/ ___| _   _| |__ | |__   ___  __ _  __| (_)_ __   __ _ 
//    / _` \___ \| | | | '_ \| '_ \ / _ \/ _` |/ _` | | '_ \ / _` |
//   | (_| |___) | |_| | |_) | | | |  __/ (_| | (_| | | | | | (_| |
//    \__,_|____/ \__,_|_.__/|_| |_|\___|\__,_|\__,_|_|_| |_|\__, |
//                                                           |___/ 
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Subheading is the smallest of the three heading types, the other two being the Heading and Title. It is conventionally used for titles of subsections, multiple of these can be found inside a section.
 * @param {(String|HTMLElement)} [children=[]] (Spread) All of the elements immediatly inside the element.
 */
 function aSubheading(edit = {}, ...children) {
  // Parameter Validation
  let attr = validateComponent(edit, {})
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-subheading' }

  return RR('span', { ...attr, ...{ class: classes.default } }, ...children)
}
