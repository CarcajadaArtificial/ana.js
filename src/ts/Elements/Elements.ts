import { AttList } from './Element/Attribute/AttList'
import { AttBoolean } from './Element/Attribute/AttBoolean'
import { AttDeprecated } from './Element/Attribute/AttDeprecated'
import { AttExperimental } from './Element/Attribute/AttExperimental'
import { AttInput } from './Element/Attribute/AttInput'
import { AttNonstandard } from './Element/Attribute/AttNonstandard'
import { AttString } from './Element/Attribute/AttString'
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
 * This dictionary is a compendium that contains instances of all of the `Element` and `Attribute` classes. Here lies what it means to be correct or incorrect in accordance to me. I studied every HTML reference I could find, it ended with this standard.
 * @module Ana/Render
 */
export function getElements(configuration: iAnaConfiguration): RenderDictionary {

  return {
    a: new Element('a', false, {
      rel: new AttList('rel', 'validLinkTypes', 'invalidLinkTypes').match,
      hreflang: new AttList('hreflang', 'isoCodes').match,
      download: new AttString('download').match,
      href: new AttString('href').match,
      ping: new AttString('ping').match,
      target: new AttString('target').match,
      referrerpolicy: new AttExperimental('referrerpolicy').match,
      charset: new AttDeprecated('charset').match,
      coords: new AttDeprecated('coords').match,
      name: new AttDeprecated('name').match,
      rev: new AttDeprecated('rev').match,
      shape: new AttDeprecated('shape').match,
    }).render(configuration),
  
    audio:new Element('audio', false, {
      crossorigin: new AttList('crossorigin', 'crossorigin').match,
      preload: new AttList('preload', 'preload').match,
      src: new AttString('src').match,
      autoplay: new AttBoolean('autoplay').match,
      controls: new AttBoolean('controls').match,
      loop: new AttBoolean('loop').match,
      muted: new AttBoolean('muted').match,
      disableRemotePlayback: new AttExperimental('disableRemotePlayback').match,
    }).render(configuration),
  
    blockquote:new Element('blockquote', false, {
      cite: new AttString('cite').match,
    }).render(configuration),
  
    body:new Element('body', false, {
      alink: new AttDeprecated('alink').match,
      background: new AttDeprecated('background').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      bottommargin: new AttDeprecated('bottommargin').match,
      leftmargin: new AttDeprecated('leftmargin').match,
      link: new AttDeprecated('link').match,
      rightmargin: new AttDeprecated('rightmargin').match,
      text: new AttDeprecated('text').match,
      topmargin: new AttDeprecated('topmargin').match,
      vlink: new AttDeprecated('vlink').match,
    }).render(configuration),
  
    button:new Element('button', false, {
      formenctype: new AttList('formenctype', 'encryption').match,
      formmethod: new AttList('formmethod', 'formmethod').match,
      type: new AttList('type', 'buttonType').match,
      name: new AttString('name').match,
      value: new AttString('value').match,
      form: new AttString('form').match,
      formaction: new AttString('formaction').match,
      formtarget: new AttString('formtarget').match,
      disabled: new AttBoolean('disabled').match,
      autofocus: new AttBoolean('autofocus').match,
      formnovalidate: new AttBoolean('formnovalidate').match,
      autocomplete: new AttExperimental('autocomplete').match,
    }).render(configuration),
  
    canvas:new Element('canvas', false, {
      height: new AttString('height').match,
      width: new AttString('width').match,
      'moz-opaque': new AttDeprecated('moz-opaque').match,
    }).render(configuration),
  
    caption:new Element('caption', false, {
      align: new AttDeprecated('align').match,
    }).render(configuration),
  
    colgroup:new Element('colgroup', false, {
      span: new AttString('span').match,
      align: new AttDeprecated('align').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      char: new AttDeprecated('char').match,
      charoff: new AttDeprecated('charoff').match,
      valign: new AttDeprecated('valign').match,
    }).render(configuration),
  
    data:new Element('data', false, {
      value: new AttString('value').match,
    }).render(configuration),
  
    dd:new Element('dd', false, {
      nowrap: new AttNonstandard('nowrap').match,
    }).render(configuration),
  
    del:new Element('del', false, {
      cite: new AttString('cite').match,
      datetime: new AttString('datetime').match,
    }).render(configuration),
  
    details:new Element('details', false, {
      open: new AttBoolean('open').match,
    }).render(configuration),
  
    dialog:new Element('dialog', false, {
      open: new AttBoolean('open').match,
      tabindex: new AttNonstandard('tabindex').match,
    }).render(configuration),
  
    div:new Element('div', false, {
      align: new AttDeprecated('align').match,
    }).render(configuration),
  
    fieldset:new Element('fieldset', false, {
      name: new AttString('name').match,
      form: new AttString('form').match,
      disabled: new AttBoolean('disabled').match,
    }).render(configuration),
  
    form:new Element('form', false, {
      autocomplete: new AttList('autocomplete', 'inputAutocomplete').match,
      method: new AttList('method', 'formmethod').match,
      enctype: new AttList('enctype', 'encryption').match,
      rel: new AttList('rel', 'validLinkTypes', 'invalidLinkTypes').match,
      name: new AttString('name').match,
      target: new AttString('target').match,
      action: new AttString('action').match,
      'accept-charset': new AttString('accept-charset').match,
      novalidate: new AttBoolean('novalidate').match,
    }).render(configuration),
  
    h1:new Element('h1', false, {
      align: new AttDeprecated('align').match,
    }).render(configuration),
  
    h2:new Element('h2', false, {
      align: new AttDeprecated('align').match,
    }).render(configuration),
  
    h3:new Element('h3', false, {
      align: new AttDeprecated('align').match,
    }).render(configuration),
  
    h4:new Element('h4', false, {
      align: new AttDeprecated('align').match,
    }).render(configuration),
  
    h5:new Element('h5', false, {
      align: new AttDeprecated('align').match,
    }).render(configuration),
  
    h6:new Element('h6', false, {
      align: new AttDeprecated('align').match,
    }).render(configuration),
  
    head:new Element('head', false, {
      profile: new AttDeprecated('profile').match,
    }).render(configuration),
  
    html:new Element('html', false, {
      xmlns: new AttString('xmlns').match,
      manifest: new AttDeprecated('manifest').match,
      version: new AttDeprecated('version').match,
    }).render(configuration),
  
    iframe:new Element('iframe', false, {
      sandbox: new AttList('sandbox', 'validSandbox', 'invalidSandbox').match,
      allow: new AttString('allow').match,
      name: new AttString('name').match,
      srcdoc: new AttString('srcdoc').match,
      src: new AttString('src').match,
      hieght: new AttString('hieght').match,
      width: new AttString('width').match,
      allowfullscreen: new AttBoolean('allowfullscreen').match,
      allowpaymentrequest: new AttBoolean('allowpaymentrequest').match,
      align: new AttDeprecated('align').match,
      frameborder: new AttDeprecated('frameborder').match,
      longdesc: new AttDeprecated('longdesc').match,
      marginheight: new AttDeprecated('marginheight').match,
      marginwidth: new AttDeprecated('marginwidth').match,
      scrolling: new AttDeprecated('scrolling').match,
      csp: new AttExperimental('csp').match,
      loading: new AttExperimental('loading').match,
      referrerpolicy: new AttExperimental('referrerpolicy').match,
      mozbrowser: new AttNonstandard('mozbrowser').match,
    }).render(configuration),
  
    ins:new Element('ins', false, {
      cite: new AttString('cite').match,
      datetime: new AttString('datetime').match,
    }).render(configuration),
  
    label:new Element('label', false, {
      for: new AttString('for').match,
    }).render(configuration),
  
    li:new Element('li', false, {
      value: new AttString('value').match,
      type: new AttDeprecated('type').match,
    }).render(configuration),
  
    map:new Element('map', false, {
      name: new AttString('name').match,
    }).render(configuration),
  
    meter:new Element('meter', false, {
      high: new AttString('high').match,
      low: new AttString('low').match,
      optimum: new AttString('optimum').match,
      value: new AttString('value').match,
      form: new AttString('form').match,
      max: new AttString('max').match,
      min: new AttString('min').match,
    }).render(configuration),
  
    object:new Element('object', false, {
      data: new AttString('data').match,
      name: new AttString('name').match,
      form: new AttString('form').match,
      type: new AttString('type').match,
      usemap: new AttString('usemap').match,
      height: new AttString('height').match,
      width: new AttString('width').match,
      archive: new AttDeprecated('archive').match,
      border: new AttDeprecated('border').match,
      classid: new AttDeprecated('classid').match,
      codebase: new AttDeprecated('codebase').match,
      codetype: new AttDeprecated('codetype').match,
      declare: new AttDeprecated('declare').match,
      standby: new AttDeprecated('standby').match,
    }).render(configuration),
  
    ol:new Element('ol', false, {
      type: new AttList('type', 'orderedListType').match,
      start: new AttString('start').match,
      reversed: new AttBoolean('reversed').match,
    }).render(configuration),
  
    optgroup:new Element('optgroup', false, {
      label: new AttString('label').match,
      disabled: new AttBoolean('disabled').match,
    }).render(configuration),
  
    option:new Element('option', false, {
      selected: new AttBoolean('selected').match,
      disabled: new AttBoolean('disabled').match,
      label: new AttString('label').match,
      value: new AttString('value').match,
    }).render(configuration),
  
    output:new Element('output', false, {
      for: new AttString('for').match,
      name: new AttString('name').match,
      form: new AttString('form').match,
    }).render(configuration),
  
    portal:new Element('portal', false, {
      src: new AttString('src').match,
    }).render(configuration),
  
    pre:new Element('pre', false, {
      cols: new AttDeprecated('cols').match,
      width: new AttDeprecated('width').match,
      wrap: new AttNonstandard('wrap').match,
    }).render(configuration),
  
    progress:new Element('progress', false, {
      value: new AttString('value').match,
      max: new AttString('max').match,
    }).render(configuration),
  
    q:new Element('q', false, {
      cite: new AttString('cite').match,
    }).render(configuration),
  
    script:new Element('script', false, {
      crossorigin: new AttList('crossorigin', 'crossorigin').match,
      src: new AttString('src').match,
      type: new AttString('type').match,
      nonce: new AttString('nonce').match,
      integrity: new AttString('integrity').match,
      async: new AttBoolean('async').match,
      defer: new AttBoolean('defer').match,
      nomodule: new AttBoolean('nomodule').match,
      referrerpolicy: new AttExperimental('referrerpolicy').match,
      charset: new AttDeprecated('charset').match,
      language: new AttDeprecated('language').match,
    }).render(configuration),
  
    select:new Element('select', false, {
      autocomplete: new AttList('autocomplete', 'inputAutocomplete').match,
      form: new AttString('form').match,
      name: new AttString('name').match,
      size: new AttString('size').match,
      autofocus: new AttBoolean('autofocus').match,
      disabled: new AttBoolean('disabled').match,
      multiple: new AttBoolean('multiple').match,
      required: new AttBoolean('required').match,
    }).render(configuration),
  
    slot:new Element('slot', false, {
      name: new AttString('name').match,
    }).render(configuration),
  
    style:new Element('style', false, {
      type: new AttList('type', 'typeStyle').match,
      media: new AttString('media').match,
      nonce: new AttString('nonce').match,
    }).render(configuration),
  
    table:new Element('table', false, {
      align: new AttDeprecated('align').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      border: new AttDeprecated('border').match,
      cellpadding: new AttDeprecated('cellpadding').match,
      cellspacing: new AttDeprecated('cellspacing').match,
      frame: new AttDeprecated('frame').match,
      rules: new AttDeprecated('rules').match,
      summary: new AttDeprecated('summary').match,
      width: new AttDeprecated('width').match,
    }).render(configuration),
  
    tbody:new Element('tbody', false, {
      align: new AttDeprecated('align').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      char: new AttDeprecated('char').match,
      charoff: new AttDeprecated('charoff').match,
      valign: new AttDeprecated('valign').match,
    }).render(configuration),
  
    td:new Element('td', false, {
      colspan: new AttString('colspan').match,
      headers: new AttString('headers').match,
      rowspan: new AttString('rowspan').match,
      align: new AttDeprecated('align').match,
      axis: new AttDeprecated('axis').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      char: new AttDeprecated('char').match,
      charoff: new AttDeprecated('charoff').match,
      height: new AttDeprecated('height').match,
      scope: new AttDeprecated('scope').match,
      valign: new AttDeprecated('valign').match,
      width: new AttDeprecated('width').match,
    }).render(configuration),
  
    textarea:new Element('textarea', false, {
      autocomplete: new AttList('autocomplete', 'inputAutocomplete').match,
      spellcheck: new AttList('spellcheck', 'softBoolean').match,
      wrap: new AttList('wrap', 'wrap').match,
      cols: new AttString('cols').match,
      form: new AttString('form').match,
      maxlength: new AttString('maxlength').match,
      name: new AttString('name').match,
      placeholder: new AttString('placeholder').match,
      rows: new AttString('rows').match,
      disabled: new AttBoolean('disabled').match,
      readonly: new AttBoolean('readonly').match,
      required: new AttBoolean('required').match,
      autocapitalize: new AttDeprecated('autocapitalize').match,
      autocorrect: new AttDeprecated('autocorrect').match,
    }).render(configuration),
  
    tfoot:new Element('tfoot', false, {
      align: new AttDeprecated('align').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      char: new AttDeprecated('char').match,
      charoff: new AttDeprecated('charoff').match,
      valign: new AttDeprecated('valign').match,
    }).render(configuration),
  
    th:new Element('th', false, {
      abbr: new AttString('abbr').match,
      colspan: new AttString('colspan').match,
      headers: new AttString('headers').match,
      rowspan: new AttString('rowspan').match,
      align: new AttDeprecated('align').match,
      axis: new AttDeprecated('axis').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      char: new AttDeprecated('char').match,
      charoff: new AttDeprecated('charoff').match,
      height: new AttDeprecated('height').match,
      scope: new AttDeprecated('scope').match,
      valign: new AttDeprecated('valign').match,
      width: new AttDeprecated('width').match,
    }).render(configuration),
  
    thead:new Element('thead', false, {
      align: new AttDeprecated('align').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      char: new AttDeprecated('char').match,
      charoff: new AttDeprecated('charoff').match,
      valign: new AttDeprecated('valign').match,
    }).render(configuration),
  
    time:new Element('time', false, {
      datetime: new AttString('datetime').match,
    }).render(configuration),
  
    tr:new Element('tr', false, {
      align: new AttDeprecated('align').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      char: new AttDeprecated('char').match,
      charoff: new AttDeprecated('charoff').match,
      valign: new AttDeprecated('valign').match,
    }).render(configuration),
  
    ul:new Element('ul', false, {
      compact: new AttDeprecated('compact').match,
      type: new AttDeprecated('type').match,
    }).render(configuration),
  
    video:new Element('video', false, {
      preload: new AttList('preload', 'preload').match,
      crossorigin: new AttList('crossorigin', 'crossorigin').match,
      poster: new AttString('poster').match,
      src: new AttString('src').match,
      height: new AttString('height').match,
      width: new AttString('width').match,
      loop: new AttBoolean('loop').match,
      muted: new AttBoolean('muted').match,
      playsinline: new AttBoolean('playsinline').match,
      autoplay: new AttBoolean('autoplay').match,
      controls: new AttBoolean('controls').match,
    }).render(configuration),
  
    // Empty Elements
  
    area:new Element('area', true, {
      rel: new AttList('rel', 'validLinkTypes', 'invalidLinkTypes').match,
      hreflang: new AttList('hreflang', 'isoCodes').match,
      shape: new AttList('shape', 'areaShape').match,
      coords: new AttString('coords').match,
      download: new AttString('download').match,
      href: new AttString('href').match,
      ping: new AttString('ping').match,
      target: new AttString('target').match,
      alt: new AttString('alt').match,
    }).render(configuration),
  
    base:new Element('base', true, {
      href: new AttString('href').match,
      target: new AttString('target').match,
    }).render(configuration),
  
    br:new Element('br', true, {
      clear: new AttDeprecated('clear').match,
    }).render(configuration),
  
    col:new Element('col', true, {
      span: new AttString('span').match,
      align: new AttDeprecated('align').match,
      bgcolor: new AttDeprecated('bgcolor').match,
      char: new AttDeprecated('char').match,
      charoff: new AttDeprecated('charoff').match,
      valign: new AttDeprecated('valign').match,
      width: new AttDeprecated('width').match,
    }).render(configuration),
  
    embed:new Element('embed', true, {
      src: new AttString('src').match,
      height: new AttString('height').match,
      width: new AttString('width').match,
      type: new AttString('type').match,
    }).render(configuration),
  
    hr:new Element('hr', true, {
      align: new AttDeprecated('align').match,
      noshade: new AttDeprecated('noshade').match,
      size: new AttDeprecated('size').match,
      width: new AttDeprecated('width').match,
      color: new AttNonstandard('color').match,
    }).render(configuration),
  
    img:new Element('img', true, {
      crossorigin: new AttList('crossorigin', 'crossorigin').match,
      decoding: new AttList('decoding', 'decoding').match,
      srcset: new AttString('srcset').match,
      src: new AttString('src').match,
      alt: new AttString('alt').match,
      height: new AttString('height').match,
      sizes: new AttString('sizes').match,
      width: new AttString('width').match,
      usemap: new AttString('usemap').match,
      ismap: new AttBoolean('ismap').match,
    }).render(configuration),
  
    input:new Element('input', true, {
      autocomplete: new AttList('autocomplete', 'inputAutocomplete').match,
      type: new AttList('type', 'inputType', 'invalidInputType').match,
      form: new AttString('form').match,
      name: new AttString('name').match,
      value: new AttString('value').match,
      autofocus: new AttBoolean('autofocus').match,
      disabled: new AttBoolean('disabled').match,
      accept: new AttInput('accept', ['file'], 'string').match,
      alt: new AttInput('alt', ['file'], 'string').match,
      capture: new AttInput('capture', ['file'], 'string').match,
      // prettier-ignore
      checked: new AttInput('checked', ['radio', 'checkbox'], 'boolean').match,
      dirname: new AttInput('dirname', ['text', 'search'], 'string').match,
      // prettier-ignore
      formaction: new AttInput('formaction', ['image', 'submit'], 'string').match,
      // prettier-ignore
      formenctype: new AttInput('formenctype', ['image', 'submit'], 'string').match,
      // prettier-ignore
      formmethod: new AttInput('formmethod', ['image', 'submit'], 'string').match,
      // prettier-ignore
      formnovalidate: new AttInput('formnovalidate', ['image', 'submit'], 'boolean').match,
      // prettier-ignore
      formtarget: new AttInput('formtarget', ['image', 'submit'], 'string').match,
      // prettier-ignore
      list: new AttInput('list', [ 'text', 'search', 'url', 'tel', 'email', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'range', 'color' ], 'string').match,
      // prettier-ignore
      max: new AttInput('max', ['date', 'month', 'week', 'time', 'datetime-local', 'number', 'range'], 'string').match,
      // prettier-ignore
      maxlength: new AttInput('maxlength', ['password', 'search', 'tel', 'text', 'url'], 'string').match,
      // prettier-ignore
      min: new AttInput('min', ['date', 'month', 'week', 'time', 'datetime-local', 'number', 'range'], 'string').match,
      // prettier-ignore
      minlength: new AttInput('minlength', ['password', 'search', 'tel', 'text', 'url'], 'string').match,
      multiple: new AttInput('multiple', ['email', 'file'], 'boolean').match,
      // prettier-ignore
      pattern: new AttInput('pattern', ['password', 'text', 'tel'], 'string').match,
      // prettier-ignore
      placeholder: new AttInput('placeholder', ['password', 'search', 'text', 'tel', 'url'], 'string').match,
      // prettier-ignore
      readonly: new AttInput('readonly', [ 'text', 'search', 'url', 'tel', 'email', 'password', 'date', 'month', 'week', 'time', 'datetime-local', 'number' ], 'boolean').match,
      // prettier-ignore
      required: new AttInput('required', [ 'text', 'search', 'url', 'tel', 'email', 'password', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'checkbox', 'radio', 'file' ], 'boolean').match,
      src: new AttInput('src', ['image'], 'string').match,
      // prettier-ignore
      step: new AttInput('step', ['date', 'month', 'week', 'time', 'datetime-local', 'number', 'range'], 'string').match,
    }).render(configuration),
  
    link:new Element('link', true, {
      rel: new AttList('rel', 'validLinkTypes', 'invalidLinkTypes').match,
      as: new AttList('as', 'linkAs').match,
      crossorigin: new AttList('crossorigin', 'crossorigin').match,
      hreflang: new AttList('hreflang', 'isoCodes').match,
      href: new AttString('href').match,
      imagesizes: new AttString('imagesizes').match,
      imagesrcset: new AttString('imagesrcset').match,
      media: new AttString('media').match,
      type: new AttString('type').match,
      disabled: new AttBoolean('disabled').match,
    }).render(configuration),
  
    meta:new Element('meta', true, {
      'http-equiv': new AttList('http-equiv', 'httpEquiv').match,
      content: new AttString('content').match,
      name: new AttString('name').match,
      charset: new AttString('charset').match,
    }).render(configuration),
  
    param:new Element('param', true, {
      name: new AttString('name').match,
      value: new AttString('value').match,
      type: new AttDeprecated('type').match,
      valuetype: new AttDeprecated('valuetype').match,
    }).render(configuration),
  
    source:new Element('source', true, {
      srcset: new AttDeprecated('srcset').match,
      src: new AttDeprecated('src').match,
      media: new AttDeprecated('media').match,
      sizes: new AttDeprecated('sizes').match,
      type: new AttDeprecated('type').match,
    }).render(configuration),
  
    track:new Element('track', true, {
      kind: new AttList('kind', 'trackKind').match,
      srclang: new AttList('srclang', 'isoCodes').match,
      src: new AttString('src').match,
      label: new AttString('label').match,
      default: new AttBoolean('default').match,
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