//          _     _       _    
//     __ _| |   (_)_ __ | | __
//    / _` | |   | | '_ \| |/ /
//   | (_| | |___| | | | |   < 
//    \__,_|_____|_|_| |_|_|\_\
//                         
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Link is an element that will take you to another html page or to perform a lesser command than a button would do. A Link must clearly explain where the link will take you to, and this information must be undertandable out of context. Limit the label to two words at most, and these shoulnd't be generic or vague. Open in a new window only in cases when opening a document with different format e.g. PDF.
 * @param {array} children All of the elements immediatly inside the Link.
 */
 function aLink(edit = {}, ...children) {
  // Parameter Validation
  let attr = validateComponent(edit, {})
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-link' }

  return RR('a', { ...attr, ...{ class: classes.default } }, ...children)
}
