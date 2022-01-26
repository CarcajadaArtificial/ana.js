//          _          _          _ 
//     __ _| |    __ _| |__   ___| |
//    / _` | |   / _` | '_ \ / _ \ |
//   | (_| | |__| (_| | |_) |  __/ |
//    \__,_|_____\__,_|_.__/ \___|_|
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Label is one of two base typographical elements, slightly smaller than a Paragraph. This element is used for short text, a few words at most. For multilinear text, use a Paragraph instead.
 * @param {(String|HTMLElement)} [children=[]] (Spread) All of the elements immediatly inside the element.
 */
 function aLabel(edit = {}, ...children) {
  // Parameter Validation
  let attr = validateComponent(edit, {})
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-label' }

  return RR('span', { ...attr, ...{ class: classes.default } }, ...children)
}
