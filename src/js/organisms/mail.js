//          __  __       _ _ 
//     __ _|  \/  | __ _(_) |
//    / _` | |\/| |/ _` | | |
//   | (_| | |  | | (_| | | |
//    \__,_|_|  |_|\__,_|_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Organisms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function _mailWordChips(...bodySlices) {
  // Cleaned the mail body slices and divided the total into words.
  let cleanBodySlices = bodySlices.map((bodySlice) => {
    return bodySlice.replace(/\s+/g, ' ').trim()
  })
  let fullBody = cleanBodySlices.join(' ')
  let bodyWords = fullBody.split(' ')
  let wordsWithoutSpecialChars = bodyWords.map((word) => {
    return word.replace(/[`~!#^&*()_|+\-—=?;:'•’"©,<>\{\}\[\]\\\/]/gi, '')
  })
  let cleanWordArray = wordsWithoutSpecialChars.filter((word) => {
    return word.length > 3
  })

  // Count all words
  let wordMap = {}
  cleanWordArray.forEach((word) => {
    if (CHECK.undefined(wordMap[word], true)) {
      wordMap[word] = 1
    } else {
      wordMap[word] = wordMap[word] + 1
    }
  })

  // Sort the array by count
  let wordArray = Object.keys(wordMap).map(function (word) {
    return [word, wordMap[word]]
  })
  wordArray.sort((first, second) => {
    return second[1] - first[1]
  })

  // Create highlights
  let highlights = wordArray.filter((wordItem) => {
    let word = wordItem[0]
    return (
      word.indexOf('$') !== -1 ||
      word.indexOf('@') !== -1 ||
      word.indexOf('#') !== -1
    )
  })

  // Slice the array for only the top n with 2+ count
  wordArray = wordArray.filter((word) => {
    return word[1] > 1
  })
  wordArray = wordArray.slice(0, 5)

  return {
    frequent: wordArray,
    highlights: highlights,
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function aMail(
  edit = {
    mail: undefined,
  }
) {
  // Parameter Validation
  let attr = validateComponent(edit, { mail: [TYPE.obj] })
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-mail-container' }

  let linkChips = []
  let bodySlices = []

  // a-mail-container-header
  let containerHeader = RR(
    'div',
    { class: 'a-mail-container-header' },
    aLabel({ class: 'a-mail-title' }, edit.mail.subject),
    aSubheading({ class: 'a-mail-email' }, edit.mail.from)
  )

  // a-mail-body
  let mailBody = aParagraph(
    { class: 'a-mail-body' },
    ...edit.mail.body.map((bodySlice) => {
      if (bodySlice.indexOf('http') == 0) {
        linkChips.push(
          // a-mail-chip-link
          aChip({
            chipLabel: 'link',
            iconName: 'link',
            title: bodySlice,
            class: 'a-mail-chip-link',
          })
        )
        return aLink(
          { href: bodySlice, title: bodySlice, class: 'a-mail-body-link' },
          'link'
        )
      } else {
        bodySlices.push(bodySlice)
        return RR('span', { class: 'a-mail-body-slice' }, bodySlice)
      }
    })
  )

  // a-mail-chip-frequent
  let wordArrays = _mailWordChips(...bodySlices)
  let frequentChips = wordArrays.frequent.map((word) => {
    return aChip({
      chipLabel: `${word[0]} (${word[1]})`,
      iconName: 'text_fields',
      class: 'a-mail-chip-frequent',
    })
  })
  // a-mail-chip-highlight
  let highlightChips = wordArrays.highlights.map((word) => {
    return aChip({
      chipLabel: word[0],
      iconName: 'star',
      class: 'a-mail-chip-highlight',
    })
  })

  // a-mail-chip-attachment
  let attachmentChip =
    edit.mail.attachments > 0
      ? aChip({
          chipLabel: String(edit.mail.attachments),
          iconName: 'attach_file',
          class: 'a-mail-chip-attachment',
        })
      : undefined

  // a-mail-chip-bcc
  let bccChip = edit.mail.bcc
    ? aChip({
        chipLabel: 'BCC',
        iconName: 'mail_outline',
        class: 'a-mail-chip-bcc',
      })
    : undefined

  // a-mail-chips
  let mailChips = RR(
    'div',
    { class: 'a-mail-chip-container' },
    attachmentChip,
    bccChip,
    ...highlightChips,
    ...frequentChips,
    ...linkChips
  )

  // a-mail-container-body
  let containerBody = RR(
    'div',
    { class: 'a-mail-container-body' },
    aSeparator(),
    aLink(
      {
        href: `https://mail.google.com/mail/u/0/#inbox/${edit.mail.message_id}`,
        target: '_blank',
      },
      'Open Email'
    ),
    aLabel(
      { class: 'a-mail-received' },
      `${new Date(edit.mail.received.seconds * 1000).toDateString()} ${new Date(
        edit.mail.received.seconds * 1000
      ).toLocaleTimeString()}`
    ),
    mailChips,
    mailBody
  )

  return RR(
    'div',
    {
      class: classes.default,
      'data-email': edit.mail.from,
      'data-thread-id': edit.mail.thread_id,
      ...attr,
    },
    containerHeader,
    containerBody
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function aMailList(
  edit = {
    listOfMails: undefined,
  }
) {
  // Parameter Validation
  let attr = validateComponent(edit, { listOfMails: [TYPE.arr] })
  // Class Substitution
  let classes = { default: edit.class ? edit.class : 'a-mail-list' }

  // a-mail
  let mails = edit.listOfMails.map((mailEntry) => {
    return aMail({ mail: mailEntry })
  })

  return RR('div', { class: classes.default, ...attr }, mails.shift(), ...mails)
}
