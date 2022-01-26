//          _                            _
//     __ _| |    __ _ _   _  ___  _   _| |_
//    / _` | |   / _` | | | |/ _ \| | | | __|
//   | (_| | |__| (_| | |_| | (_) | |_| | |_
//    \__,_|_____\__,_|\__, |\___/ \__,_|\__|
//                     |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Layout text
 * @param {String} edit.colSpan Column Span
 * @param {String} children Children
 */
function aLayoutBlock(
  edit = {
    subgrid: undefined,
  },
  ...children
) {
  // Parameter Validation
  let attr = validateComponent(edit, {
    subgrid: [TYPE.boo, TYPE.und],
  })

  return RR(
    'div',
    {
      class: `a-layout-block${edit.subgrid === true ? ' a-subgrid' : ''}`,
      ...attr,
    },
    ...children
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Layout text
 * @param {String} edit.layoutMargin Margin
 * @param {String} children Children
 */
function aLayout(
  edit = {
    layoutName: undefined,
    layoutMargin: undefined,
  },
  ...children
) {
  // Parameter Validation
  let attr = validateComponent(edit, {
    layoutMargin: [TYPE.str, TYPE.und],
    layoutName: [TYPE.str, TYPE.und],
  })

  // a-layout-block
  // let blocks = children.map((child) => {
  //   if (CHECK.array(child, true)) {
  //     return aLayoutBlock({ colSpan: 12 }, ...child)
  //   } else {
  //     return aLayoutBlock({ colSpan: 12 }, child)
  //   }
  // })

  return RR(
    'div',
    {
      class: `a-layout-${edit.layoutName} a-layout-margin-${edit.layoutMargin}`,
      ...attr,
    },
    ...children
  )
}
