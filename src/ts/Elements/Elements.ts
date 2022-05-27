import { AttributeList } from './Element/Attribute/AttributeList/AttributeList'
import { AttributeBoolean } from './Element/Attribute/AttributeBoolean/AttributeBoolean'
import { AttributeDeprecated } from './Element/Attribute/AttributeDeprecated/AttributeDeprecated'
import { AttributeExperimental } from './Element/Attribute/AttributeExperimental/AttributeExperimental'
import { AttributeInput } from './Element/Attribute/AttributeInput/AttributeInput'
import { AttributeNonstandard } from './Element/Attribute/AttributeNonstandard/AttributeNonstandard'
import { AttributeString } from './Element/Attribute/AttributeString/AttributeString'
import { Element } from './Element/Element'
import { iAnaConfiguration } from '../Ana/Ana.interface'
import { RenderDictionary } from '../types'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
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

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This class is in charge of adding all HTMLELement render methods to the `Ana` class.
 */
export function getElements(configuration: iAnaConfiguration): RenderDictionary {

  return {
    a: new Element('a', false, {
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
    }).render(configuration),
  
    audio:new Element('audio', false, {
      crossorigin: new AttributeList('crossorigin', 'crossorigin'),
      preload: new AttributeList('preload', 'preload'),
      src: new AttributeString('src'),
      autoplay: new AttributeBoolean('autoplay'),
      controls: new AttributeBoolean('controls'),
      loop: new AttributeBoolean('loop'),
      muted: new AttributeBoolean('muted'),
      disableRemotePlayback: new AttributeExperimental('disableRemotePlayback'),
    }).render(configuration),
  
    blockquote:new Element('blockquote', false, {
      cite: new AttributeString('cite'),
    }).render(configuration),
  
    body:new Element('body', false, {
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
    }).render(configuration),
  
    button:new Element('button', false, {
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
    }).render(configuration),
  
    canvas:new Element('canvas', false, {
      height: new AttributeString('height'),
      width: new AttributeString('width'),
      'moz-opaque': new AttributeDeprecated('moz-opaque'),
    }).render(configuration),
  
    caption:new Element('caption', false, {
      align: new AttributeDeprecated('align'),
    }).render(configuration),
  
    colgroup:new Element('colgroup', false, {
      span: new AttributeString('span'),
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(configuration),
  
    data:new Element('data', false, {
      value: new AttributeString('value'),
    }).render(configuration),
  
    dd:new Element('dd', false, {
      nowrap: new AttributeNonstandard('nowrap'),
    }).render(configuration),
  
    del:new Element('del', false, {
      cite: new AttributeString('cite'),
      datetime: new AttributeString('datetime'),
    }).render(configuration),
  
    details:new Element('details', false, {
      open: new AttributeBoolean('open'),
    }).render(configuration),
  
    dialog:new Element('dialog', false, {
      open: new AttributeBoolean('open'),
      tabindex: new AttributeNonstandard('tabindex'),
    }).render(configuration),
  
    div:new Element('div', false, {
      align: new AttributeDeprecated('align'),
    }).render(configuration),
  
    fieldset:new Element('fieldset', false, {
      name: new AttributeString('name'),
      form: new AttributeString('form'),
      disabled: new AttributeBoolean('disabled'),
    }).render(configuration),
  
    form:new Element('form', false, {
      autocomplete: new AttributeList('autocomplete', 'inputAutocomplete'),
      method: new AttributeList('method', 'formmethod'),
      enctype: new AttributeList('enctype', 'encryption'),
      rel: new AttributeList('rel', 'validLinkTypes', 'invalidLinkTypes'),
      name: new AttributeString('name'),
      target: new AttributeString('target'),
      action: new AttributeString('action'),
      'accept-charset': new AttributeString('accept-charset'),
      novalidate: new AttributeBoolean('novalidate'),
    }).render(configuration),
  
    h1:new Element('h1', false, {
      align: new AttributeDeprecated('align'),
    }).render(configuration),
  
    h2:new Element('h2', false, {
      align: new AttributeDeprecated('align'),
    }).render(configuration),
  
    h3:new Element('h3', false, {
      align: new AttributeDeprecated('align'),
    }).render(configuration),
  
    h4:new Element('h4', false, {
      align: new AttributeDeprecated('align'),
    }).render(configuration),
  
    h5:new Element('h5', false, {
      align: new AttributeDeprecated('align'),
    }).render(configuration),
  
    h6:new Element('h6', false, {
      align: new AttributeDeprecated('align'),
    }).render(configuration),
  
    head:new Element('head', false, {
      profile: new AttributeDeprecated('profile'),
    }).render(configuration),
  
    html:new Element('html', false, {
      xmlns: new AttributeString('xmlns'),
      manifest: new AttributeDeprecated('manifest'),
      version: new AttributeDeprecated('version'),
    }).render(configuration),
  
    iframe:new Element('iframe', false, {
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
    }).render(configuration),
  
    ins:new Element('ins', false, {
      cite: new AttributeString('cite'),
      datetime: new AttributeString('datetime'),
    }).render(configuration),
  
    label:new Element('label', false, {
      for: new AttributeString('for'),
    }).render(configuration),
  
    li:new Element('li', false, {
      value: new AttributeString('value'),
      type: new AttributeDeprecated('type'),
    }).render(configuration),
  
    map:new Element('map', false, {
      name: new AttributeString('name'),
    }).render(configuration),
  
    meter:new Element('meter', false, {
      high: new AttributeString('high'),
      low: new AttributeString('low'),
      optimum: new AttributeString('optimum'),
      value: new AttributeString('value'),
      form: new AttributeString('form'),
      max: new AttributeString('max'),
      min: new AttributeString('min'),
    }).render(configuration),
  
    object:new Element('object', false, {
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
    }).render(configuration),
  
    ol:new Element('ol', false, {
      type: new AttributeList('type', 'orderedListType'),
      start: new AttributeString('start'),
      reversed: new AttributeBoolean('reversed'),
    }).render(configuration),
  
    optgroup:new Element('optgroup', false, {
      label: new AttributeString('label'),
      disabled: new AttributeBoolean('disabled'),
    }).render(configuration),
  
    option:new Element('option', false, {
      selected: new AttributeBoolean('selected'),
      disabled: new AttributeBoolean('disabled'),
      label: new AttributeString('label'),
      value: new AttributeString('value'),
    }).render(configuration),
  
    output:new Element('output', false, {
      for: new AttributeString('for'),
      name: new AttributeString('name'),
      form: new AttributeString('form'),
    }).render(configuration),
  
    portal:new Element('portal', false, {
      src: new AttributeString('src'),
    }).render(configuration),
  
    pre:new Element('pre', false, {
      cols: new AttributeDeprecated('cols'),
      width: new AttributeDeprecated('width'),
      wrap: new AttributeNonstandard('wrap'),
    }).render(configuration),
  
    progress:new Element('progress', false, {
      value: new AttributeString('value'),
      max: new AttributeString('max'),
    }).render(configuration),
  
    q:new Element('q', false, {
      cite: new AttributeString('cite'),
    }).render(configuration),
  
    script:new Element('script', false, {
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
    }).render(configuration),
  
    select:new Element('select', false, {
      autocomplete: new AttributeList('autocomplete', 'inputAutocomplete'),
      form: new AttributeString('form'),
      name: new AttributeString('name'),
      size: new AttributeString('size'),
      autofocus: new AttributeBoolean('autofocus'),
      disabled: new AttributeBoolean('disabled'),
      multiple: new AttributeBoolean('multiple'),
      required: new AttributeBoolean('required'),
    }).render(configuration),
  
    slot:new Element('slot', false, {
      name: new AttributeString('name'),
    }).render(configuration),
  
    style:new Element('style', false, {
      type: new AttributeList('type', 'typeStyle'),
      media: new AttributeString('media'),
      nonce: new AttributeString('nonce'),
    }).render(configuration),
  
    table:new Element('table', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      border: new AttributeDeprecated('border'),
      cellpadding: new AttributeDeprecated('cellpadding'),
      cellspacing: new AttributeDeprecated('cellspacing'),
      frame: new AttributeDeprecated('frame'),
      rules: new AttributeDeprecated('rules'),
      summary: new AttributeDeprecated('summary'),
      width: new AttributeDeprecated('width'),
    }).render(configuration),
  
    tbody:new Element('tbody', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(configuration),
  
    td:new Element('td', false, {
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
    }).render(configuration),
  
    textarea:new Element('textarea', false, {
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
    }).render(configuration),
  
    tfoot:new Element('tfoot', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(configuration),
  
    th:new Element('th', false, {
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
    }).render(configuration),
  
    thead:new Element('thead', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(configuration),
  
    time:new Element('time', false, {
      datetime: new AttributeString('datetime'),
    }).render(configuration),
  
    tr:new Element('tr', false, {
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
    }).render(configuration),
  
    ul:new Element('ul', false, {
      compact: new AttributeDeprecated('compact'),
      type: new AttributeDeprecated('type'),
    }).render(configuration),
  
    video:new Element('video', false, {
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
    }).render(configuration),
  
    // Empty Elements
  
    area:new Element('area', true, {
      rel: new AttributeList('rel', 'validLinkTypes', 'invalidLinkTypes'),
      hreflang: new AttributeList('hreflang', 'isoCodes'),
      shape: new AttributeList('shape', 'areaShape'),
      coords: new AttributeString('coords'),
      download: new AttributeString('download'),
      href: new AttributeString('href'),
      ping: new AttributeString('ping'),
      target: new AttributeString('target'),
      alt: new AttributeString('alt'),
    }).render(configuration),
  
    base:new Element('base', true, {
      href: new AttributeString('href'),
      target: new AttributeString('target'),
    }).render(configuration),
  
    br:new Element('br', true, {
      clear: new AttributeDeprecated('clear'),
    }).render(configuration),
  
    col:new Element('col', true, {
      span: new AttributeString('span'),
      align: new AttributeDeprecated('align'),
      bgcolor: new AttributeDeprecated('bgcolor'),
      char: new AttributeDeprecated('char'),
      charoff: new AttributeDeprecated('charoff'),
      valign: new AttributeDeprecated('valign'),
      width: new AttributeDeprecated('width'),
    }).render(configuration),
  
    embed:new Element('embed', true, {
      src: new AttributeString('src'),
      height: new AttributeString('height'),
      width: new AttributeString('width'),
      type: new AttributeString('type'),
    }).render(configuration),
  
    hr:new Element('hr', true, {
      align: new AttributeDeprecated('align'),
      noshade: new AttributeDeprecated('noshade'),
      size: new AttributeDeprecated('size'),
      width: new AttributeDeprecated('width'),
      color: new AttributeNonstandard('color'),
    }).render(configuration),
  
    img:new Element('img', true, {
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
    }).render(configuration),
  
    input:new Element('input', true, {
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
    }).render(configuration),
  
    link:new Element('link', true, {
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
    }).render(configuration),
  
    meta:new Element('meta', true, {
      'http-equiv': new AttributeList('http-equiv', 'httpEquiv'),
      content: new AttributeString('content'),
      name: new AttributeString('name'),
      charset: new AttributeString('charset'),
    }).render(configuration),
  
    param:new Element('param', true, {
      name: new AttributeString('name'),
      value: new AttributeString('value'),
      type: new AttributeDeprecated('type'),
      valuetype: new AttributeDeprecated('valuetype'),
    }).render(configuration),
  
    source:new Element('source', true, {
      srcset: new AttributeDeprecated('srcset'),
      src: new AttributeDeprecated('src'),
      media: new AttributeDeprecated('media'),
      sizes: new AttributeDeprecated('sizes'),
      type: new AttributeDeprecated('type'),
    }).render(configuration),
  
    track:new Element('track', true, {
      kind: new AttributeList('kind', 'trackKind'),
      srclang: new AttributeList('srclang', 'isoCodes'),
      src: new AttributeString('src'),
      label: new AttributeString('label'),
      default: new AttributeBoolean('default'),
    }).render(configuration),
  
    wbr:new Element('wbr', true, {}).render(configuration),
  
    // Elements with only global attributes
    abbr:new Element('abbr', false, {}).render(configuration),
  
    address:new Element('address', false, {}).render(configuration),
  
    article:new Element('article', false, {}).render(configuration),
  
    aside:new Element('aside', false, {}).render(configuration),
  
    b:new Element('b', false, {}).render(configuration),
  
    bdi:new Element('bdi', false, {}).render(configuration),
  
    cite:new Element('cite', false, {}).render(configuration),
  
    code:new Element('code', false, {}).render(configuration),
  
    datalist:new Element('datalist', false, {}).render(configuration),
  
    dfn:new Element('dfn', false, {}).render(configuration),
  
    dl:new Element('dl', false, {}).render(configuration),
  
    dt:new Element('dt', false, {}).render(configuration),
  
    em:new Element('em', false, {}).render(configuration),
  
    figcaption:new Element('figcaption', false, {}).render(configuration),
  
    figure:new Element('figure', false, {}).render(configuration),
  
    footer:new Element('footer', false, {}).render(configuration),
  
    header:new Element('header', false, {}).render(configuration),
  
    i:new Element('i', false, {}).render(configuration),
  
    kbd:new Element('kbd', false, {}).render(configuration),
  
    legend:new Element('legend', false, {}).render(configuration),
  
    main:new Element('main', false, {}).render(configuration),
  
    mark:new Element('mark', false, {}).render(configuration),
  
    nav:new Element('nav', false, {}).render(configuration),
  
    noscript:new Element('noscript', false, {}).render(configuration),
  
    p:new Element('p', false, {}).render(configuration),
  
    picture:new Element('picture', false, {}).render(configuration),
  
    rp:new Element('rp', false, {}).render(configuration),
  
    rt:new Element('rt', false, {}).render(configuration),
  
    ruby:new Element('ruby', false, {}).render(configuration),
  
    s:new Element('s', false, {}).render(configuration),
  
    samp:new Element('samp', false, {}).render(configuration),
  
    section:new Element('section', false, {}).render(configuration),
  
    small:new Element('small', false, {}).render(configuration),
  
    span:new Element('span', false, {}).render(configuration),
  
    strong:new Element('strong', false, {}).render(configuration),
  
    sub:new Element('sub', false, {}).render(configuration),
  
    summary:new Element('summary', false, {}).render(configuration),
  
    sup:new Element('sup', false, {}).render(configuration),
  
    template:new Element('template', false, {}).render(configuration),
  
    title:new Element('title', false, {}).render(configuration),
  
    u:new Element('u', false, {}).render(configuration),
  
    var:new Element('var', false, {}).render(configuration)
  }
}

export const aElem = new Element('a', false, {
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
}).render