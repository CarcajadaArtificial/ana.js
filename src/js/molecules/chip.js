//           ____ _     _       
//     __ _ / ___| |__ (_)_ __  
//    / _` | |   | '_ \| | '_ \ 
//   | (_| | |___| | | | | |_) |
//    \__,_|\____|_| |_|_| .__/ 
//                       |_|    
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Chip is a compact element that shows pieces of similar-leveled information about a subject in common. Chips should appear dynamically as a group of interactive elements.
 * @param {string} edit.chipLabel The text inside of the Chip.
 * @param {boolean} edit.isDeletable If true, the Chip will contain a closing icon that hides the Chip when clicked.
 * @param {string} edit.iconName Contains the name of an icon that can be placed inside the Chip.
 */
 function aChip(
  edit = {
    chipLabel: undefined,
    isDeletable: undefined,
    iconName: undefined,
  }
) {
  // Parameter Validation
  let attr = validateComponent(edit, {
    chipLabel: [TYPE.str],
    isDeletable: [TYPE.und, TYPE.boo],
    iconName: [TYPE.und, TYPE.str],
  })
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-chip' }

  // a-chip-icon
  let chipIcon = edit.iconName
    ? aIcon({ iconName: edit.iconName, class: 'a-chip-icon' })
    : undefined
  // a-chip-label
  let chipLabel = RR('span', { class: 'a-chip-label' }, edit.chipLabel)
  // a-chip-close
  let chipClose = edit.isDeletable
    ? aIcon({ iconName: 'close', class: 'a-chip-close' })
    : undefined

  return RR(
    'span',
    { ...attr, ...{ class: classes.default } },
    chipIcon,
    chipLabel,
    chipClose
  )
}
