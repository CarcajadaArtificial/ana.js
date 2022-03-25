//    _____ _                           _
//   | ____| | ___ _ __ ___   ___ _ __ | |_ ___
//   |  _| | |/ _ \ '_ ` _ \ / _ \ '_ \| __/ __|
//   | |___| |  __/ | | | | |  __/ | | | |_\__ \
//   |_____|_|\___|_| |_| |_|\___|_| |_|\__|___/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Elements module.
 * @module Ana/Elements
 */

import {
  AttributeNonstandard,
  AttributeDeprecated,
  AttributeExperimental,
  AttributeString,
  AttributeBoolean,
  AttributeList,
  AttributeInput,
  Element,
} from './standard'

import { AnaConfiguration } from './ana'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This interface contains the list of all supported HTMLElement renders in the framework.
 */
export interface AnaElements {
  // HTML Elements
  a: Function
  audio: Function
  blockquote: Function
  body: Function
  button: Function
  canvas: Function
  caption: Function
  colgroup: Function
  data: Function
  dd: Function
  del: Function
  details: Function
  dialog: Function
  div: Function
  fieldset: Function
  form: Function
  h1: Function
  h2: Function
  h3: Function
  h4: Function
  h5: Function
  h6: Function
  head: Function
  html: Function
  iframe: Function
  ins: Function
  label: Function
  li: Function
  map: Function
  meter: Function
  object: Function
  ol: Function
  optgroup: Function
  option: Function
  output: Function
  portal: Function
  pre: Function
  progress: Function
  q: Function
  script: Function
  select: Function
  slot: Function
  style: Function
  table: Function
  tbody: Function
  td: Function
  textarea: Function
  tfoot: Function
  th: Function
  thead: Function
  time: Function
  tr: Function
  ul: Function
  video: Function
  area: Function
  base: Function
  br: Function
  col: Function
  embed: Function
  hr: Function
  img: Function
  input: Function
  link: Function
  meta: Function
  param: Function
  source: Function
  track: Function
  wbr: Function
  abbr: Function
  address: Function
  article: Function
  aside: Function
  b: Function
  bdi: Function
  cite: Function
  code: Function
  datalist: Function
  dfn: Function
  dl: Function
  dt: Function
  em: Function
  figcaption: Function
  figure: Function
  footer: Function
  header: Function
  i: Function
  kbd: Function
  legend: Function
  main: Function
  mark: Function
  nav: Function
  noscript: Function
  p: Function
  picture: Function
  rp: Function
  rt: Function
  ruby: Function
  s: Function
  samp: Function
  section: Function
  small: Function
  span: Function
  strong: Function
  sub: Function
  summary: Function
  sup: Function
  template: Function
  title: Function
  u: Function
  var: Function
  // SVG Elements
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is in charge of adding all HTMLELement render methods to the `Ana` class.
 */
export class AnaElements {
  constructor(param: AnaConfiguration = {}) {
    this.addElements(param.standardVerificationMode === true)
  }

  /**
   * This function is used to add HTMLElement render functions as class properties. This was abstracted into a function in order for it to occurr after the class construction.
   */
  addElements: Function = (standardVerificationMode: boolean): void => {
    this.a = new Element('a', false, {
      rel: new AttributeList('rel', 'validLinkTypes', 'invalidLinkTypes'),
      hreflang: new AttributeList('hreflang', 'isoCodes'),
      download: new AttributeString('download'),
      href: new AttributeString('href'),
      ping: new AttributeString('ping'),
      target: new AttributeString('target'),
      referrerpolicy: new AttributeExperimental('referrerpolicy'),
      charset: new AttributeDeprecated('charset'),
      coords: new AttributeDeprecated('coords'),
      name: new AttributeDeprecated('name'),
      rev: new AttributeDeprecated('rev'),
      shape: new AttributeDeprecated('shape'),
    }).render(standardVerificationMode)

    this.audio = new Element('audio', false, {
      crossorigin: new AttributeList('crossorigin', 'crossorigin'),
      preload: new AttributeList('preload', 'preload'),
      src: new AttributeString('src'),
      autoplay: new AttributeBoolean('autoplay'),
      controls: new AttributeBoolean('controls'),
      loop: new AttributeBoolean('loop'),
      muted: new AttributeBoolean('muted'),
      disableRemotePlayback: new AttributeExperimental('disableRemotePlayback'),
    }).render(standardVerificationMode)

    this.blockquote = new Element('blockquote', false, {
      cite: new AttributeString('cite'),
    }).render(standardVerificationMode)

    this.body = new Element('body', false, {
      alink: new AttributeDeprecated('alink'),
      background: new AttributeDeprecated('background'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      bottommargin: new AttributeDeprecated('bottommargin'),
      leftmargin: new AttributeDeprecated('leftmargin'),
      link: new AttributeDeprecated('link'),
      rightmargin: new AttributeDeprecated('rightmargin'),
      text: new AttributeDeprecated('text'),
      topmargin: new AttributeDeprecated('topmargin'),
      vlink: new AttributeDeprecated('vlink'),
    }).render(standardVerificationMode)

    this.button = new Element('button', false, {
      formenctype: new AttributeList('formenctype', 'encryption'),
      formmethod: new AttributeList('formmethod', 'formmethod'),
      type: new AttributeList('type', 'buttonType'),
      name: new AttributeString('name'),
      value: new AttributeString('value'),
      form: new AttributeString('form'),
      formaction: new AttributeString('formaction'),
      formtarget: new AttributeString('formtarget'),
      disabled: new AttributeBoolean('disabled'),
      autofocus: new AttributeBoolean('autofocus'),
      formnovalidate: new AttributeBoolean('formnovalidate'),
      autocomplete: new AttributeExperimental('autocomplete'),
    }).render(standardVerificationMode)

    this.canvas = new Element('canvas', false, {
      height: new AttributeString('height'),
      width: new AttributeString('width'),
      'moz-opaque': new AttributeDeprecated('moz-opaque'),
    }).render(standardVerificationMode)

    this.caption = new Element('caption', false, {
      align: new AttributeDeprecated('align'),
    }).render(standardVerificationMode)

    this.colgroup = new Element('colgroup', false, {
      span: new AttributeString('span'),
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(standardVerificationMode)

    this.data = new Element('data', false, {
      value: new AttributeString('value'),
    }).render(standardVerificationMode)

    this.dd = new Element('dd', false, {
      nowrap: new AttributeNonstandard('nowrap'),
    }).render(standardVerificationMode)

    this.del = new Element('del', false, {
      cite: new AttributeString('cite'),
      datetime: new AttributeString('datetime'),
    }).render(standardVerificationMode)

    this.details = new Element('details', false, {
      open: new AttributeBoolean('open'),
    }).render(standardVerificationMode)

    this.dialog = new Element('dialog', false, {
      open: new AttributeBoolean('open'),
      tabindex: new AttributeNonstandard('tabindex'),
    }).render(standardVerificationMode)

    this.div = new Element('div', false, {
      align: new AttributeDeprecated('align'),
    }).render(standardVerificationMode)

    this.fieldset = new Element('fieldset', false, {
      name: new AttributeString('name'),
      form: new AttributeString('form'),
      disabled: new AttributeBoolean('disabled'),
    }).render(standardVerificationMode)

    this.form = new Element('form', false, {
      autocomplete: new AttributeList('autocomplete', 'inputAutocomplete'),
      method: new AttributeList('method', 'formmethod'),
      enctype: new AttributeList('enctype', 'encryption'),
      rel: new AttributeList('rel', 'validLinkTypes', 'invalidLinkTypes'),
      name: new AttributeString('name'),
      target: new AttributeString('target'),
      action: new AttributeString('action'),
      'accept-charset': new AttributeString('accept-charset'),
      novalidate: new AttributeBoolean('novalidate'),
    }).render(standardVerificationMode)

    this.h1 = new Element('h1', false, {
      align: new AttributeDeprecated('align'),
    }).render(standardVerificationMode)

    this.h2 = new Element('h2', false, {
      align: new AttributeDeprecated('align'),
    }).render(standardVerificationMode)

    this.h3 = new Element('h3', false, {
      align: new AttributeDeprecated('align'),
    }).render(standardVerificationMode)

    this.h4 = new Element('h4', false, {
      align: new AttributeDeprecated('align'),
    }).render(standardVerificationMode)

    this.h5 = new Element('h5', false, {
      align: new AttributeDeprecated('align'),
    }).render(standardVerificationMode)

    this.h6 = new Element('h6', false, {
      align: new AttributeDeprecated('align'),
    }).render(standardVerificationMode)

    this.head = new Element('head', false, {
      profile: new AttributeDeprecated('profile'),
    }).render(standardVerificationMode)

    this.html = new Element('html', false, {
      xmlns: new AttributeString('xmlns'),
      manifest: new AttributeDeprecated('manifest'),
      version: new AttributeDeprecated('version'),
    }).render(standardVerificationMode)

    this.iframe = new Element('iframe', false, {
      sandbox: new AttributeList('sandbox', 'validSandbox', 'invalidSandbox'),
      allow: new AttributeString('allow'),
      name: new AttributeString('name'),
      srcdoc: new AttributeString('srcdoc'),
      src: new AttributeString('src'),
      hieght: new AttributeString('hieght'),
      width: new AttributeString('width'),
      allowfullscreen: new AttributeBoolean('allowfullscreen'),
      allowpaymentrequest: new AttributeBoolean('allowpaymentrequest'),
      align: new AttributeDeprecated('align'),
      frameborder: new AttributeDeprecated('frameborder'),
      longdesc: new AttributeDeprecated('longdesc'),
      marginheight: new AttributeDeprecated('marginheight'),
      marginwidth: new AttributeDeprecated('marginwidth'),
      scrolling: new AttributeDeprecated('scrolling'),
      csp: new AttributeExperimental('csp'),
      loading: new AttributeExperimental('loading'),
      referrerpolicy: new AttributeExperimental('referrerpolicy'),
      mozbrowser: new AttributeNonstandard('mozbrowser'),
    }).render(standardVerificationMode)

    this.ins = new Element('ins', false, {
      cite: new AttributeString('cite'),
      datetime: new AttributeString('datetime'),
    }).render(standardVerificationMode)

    this.label = new Element('label', false, {
      for: new AttributeString('for'),
    }).render(standardVerificationMode)

    this.li = new Element('li', false, {
      value: new AttributeString('value'),
      type: new AttributeDeprecated('type'),
    }).render(standardVerificationMode)

    this.map = new Element('map', false, {
      name: new AttributeString('name'),
    }).render(standardVerificationMode)

    this.meter = new Element('meter', false, {
      high: new AttributeString('high'),
      low: new AttributeString('low'),
      optimum: new AttributeString('optimum'),
      value: new AttributeString('value'),
      form: new AttributeString('form'),
      max: new AttributeString('max'),
      min: new AttributeString('min'),
    }).render(standardVerificationMode)

    this.object = new Element('object', false, {
      data: new AttributeString('data'),
      name: new AttributeString('name'),
      form: new AttributeString('form'),
      type: new AttributeString('type'),
      usemap: new AttributeString('usemap'),
      height: new AttributeString('height'),
      width: new AttributeString('width'),
      archive: new AttributeDeprecated('archive'),
      border: new AttributeDeprecated('border'),
      classid: new AttributeDeprecated('classid'),
      codebase: new AttributeDeprecated('codebase'),
      codetype: new AttributeDeprecated('codetype'),
      declare: new AttributeDeprecated('declare'),
      standby: new AttributeDeprecated('standby'),
    }).render(standardVerificationMode)

    this.ol = new Element('ol', false, {
      type: new AttributeList('type', 'orderedListType'),
      start: new AttributeString('start'),
      reversed: new AttributeBoolean('reversed'),
    }).render(standardVerificationMode)

    this.optgroup = new Element('optgroup', false, {
      label: new AttributeString('label'),
      disabled: new AttributeBoolean('disabled'),
    }).render(standardVerificationMode)

    this.option = new Element('option', false, {
      selected: new AttributeBoolean('selected'),
      disabled: new AttributeBoolean('disabled'),
      label: new AttributeString('label'),
      value: new AttributeString('value'),
    }).render(standardVerificationMode)

    this.output = new Element('output', false, {
      for: new AttributeString('for'),
      name: new AttributeString('name'),
      form: new AttributeString('form'),
    }).render(standardVerificationMode)

    this.portal = new Element('portal', false, {
      src: new AttributeString('src'),
    }).render(standardVerificationMode)

    this.pre = new Element('pre', false, {
      cols: new AttributeDeprecated('cols'),
      width: new AttributeDeprecated('width'),
      wrap: new AttributeNonstandard('wrap'),
    }).render(standardVerificationMode)

    this.progress = new Element('progress', false, {
      value: new AttributeString('value'),
      max: new AttributeString('max'),
    }).render(standardVerificationMode)

    this.q = new Element('q', false, {
      cite: new AttributeString('cite'),
    }).render(standardVerificationMode)

    this.script = new Element('script', false, {
      crossorigin: new AttributeList('crossorigin', 'crossorigin'),
      src: new AttributeString('src'),
      type: new AttributeString('type'),
      nonce: new AttributeString('nonce'),
      integrity: new AttributeString('integrity'),
      async: new AttributeBoolean('async'),
      defer: new AttributeBoolean('defer'),
      nomodule: new AttributeBoolean('nomodule'),
      referrerpolicy: new AttributeExperimental('referrerpolicy'),
      charset: new AttributeDeprecated('charset'),
      language: new AttributeDeprecated('language'),
    }).render(standardVerificationMode)

    this.select = new Element('select', false, {
      autocomplete: new AttributeList('autocomplete', 'inputAutocomplete'),
      form: new AttributeString('form'),
      name: new AttributeString('name'),
      size: new AttributeString('size'),
      autofocus: new AttributeBoolean('autofocus'),
      disabled: new AttributeBoolean('disabled'),
      multiple: new AttributeBoolean('multiple'),
      required: new AttributeBoolean('required'),
    }).render(standardVerificationMode)

    this.slot = new Element('slot', false, {
      name: new AttributeString('name'),
    }).render(standardVerificationMode)

    this.style = new Element('style', false, {
      type: new AttributeList('type', 'typeStyle'),
      media: new AttributeString('media'),
      nonce: new AttributeString('nonce'),
    }).render(standardVerificationMode)

    this.table = new Element('table', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      border: new AttributeDeprecated('border'),
      cellpadding: new AttributeDeprecated('cellpadding'),
      cellspacing: new AttributeDeprecated('cellspacing'),
      frame: new AttributeDeprecated('frame'),
      rules: new AttributeDeprecated('rules'),
      summary: new AttributeDeprecated('summary'),
      width: new AttributeDeprecated('width'),
    }).render(standardVerificationMode)

    this.tbody = new Element('tbody', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(standardVerificationMode)

    this.td = new Element('td', false, {
      colspan: new AttributeString('colspan'),
      headers: new AttributeString('headers'),
      rowspan: new AttributeString('rowspan'),
      align: new AttributeDeprecated('align'),
      axis: new AttributeDeprecated('axis'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      height: new AttributeDeprecated('height'),
      scope: new AttributeDeprecated('scope'),
      valign: new AttributeDeprecated('valign'),
      width: new AttributeDeprecated('width'),
    }).render(standardVerificationMode)

    this.textarea = new Element('textarea', false, {
      autocomplete: new AttributeList('autocomplete', 'inputAutocomplete'),
      spellcheck: new AttributeList('spellcheck', 'softBoolean'),
      wrap: new AttributeList('wrap', 'wrap'),
      cols: new AttributeString('cols'),
      form: new AttributeString('form'),
      maxlength: new AttributeString('maxlength'),
      name: new AttributeString('name'),
      placeholder: new AttributeString('placeholder'),
      rows: new AttributeString('rows'),
      disabled: new AttributeBoolean('disabled'),
      readonly: new AttributeBoolean('readonly'),
      required: new AttributeBoolean('required'),
      autocapitalize: new AttributeDeprecated('autocapitalize'),
      autocorrect: new AttributeDeprecated('autocorrect'),
    }).render(standardVerificationMode)

    this.tfoot = new Element('tfoot', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(standardVerificationMode)

    this.th = new Element('th', false, {
      abbr: new AttributeString('abbr'),
      colspan: new AttributeString('colspan'),
      headers: new AttributeString('headers'),
      rowspan: new AttributeString('rowspan'),
      align: new AttributeDeprecated('align'),
      axis: new AttributeDeprecated('axis'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      height: new AttributeDeprecated('height'),
      scope: new AttributeDeprecated('scope'),
      valign: new AttributeDeprecated('valign'),
      width: new AttributeDeprecated('width'),
    }).render(standardVerificationMode)

    this.thead = new Element('thead', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(standardVerificationMode)

    this.time = new Element('time', false, {
      datetime: new AttributeString('datetime'),
    }).render(standardVerificationMode)

    this.tr = new Element('tr', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(standardVerificationMode)

    this.ul = new Element('ul', false, {
      compact: new AttributeDeprecated('compact'),
      type: new AttributeDeprecated('type'),
    }).render(standardVerificationMode)

    this.video = new Element('video', false, {
      preload: new AttributeList('preload', 'preload'),
      crossorigin: new AttributeList('crossorigin', 'crossorigin'),
      poster: new AttributeString('poster'),
      src: new AttributeString('src'),
      height: new AttributeString('height'),
      width: new AttributeString('width'),
      loop: new AttributeBoolean('loop'),
      muted: new AttributeBoolean('muted'),
      playsinline: new AttributeBoolean('playsinline'),
      autoplay: new AttributeBoolean('autoplay'),
      controls: new AttributeBoolean('controls'),
    }).render(standardVerificationMode)

    // Empty Elements

    this.area = new Element('area', true, {
      rel: new AttributeList('rel', 'validLinkTypes', 'invalidLinkTypes'),
      hreflang: new AttributeList('hreflang', 'isoCodes'),
      shape: new AttributeList('shape', 'areaShape'),
      coords: new AttributeString('coords'),
      download: new AttributeString('download'),
      href: new AttributeString('href'),
      ping: new AttributeString('ping'),
      target: new AttributeString('target'),
      alt: new AttributeString('alt'),
    }).render(standardVerificationMode)

    this.base = new Element('base', true, {
      href: new AttributeString('href'),
      target: new AttributeString('target'),
    }).render(standardVerificationMode)

    this.br = new Element('br', true, {
      clear: new AttributeDeprecated('clear'),
    }).render(standardVerificationMode)

    this.col = new Element('col', true, {
      span: new AttributeString('span'),
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
      width: new AttributeDeprecated('width'),
    }).render(standardVerificationMode)

    this.embed = new Element('embed', true, {
      src: new AttributeString('src'),
      height: new AttributeString('height'),
      width: new AttributeString('width'),
      type: new AttributeString('type'),
    }).render(standardVerificationMode)

    this.hr = new Element('hr', true, {
      align: new AttributeDeprecated('align'),
      noshade: new AttributeDeprecated('noshade'),
      size: new AttributeDeprecated('size'),
      width: new AttributeDeprecated('width'),
      color: new AttributeNonstandard('color'),
    }).render(standardVerificationMode)

    this.img = new Element('img', true, {
      crossorigin: new AttributeList('crossorigin', 'crossorigin'),
      decoding: new AttributeList('decoding', 'decoding'),
      srcset: new AttributeString('srcset'),
      src: new AttributeString('src'),
      alt: new AttributeString('alt'),
      height: new AttributeString('height'),
      sizes: new AttributeString('sizes'),
      width: new AttributeString('width'),
      usemap: new AttributeString('usemap'),
      ismap: new AttributeBoolean('ismap'),
    }).render(standardVerificationMode)

    this.input = new Element('input', true, {
      autocomplete: new AttributeList('autocomplete', 'inputAutocomplete'),
      type: new AttributeList('type', 'inputType', 'invalidInputType'),
      form: new AttributeString('form'),
      name: new AttributeString('name'),
      value: new AttributeString('value'),
      autofocus: new AttributeBoolean('autofocus'),
      disabled: new AttributeBoolean('disabled'),
      accept: new AttributeInput('accept', ['file'], 'string'),
      alt: new AttributeInput('alt', ['file'], 'string'),
      capture: new AttributeInput('capture', ['file'], 'string'),
      // prettier-ignore
      checked: new AttributeInput('checked', ['radio', 'checkbox'], 'boolean'),
      dirname: new AttributeInput('dirname', ['text', 'search'], 'string'),
      // prettier-ignore
      formaction: new AttributeInput('formaction', ['image', 'submit'], 'string'),
      // prettier-ignore
      formenctype: new AttributeInput('formenctype', ['image', 'submit'], 'string'),
      // prettier-ignore
      formmethod: new AttributeInput('formmethod', ['image', 'submit'], 'string'),
      // prettier-ignore
      formnovalidate: new AttributeInput('formnovalidate', ['image', 'submit'], 'boolean'),
      // prettier-ignore
      formtarget: new AttributeInput('formtarget', ['image', 'submit'], 'string'),
      // prettier-ignore
      list: new AttributeInput('list', [ 'text', 'search', 'url', 'tel', 'email', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'range', 'color' ], 'string'),
      // prettier-ignore
      max: new AttributeInput('max', ['date', 'month', 'week', 'time', 'datetime-local', 'number', 'range'], 'string'),
      // prettier-ignore
      maxlength: new AttributeInput('maxlength', ['password', 'search', 'tel', 'text', 'url'], 'string'),
      // prettier-ignore
      min: new AttributeInput('min', ['date', 'month', 'week', 'time', 'datetime-local', 'number', 'range'], 'string'),
      // prettier-ignore
      minlength: new AttributeInput('minlength', ['password', 'search', 'tel', 'text', 'url'], 'string'),
      multiple: new AttributeInput('multiple', ['email', 'file'], 'boolean'),
      // prettier-ignore
      pattern: new AttributeInput('pattern', ['password', 'text', 'tel'], 'string'),
      // prettier-ignore
      placeholder: new AttributeInput('placeholder', ['password', 'search', 'text', 'tel', 'url'], 'string'),
      // prettier-ignore
      readonly: new AttributeInput('readonly', [ 'text', 'search', 'url', 'tel', 'email', 'password', 'date', 'month', 'week', 'time', 'datetime-local', 'number' ], 'boolean'),
      // prettier-ignore
      required: new AttributeInput('required', [ 'text', 'search', 'url', 'tel', 'email', 'password', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'checkbox', 'radio', 'file' ], 'boolean'),
      src: new AttributeInput('src', ['image'], 'string'),
      // prettier-ignore
      step: new AttributeInput('step', ['date', 'month', 'week', 'time', 'datetime-local', 'number', 'range'], 'string'),
    }).render(standardVerificationMode)

    this.link = new Element('link', true, {
      rel: new AttributeList('rel', 'validLinkTypes', 'invalidLinkTypes'),
      as: new AttributeList('as', 'linkAs'),
      crossorigin: new AttributeList('crossorigin', 'crossorigin'),
      hreflang: new AttributeList('hreflang', 'isoCodes'),
      href: new AttributeString('href'),
      imagesizes: new AttributeString('imagesizes'),
      imagesrcset: new AttributeString('imagesrcset'),
      media: new AttributeString('media'),
      type: new AttributeString('type'),
      disabled: new AttributeBoolean('disabled'),
    }).render(standardVerificationMode)

    this.meta = new Element('meta', true, {
      'http-equiv': new AttributeList('http-equiv', 'httpEquiv'),
      content: new AttributeString('content'),
      name: new AttributeString('name'),
      charset: new AttributeString('charset'),
    }).render(standardVerificationMode)

    this.param = new Element('param', true, {
      name: new AttributeString('name'),
      value: new AttributeString('value'),
      type: new AttributeDeprecated('type'),
      valuetype: new AttributeDeprecated('valuetype'),
    }).render(standardVerificationMode)

    this.source = new Element('source', true, {
      srcset: new AttributeDeprecated('srcset'),
      src: new AttributeDeprecated('src'),
      media: new AttributeDeprecated('media'),
      sizes: new AttributeDeprecated('sizes'),
      type: new AttributeDeprecated('type'),
    }).render(standardVerificationMode)

    this.track = new Element('track', true, {
      kind: new AttributeList('kind', 'trackKind'),
      srclang: new AttributeList('srclang', 'isoCodes'),
      src: new AttributeString('src'),
      label: new AttributeString('label'),
      default: new AttributeBoolean('default'),
    }).render(standardVerificationMode)

    this.wbr = new Element('wbr', true, {}).render(standardVerificationMode)

    // Elements with only global attributes
    this.abbr = new Element('abbr', false, {}).render(standardVerificationMode)

    this.address = new Element('address', false, {}).render(
      standardVerificationMode
    )

    this.article = new Element('article', false, {}).render(
      standardVerificationMode
    )

    this.aside = new Element('aside', false, {}).render(
      standardVerificationMode
    )

    this.b = new Element('b', false, {}).render(standardVerificationMode)

    this.bdi = new Element('bdi', false, {}).render(standardVerificationMode)

    this.cite = new Element('cite', false, {}).render(standardVerificationMode)

    this.code = new Element('code', false, {}).render(standardVerificationMode)

    this.datalist = new Element('datalist', false, {}).render(
      standardVerificationMode
    )

    this.dfn = new Element('dfn', false, {}).render(standardVerificationMode)

    this.dl = new Element('dl', false, {}).render(standardVerificationMode)

    this.dt = new Element('dt', false, {}).render(standardVerificationMode)

    this.em = new Element('em', false, {}).render(standardVerificationMode)

    this.figcaption = new Element('figcaption', false, {}).render(
      standardVerificationMode
    )

    this.figure = new Element('figure', false, {}).render(
      standardVerificationMode
    )

    this.footer = new Element('footer', false, {}).render(
      standardVerificationMode
    )

    this.header = new Element('header', false, {}).render(
      standardVerificationMode
    )

    this.i = new Element('i', false, {}).render(standardVerificationMode)

    this.kbd = new Element('kbd', false, {}).render(standardVerificationMode)

    this.legend = new Element('legend', false, {}).render(
      standardVerificationMode
    )

    this.main = new Element('main', false, {}).render(standardVerificationMode)

    this.mark = new Element('mark', false, {}).render(standardVerificationMode)

    this.nav = new Element('nav', false, {}).render(standardVerificationMode)

    this.noscript = new Element('noscript', false, {}).render(
      standardVerificationMode
    )

    this.p = new Element('p', false, {}).render(standardVerificationMode)

    this.picture = new Element('picture', false, {}).render(
      standardVerificationMode
    )

    this.rp = new Element('rp', false, {}).render(standardVerificationMode)

    this.rt = new Element('rt', false, {}).render(standardVerificationMode)

    this.ruby = new Element('ruby', false, {}).render(standardVerificationMode)

    this.s = new Element('s', false, {}).render(standardVerificationMode)

    this.samp = new Element('samp', false, {}).render(standardVerificationMode)

    this.section = new Element('section', false, {}).render(
      standardVerificationMode
    )

    this.small = new Element('small', false, {}).render(
      standardVerificationMode
    )

    this.span = new Element('span', false, {}).render(standardVerificationMode)

    this.strong = new Element('strong', false, {}).render(
      standardVerificationMode
    )

    this.sub = new Element('sub', false, {}).render(standardVerificationMode)

    this.summary = new Element('summary', false, {}).render(
      standardVerificationMode
    )

    this.sup = new Element('sup', false, {}).render(standardVerificationMode)

    this.template = new Element('template', false, {}).render(
      standardVerificationMode
    )

    this.title = new Element('title', false, {}).render(
      standardVerificationMode
    )

    this.u = new Element('u', false, {}).render(standardVerificationMode)

    this.var = new Element('var', false, {}).render(standardVerificationMode)
    // // UI Components
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * All component classes inherit this properties.
 */
export class AnaComponent {
  constructor(
    public a: AnaElements,
    public config: AnaConfiguration,
    public classRoot: string
  ) {}
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * Function extendParameterDefaults
 * @param param 
 * @param defaultValues 
 * @returns 
 */
export function extendParameterDefaults<Type>(
  param: { [key: string]: Type },
  defaultValues: { [key: string]: Type }
): { [key: string]: Type } {
  Object.keys(defaultValues).forEach((defaultPropertyName: string) => {
    if(param[defaultPropertyName] === undefined) {
      param[defaultPropertyName] = defaultValues[defaultPropertyName]
    }
  })
  return param
}

