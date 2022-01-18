//          ____  _           _             
//     __ _|  _ \(_)___ _ __ | | __ _ _   _ 
//    / _` | | | | / __| '_ \| |/ _` | | | |
//   | (_| | |_| | \__ \ |_) | | (_| | |_| |
//    \__,_|____/|_|___/ .__/|_|\__,_|\__, |
//                     |_|            |___/ 
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Display is large decorative text found rarely on a page. It can be used in any way as long as the text doesn't feel crowded and is legible.
 * @param {array} children All of the elements immediatly inside the Title.
 */
 function aDisplay(edit = {}, ...children) {
  // Parameter Validation
  let attr = validateComponent(edit, {})
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-display' }

  return RR('span', { ...attr, ...{ class: classes.default } }, ...children)
}
