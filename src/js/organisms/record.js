//          ____                        _ 
//     __ _|  _ \ ___  ___ ___  _ __ __| |
//    / _` | |_) / _ \/ __/ _ \| '__/ _` |
//   | (_| |  _ <  __/ (_| (_) | | | (_| |
//    \__,_|_| \_\___|\___\___/|_|  \__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Organisms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _aRecordName(record) {
  return aLink({}, { class: 'a-record-name' }, [
    R('p', { class: 'a-record-title' }, record.title),
    R('p', { class: 'a-record-subtitle' }, record.subtitle),
  ])
}
1
//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _aRecordTracklist(record) {
  const table = aTable({
    tableData: record.tracks,
    columns: [
      {
        key: 'order',
        name: '#',
        size: 'xs',
      },
      {
        key: 'title',
        name: 'Title',
        size: 'xl',
      },
      {
        key: 'duration',
        name: 'Duration',
        size: 'sm',
      },
    ],
    renderCells: {
      title: function (column, track) {
        let tableCell = R(
          'div',
          {
            class: `a-table-cell-editable a-table-cell a-table-cell-${column.size}`,
            tabindex: 0,
          },
          [
            R(
              'span',
              { class: 'a-table-cell-title', contenteditable: 'true' },
              track.title
            ),
            R(
              'span',
              { class: 'a-table-cell-subtitle', contenteditable: 'true' },
              track.subtitle
            ),
          ]
        )

        tableCell.addEventListener('click', (event) => {
          let cellClasses = event.target.classList
          if (cellClasses.contains('a-table-cell-editable')) {
            cellClasses.remove('a-table-cell-editable')
            cellClasses.add('a-table-cell-being-edited')
          }
        })

        tableCell.addEventListener('focusout', (event) => {
          let cellClasses = event.target.classList
          if (cellClasses.contains('a-table-cell-being-edited')) {
            cellClasses.remove('a-table-cell-being-edited')
            cellClasses.add('a-table-cell-editable')
          }
        })

        tableCell.addEventListener('focusin', (event) => {
          let cellClasses = event.target.classList
          if (cellClasses.contains('a-table-cell-being-edited')) {
            cellClasses.remove('a-table-cell-being-edited')
            cellClasses.add('a-table-cell-editable')
          }
        })

        return tableCell
      },
    },
    sort: {
      column: 'order',
      callback: (a, b) => a.order - b.order,
    },
  })

  let renderedTracks = []

  record.tracks.forEach((track) => {
    renderedTracks.push(
      R('div', { class: 'a-record-track' }, [
        R('span', { class: 'a-record-track-order' }, String(track.order)),
        R('span', { class: 'a-record-track-title' }, track.title),
        R('span', { class: 'a-record-track-subtitle' }, track.subtitle),
      ])
    )
  })

  return R('div', { class: 'a-record-information' }, [
    _aRecordName(record),
    R('span', { class: 'a-record-tracklist' }, renderedTracks),
  ])
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function onClickEnterFullView(event) {
  onClickExitFullView(event)
  event.target.closest('.a-record-block').classList.add('a-record-full-view')
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function onClickExitFullView(event) {
  let blocksInFullView = document.getElementsByClassName('a-record-full-view')
  if (blocksInFullView.length > 0) {
    for (let i = 0; i < blocksInFullView.length; i++) {
      blocksInFullView[i].classList.remove('a-record-full-view')
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function aRecord(
  options = { recordData: undefined, updateUrl: undefined },
  attributes = null
) {
  let record = options.recordData

  let recordContainer = R('div', { class: 'a-record-container', tabindex: 0 }, [
    aCoverArt({
      colors: record.art,
      recordId: record.docId,
      updateUrl: options.updateUrl,
    }),
    _aRecordName(record),
  ])

  recordContainer.addEventListener('click', onClickEnterFullView)

  return R('div', { class: 'a-record-block', ...attributes }, [
    recordContainer,
    _aRecordTracklist(record),
  ])
}

