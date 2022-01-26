//          ____                  _ _ 
//     __ _/ ___| _ __ ___   __ _| | |
//    / _` \___ \| '_ ` _ \ / _` | | |
//   | (_| |___) | | | | | | (_| | | |
//    \__,_|____/|_| |_| |_|\__,_|_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Small is the shortest typographical element, it is used inside small elements that require text, like Chips or small Buttons.
 * @param {(String|HTMLElement)} [children=[]] (Spread) All of the elements immediatly inside the element.
 */
 function aSmall(edit = {}, ...children) {
  // Parameter Validation
  let attr = validateComponent(edit, {})
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-small' }

  return RR('span', { ...attr, ...{ class: classes.default } }, ...children)
}
