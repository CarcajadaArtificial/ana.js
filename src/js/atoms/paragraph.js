//          ____                                       _     
//     __ _|  _ \ __ _ _ __ __ _  __ _ _ __ __ _ _ __ | |__  
//    / _` | |_) / _` | '__/ _` |/ _` | '__/ _` | '_ \| '_ \ 
//   | (_| |  __/ (_| | | | (_| | (_| | | | (_| | |_) | | | |
//    \__,_|_|   \__,_|_|  \__,_|\__, |_|  \__,_| .__/|_| |_|
//                               |___/          |_|          
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Paragraph is one of two base typographical elements, slightly larger than a Label. This element is used for text that has multiple lines and more text after it, maybe a heading or another paragraph. If the content inside the element is a few words long, use a Label instead.
 * @param {array} children All of the elements immediatly inside the Paragraph.
 */
 function aParagraph(edit = {}, ...children) {
  // Parameter Validation
  let attr = validateComponent(edit, {})
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-paragraph' }

  return RR('span', { ...attr, ...{ class: classes.default } }, ...children)
}
