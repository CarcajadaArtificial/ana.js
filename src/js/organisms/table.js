//         _____     _     _      
//     __ |_   _|_ _| |__ | | ___ 
//    / _` || |/ _` | '_ \| |/ _ \
//   | (_| || | (_| | |_) | |  __/
//    \__,_||_|\__,_|_.__/|_|\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Organisms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _aTableHead(columns) {
  let headerList = []
  columns.forEach((column) => {
    headerList.push(
      R(
        'div',
        { class: `a-table-cell a-table-cell-${column.size}` },
        aSubheading({}, {}, column.name)
      )
    )
  })
  let columnNames = {}
  columns.map((column) => {
    columnNames[column.key] = column.name
  })
  return _aTableRow(columns, columnNames)
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _aTableRow(columns, values, renderCells) {
  let listOfCells = []
  columns.forEach((column) => {
    let tableCell = R(
      'div',
      { class: `a-table-cell a-table-cell-${column.size}`, tabindex: 0 },
      R('span', { class: 'a-table-cell-label' }, String(values[column.key]))
    )

    if (renderCells) {
      if (Object.keys(renderCells).includes(column.key)) {
        tableCell = renderCells[column.key](column, values)
      }
    }

    listOfCells.push(tableCell)
  })

  return R('div', { class: 'a-table-row' }, listOfCells)
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _aTableBody(tableData, columns, renderCells) {
  let tableRows = []
  tableData.forEach(function (rowOfValues) {
    tableRows.push(_aTableRow(columns, rowOfValues, renderCells))
  })
  return tableRows
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function aTable(
  options = {
    tableData: undefined,
    columns: undefined,
    renderCells: undefined,
    sort: undefined,
  },
  attributes = null
) {
  let sortedData = options.tableData
  if (
    !CHECK.undefined(options.sort.column, true) &&
    !CHECK.undefined(options.sort.callback, true)
  ) {
    sortedData = options.tableData.sort(options.sort.callback)
  }

  return R('div', { class: 'a-table', ...attributes }, [
    R('div', { class: 'a-table-head' }, _aTableHead(options.columns)),
    R(
      'div',
      { class: 'a-table-body' },
      _aTableBody(sortedData, options.columns, options.renderCells)
    ),
  ])
}
