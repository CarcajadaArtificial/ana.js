//           ____                     _         _   
//     __ _ / ___|_____   _____ _ __ / \   _ __| |_ 
//    / _` | |   / _ \ \ / / _ \ '__/ _ \ | '__| __|
//   | (_| | |__| (_) \ V /  __/ | / ___ \| |  | |_ 
//    \__,_|\____\___/ \_/ \___|_|/_/   \_\_|   \__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Organisms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function aCoverArt(
  options = {
    colors: undefined,
    recordId: undefined,
    updateUrl: undefined,
  },
  attributes = null
) {
  if (CHECK.array(options.colors, true)) {
    coverArtPixels = []
    options.colors.forEach((color) => {
      coverArtPixels.push(
        R('div', {
          class: `a-record-cover-pixel ${color}`,
        })
      )
    })

    let cover = R(
      'div',
      { class: 'a-record-cover', ...attributes },
      coverArtPixels
    )

    // cover.addEventListener('click', onClickEnterFullView)

    return cover
  } else if (CHECK.string(options.recordId, true)) {
    return R('div', { class: 'a-record-cover-missing', ...attributes }, [
      R('img', {
        id: `id-record-${options.recordId}-preview`,
        hidden: true,
        src: '',
      }),
      _labelMissingCoverArt(options.recordId),
      _inputMissingCoverArt(options.recordId, options.updateUrl),
    ])
  } else {
    return null
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _labelMissingCoverArt(recordId) {
  let missingCoverArtLabel = R(
    'label',
    {
      class: 'a-record-cover-missing-message',
    },
    'Missing art'
  )
  missingCoverArtLabel.addEventListener('click', (event) => {
    eID(`id-record-${recordId}-cover-art-input`).click()
  })
  return missingCoverArtLabel
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _inputMissingCoverArt(recordId, updateUrl) {
  let inputFileCoverArt = R('input', {
    class: 'a-record-cover-missing-input',
    id: `id-record-${recordId}-cover-art-input`,
    type: 'file',
    accept: '.png',
  })

  inputFileCoverArt.setAttribute('data-record-reference', recordId)
  inputFileCoverArt.addEventListener('change', (event) => {
    let reader = new FileReader()
    let input = event.target
    let file = input.files[0]
    let preview = eID(`id-record-${recordId}-preview`)

    _inputMissingCoverArtMutationObserver(preview, input, updateUrl)

    reader.addEventListener(
      'load',
      function () {
        preview.src = reader.result
      },
      false
    )

    if (file) {
      reader.readAsDataURL(file)
    }
  })

  return inputFileCoverArt
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _inputMissingCoverArtMutationObserver(preview, input, updateUrl) {
  new MutationObserver(function () {
    this.disconnect()
    bring(updateUrl, {
      recordFile: preview.getAttribute('src'),
      recordId: input.getAttribute('data-record-reference'),
    }).then((colors) => {
      let recordContainer = input.parentElement.parentElement
      recordContainer.firstChild.remove()
      recordContainer.prepend(aCoverArt({ colors: colors }))
    })
  }).observe(preview, { attributeFilter: ['src'] })
}
