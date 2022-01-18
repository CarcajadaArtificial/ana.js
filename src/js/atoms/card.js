//           ____              _ 
//     __ _ / ___|__ _ _ __ __| |
//    / _` | |   / _` | '__/ _` |
//   | (_| | |__| (_| | | | (_| |
//    \__,_|\____\__,_|_|  \__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Card is a surface that can contain information that revolves around the same subject. It is usually placed as a grid's child and located on the grid using the "column-span" mixin.
 * @param {string,undefined} edit.cardTitle [Optional] A Card can have a centered title on top that works to identify the subjects inside the card.
 * @param {array} children All of the elements immediatly inside the Card.
 */
 function aCard(
  edit = {
    cardTitle: undefined,
  },
  ...children
) {
  // Parameter Validation
  let attr = validateComponent(edit, {
    cardTitle: [TYPE.und, TYPE.str],
  })
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-card' }

  // a-card-title
  var cardTitle = undefined
  if (edit.cardTitle) {
    cardTitle = RR(
      'span',
      { class: 'a-card-title' },
      RR('span', { class: 'a-heading' }, edit.cardTitle)
    )
  }

  // a-card-content
  return RR(
    'div',
    { class: classes.default, ...attr },
    cardTitle,
    RR('div', { class: 'a-card-content' }, ...children)
  )
}
