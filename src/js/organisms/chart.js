//           ____ _                _   
//     __ _ / ___| |__   __ _ _ __| |_ 
//    / _` | |   | '_ \ / _` | '__| __|
//   | (_| | |___| | | | (_| | |  | |_ 
//    \__,_|\____|_| |_|\__,_|_|   \__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Organisms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function aChartBar(
  edit = {
    chartTitle: undefined,
    chartData: undefined,
    chartSort: undefined,
  }
) {
  // Order Chart Data
  let orderedChartData = undefined
  let highestValue = undefined
  if (edit.chartSort === 'asc') {
    orderedChartData = edit.chartData.sort((a, b) => a.value - b.value)
    highestValue = orderedChartData[orderedChartData.length - 1].value
  } else if (edit.chartSort === 'desc') {
    orderedChartData = edit.chartData.sort((a, b) => b.value - a.value)
    highestValue = orderedChartData[0].value
  } else {
    orderedChartData = edit.chartData
    highestValue = edit.chartData.sort((a, b) => b.value - a.value)[0].value
  }
  highestValue = Math.ceil(highestValue * 1.1)

  // Create Data Entry Elements
  let bars = RR(
    'div',
    { class: 'a-chart-bar-entry-container' },
    ...orderedChartData.map((dataEntry) => {
      return RR(
        'div',
        { class: 'a-chart-bar-entry' },
        RR('div', {
          class: 'a-chart-bar-entry-bar',
          style: `width: ${Math.ceil(
            (dataEntry.value / highestValue) * 100
          )}%`,
        }),
        aLabel(
          { class: 'a-chart-bar-entry-label' },
          `(${dataEntry.value}) ${dataEntry.label}`
        )
      )
    })
  )

  return RR(
    'div',
    { class: 'a-chart-bar' },
    aSubheading(
      {
        class: 'a-chart-bar-title',
      },
      edit.chartTitle
    ),
    bars
  )
}