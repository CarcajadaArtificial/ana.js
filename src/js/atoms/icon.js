//          ___                
//     __ _|_ _|___ ___  _ __  
//    / _` || |/ __/ _ \| '_ \ 
//   | (_| || | (_| (_) | | | |
//    \__,_|___\___\___/|_| |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * An Icon is a glyph that carries information as compactly as it is elegant. It is part of a set and it's identified by its name. The available icons are only the ones that take part of the Material library.
 * @param {string} edit.iconName The unique name that identifies every individual Icon.
 */
 function aIcon(edit = { iconName: undefined }) {
  // Parameter Validation
  let attr = validateComponent(edit, { iconName: [TYPE.str] })
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-icon' }

  return RR(
    'span',
    { ...attr, ...{ class: `material-icons ${classes.default}` } },
    edit.iconName
  )
}
