import jsdocJson from '../../../public/jsdoc/jsdoc.json'
import * as ANA from '../../../public/js/ana'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function createDocumentTemplate(doc) {
  // File path and link to GitHub
  let githubUrlPrefix =
    'https://github.com/CarcajadaArtificial/ana.js/tree/main'
  let path =
    '[Open on GitHub](' +
    githubUrlPrefix +
    doc.meta.path.substring(37) +
    '/' +
    doc.meta.filename +
    ') `.' +
    doc.meta.path.substring(37) +
    '/' +
    doc.meta.filename +
    ':' +
    doc.meta.lineno +
    '`\n'

  // Parameters
  let parameters = ''
  if (doc.params.length > 0) {
    parameters = '|Name|Type|Description|Default|\n|---|---|---|---|\n'
    doc.params.forEach((param) => {
      parameters +=
        '|**' +
        param.name +
        '**|`' +
        param.type.names.join(', ') +
        '`|' +
        param.description +
        '|*' +
        param.defaultvalue +
        '*|\n'
    })
  }

  // Returns
  let returns = ''
  if (doc.returns && doc.returns.length > 0) {
    returns =
      '**Returns** ➜ `' +
      doc.returns[0].type.names.join(', ') +
      '`' +
      doc.returns[0].description.substring(
        3,
        doc.returns[0].description.length - 4
      ) +
      '\n'
  }

  return [
    // Title
    '#' + doc.name,
    // File Path and link to GitHub
    path,
    // Description
    doc.description,
    // Parameters
    parameters,
    // Returns
    returns,
  ].join('\n')
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function getfromJsdocJson(...names) {
  let docDictionary = {}
  names.forEach((name) => {
    let componentDocs = jsdocJson.docs.filter(
      (documentBlock) => documentBlock.name === name
    )
    if (componentDocs.length !== 1) {
      console.error(
        `${name} function has ${componentDocs.length} matches in jsdoc JSON file.`,
        componentDocs
      )
    } else {
      docDictionary[name] = createDocumentTemplate(componentDocs[0])
    }
  })
  return docDictionary
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aDocSpace = (...children) =>
  ANA.RR('div', { class: 'a-doc-space' }, ...children)

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aDocBlock = (quantity = 1) =>
  quantity === 1
    ? ANA.RR('div', { class: 'a-doc-block' })
    : new Array(quantity)
        .fill(undefined)
        .map(() => ANA.RR('div', { class: 'a-doc-block' }))

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aLabel = {
  aLabel: ANA.aLabel,
  doc: getfromJsdocJson('aLabel'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aSmall = {
  aSmall: ANA.aSmall,
  doc: getfromJsdocJson('aSmall'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aParagraph = {
  aParagraph: ANA.aParagraph,
  doc: getfromJsdocJson('aParagraph'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aSubheading = {
  aSubheading: ANA.aSubheading,
  doc: getfromJsdocJson('aSubheading'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aHeading = {
  aHeading: ANA.aHeading,
  doc: getfromJsdocJson('aHeading'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aTitle = {
  aTitle: ANA.aTitle,
  doc: getfromJsdocJson('aTitle'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aDisplay = {
  aDisplay: ANA.aDisplay,
  doc: getfromJsdocJson('aDisplay'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aInputText = {
  aInputText: ANA.aInputText,
  doc: getfromJsdocJson('aInputText'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aInputSelect = {
  aInputSelect: ANA.aInputSelect,
  doc: getfromJsdocJson('aInputSelect'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aInputCheckbox = {
  aInputCheckbox: ANA.aInputCheckbox,
  doc: getfromJsdocJson('aInputCheckbox'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aButton = {
  aButton: ANA.aButton,
  doc: getfromJsdocJson('aButton'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aIcon = {
  aIcon: ANA.aIcon,
  doc: getfromJsdocJson('aIcon'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aLink = {
  aLink: ANA.aLink,
  doc: getfromJsdocJson('aLink'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aSeparator = {
  aSeparator: ANA.aSeparator,
  doc: getfromJsdocJson('aSeparator'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aLayoutBlock = {
  aLayoutBlock: ANA.aLayoutBlock,
  doc: getfromJsdocJson('aLayoutBlock'),
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const aLayout = {
  aLayout: ANA.aLayout,
  doc: getfromJsdocJson('aLayout'),
}
