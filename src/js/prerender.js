//    ____                              _           
//   |  _ \ _ __ ___ _ __ ___ _ __   __| | ___ _ __ 
//   | |_) | '__/ _ \ '__/ _ \ '_ \ / _` |/ _ \ '__|
//   |  __/| | |  __/ | |  __/ | | | (_| |  __/ |   
//   |_|   |_|  \___|_|  \___|_| |_|\__,_|\___|_|   
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This array contains guidelines for all standard HTMLElements.
 * Element guidelines:
 * * **name** The name of the element.
 * * **attr** A dictionary of attribute guidelines. The keys are the names of the attribues.
 * * **isEmpty** True if this element cannot have any type of children appended.
 * * **_experimentalAttribues** An array of experimental attribute names.
 * * **_deprecatedAttribues** An array of deprecated attribute names.
 * * **_nonStandardAttributes** An array of deprecated non-standard names.
 * Attribute guidelines:
 * * **match** correct value for the attribute, can be a list or data type, or something similar
 * * **_isMultivalid** There is a set of invalid and valid values for this attribute.
 * * **invalid** A list of invalid values for the attribute, must be multivalid.
 * * **_isDependant** The validity of the attribute's value depends on the value of another attribute of the same element.
 * * **attributeName** The name of the attribute it depends on.
 * * **attributeValue** The value of the attribute that must match for the dependant to be correct.
 */
const htmlElements = [
  {
    name: 'a',
    attr: {
      rel: {
        _isMultivalid: true,
        match: MATCH.list(ATTRIBUTE_VALUES.validLinkTypes),
        invalid: ATTRIBUTE_VALUES.invalidLinkTypes,
      },
      download: { match: MATCH.string },
      href: { match: MATCH.url }, // Test URL
      hreflang: { match: MATCH.list(ATTRIBUTE_VALUES.isoCodes) },
      ping: { match: MATCH.string },
      target: { match: MATCH.string },
    },
    _experimentalAttributes: ['referrerpolicy'],
    _deprecatedAttributes: ['charset', 'coords', 'name', 'rev', 'shape'],
  },
  { name: 'abbr' },
  { name: 'address' },
  {
    name: 'area',
    isEmpty: true,
    attr: {
      rel: {
        _isMultivalid: true,
        match: MATCH.list(ATTRIBUTE_VALUES.validLinkTypes),
        invalid: ATTRIBUTE_VALUES.invalidLinkTypes,
      },
      coords: { match: MATCH.string },
      download: { match: MATCH.string },
      href: { match: MATCH.url }, // Test URL
      hreflang: { match: MATCH.list(ATTRIBUTE_VALUES.isoCodes) },
      ping: { match: MATCH.string },
      target: { match: MATCH.string },
      alt: { match: MATCH.string },
      shape: { match: MATCH.list(ATTRIBUTE_VALUES.areaShape) },
    },
    _experimentalAttributes: ['referrerpolicy'],
    _deprecatedAttributes: [
      'accesskey',
      'hreflang',
      'name',
      'nohref',
      'tabindex',
      'type',
    ],
  },
  { name: 'article' },
  { name: 'aside' },
  {
    name: 'audio',
    attr: {
      autoplay: { match: MATCH.hardBoolean },
      controls: { match: MATCH.hardBoolean },
      crossorigin: {
        match: MATCH.list(ATTRIBUTE_VALUES.crossorigin),
      },
      loop: { match: MATCH.hardBoolean },
      muted: { match: MATCH.hardBoolean },
      preload: { match: MATCH.list(ATTRIBUTE_VALUES.preload) },
      src: { match: MATCH.url }, // Test URL
    },
    _experimentalAttributes: ['disableRemotePlayback'],
  },
  { name: 'b' },
  {
    name: 'base',
    isEmpty: true,
    attr: {
      href: { match: MATCH.url }, // Test URL
      target: { match: MATCH.string },
    },
  },
  { name: 'bdi' },
  {
    name: 'bdo',
    attr: { dir: { match: MATCH.list(ATTRIBUTE_VALUES.bdoDir) } },
  },
  {
    name: 'blockquote',
    attr: {
      cite: { match: MATCH.url }, // Test URL
    },
  },
  {
    name: 'body',
    _deprecatedAttributes: [
      'alink',
      'background',
      'bgcolor',
      'bottommargin',
      'leftmargin',
      'link',
      'rightmargin',
      'text',
      'topmargin',
      'vlink',
    ],
  },
  {
    name: 'br',
    isEmpty: true,
    _deprecatedAttributes: ['clear'],
  },
  {
    name: 'button', // Next attributes
    attr: {
      disabled: { match: MATCH.hardBoolean },
      name: { match: MATCH.string },
      value: { match: MATCH.string },
      autofocus: { match: MATCH.hardBoolean },
      form: { match: MATCH.string },
      formaction: { match: MATCH.url }, // Test URL
      formenctype: {
        match: MATCH.list(ATTRIBUTE_VALUES.encryption),
      },
      formmethod: { match: MATCH.list(ATTRIBUTE_VALUES.formmethod) },
      formnovalidate: { match: MATCH.hardBoolean },
      formtarget: { match: MATCH.string },
      type: { match: MATCH.list(ATTRIBUTE_VALUES.buttonType) },
    },
    _experimentalAttributes: ['autocomplete'],
  },
  {
    name: 'canvas',
    attr: {
      height: { match: MATCH.number },
      width: { match: MATCH.number },
    },
    _deprecatedAttributes: ['moz-opaque'],
  },
  { name: 'caption', _deprecatedAttributes: ['align'] },
  { name: 'cite' },
  { name: 'code' },
  {
    name: 'col',
    isEmpty: true,
    attr: { span: { match: MATCH.number } },
    _deprecatedAttributes: [
      'align',
      'bgcolor',
      'char',
      'charoff',
      'valign',
      'width',
    ],
  },
  {
    name: 'colgroup',
    attr: { span: { match: MATCH.number } },
    _deprecatedAttributes: ['align', 'bgcolor', 'char', 'charoff', 'valign'],
  },
  { name: 'data', attr: { value: { match: MATCH.string } } },
  { name: 'datalist' },
  { name: 'dd', _nonStandardAttributes: ['nowrap'] },
  {
    name: 'del',
    attr: {
      cite: { match: MATCH.url }, // Test URL
      datetime: { match: MATCH.string },
    },
  },
  { name: 'details', attr: { open: { match: MATCH.hardBoolean } } },
  { name: 'dfn' },
  {
    name: 'dialog',
    attr: {
      open: { match: MATCH.hardBoolean },
    },
    _nonStandardAttributes: ['tabindex'],
  },
  { name: 'div', _deprecatedAttributes: ['align'] },
  { name: 'dl' },
  { name: 'dt' },
  { name: 'em' },
  {
    name: 'embed',
    isEmpty: true,
    attr: {
      src: { match: MATCH.url }, // Test URL
      height: { match: MATCH.number },
      width: { match: MATCH.number },
      type: { match: MATCH.string },
    },
  },
  {
    name: 'fieldset',
    attr: {
      disabled: { match: MATCH.hardBoolean },
      name: { match: MATCH.string },
      form: { match: MATCH.string },
    },
  },
  { name: 'figcaption' },
  { name: 'figure' },
  { name: 'footer' },
  {
    name: 'form',
    attr: {
      autocomplete: {
        _isStringlist: true,
        separatorCharacter: [' '],
        match: MATCH.list(ATTRIBUTE_VALUES.inputAutocomplete),
      },
      rel: {
        _isMultivalid: true,
        match: MATCH.list(ATTRIBUTE_VALUES.validLinkTypes),
        invalid: ATTRIBUTE_VALUES.invalidLinkTypes,
      },
      method: { match: MATCH.list(ATTRIBUTE_VALUES.formmethod) },
      enctype: { match: MATCH.list(ATTRIBUTE_VALUES.encryption) },
      name: { match: MATCH.string },
      novalidate: { match: MATCH.hardBoolean },
      target: { match: MATCH.string },
      action: { match: MATCH.url }, // Test URL
      'accept-charset': { match: MATCH.string },
    },
    _deprecatedAttributes: ['accept'],
    _experimentalAttributes: ['autocapitalize'],
  },
  { name: 'h1', _deprecatedAttributes: ['align'] },
  { name: 'h2', _deprecatedAttributes: ['align'] },
  { name: 'h3', _deprecatedAttributes: ['align'] },
  { name: 'h4', _deprecatedAttributes: ['align'] },
  { name: 'h5', _deprecatedAttributes: ['align'] },
  { name: 'h6', _deprecatedAttributes: ['align'] },
  { name: 'head', _deprecatedAttributes: ['profile'] },
  { name: 'header' },
  { name: 'hgroup', _isDeprecated: true },
  {
    name: 'hr',
    isEmpty: true,
    _deprecatedAttributes: ['align', 'noshade', 'size', 'width'],
    _nonStandardAttributes: ['color'],
  },
  {
    name: 'html',
    attr: { xmlns: { match: MATCH.string } },
    _deprecatedAttributes: ['manifest', 'version'],
  },
  { name: 'i' },
  {
    name: 'iframe',
    attr: {
      sandbox: {
        _isMultivalid: true,
        match: MATCH.list(ATTRIBUTE_VALUES.validSandbox),
        invalid: ATTRIBUTE_VALUES.invalidSandbox,
      },
      allow: { match: MATCH.string },
      allowfullscreen: { match: MATCH.hardBoolean },
      allowpaymentrequest: { match: MATCH.hardBoolean },
      name: { match: MATCH.string },
      srcdoc: { match: MATCH.string },
      src: { match: MATCH.url }, // Test URL
      hieght: { match: MATCH.number },
      width: { match: MATCH.number },
    },
    _deprecatedAttributes: [
      'align',
      'frameborder',
      'longdesc',
      'marginheight',
      'marginwidth',
      'scrolling',
    ],
    _experimentalAttributes: ['csp', 'loading', 'referrerpolicy'],
    _nonStandardAttributes: ['mozbrowser'],
  },
  {
    name: 'img',
    isEmpty: true,
    attr: {
      crossorigin: {
        match: MATCH.list(ATTRIBUTE_VALUES.crossorigin),
      },
      decoding: { match: MATCH.list(ATTRIBUTE_VALUES.decoding) },
      ismap: { match: MATCH.hardBoolean },
      srcset: { match: MATCH.string },
      src: { match: MATCH.url }, // Test URL
      alt: { match: MATCH.string },
      height: { match: MATCH.number },
      sizes: { match: MATCH.string },
      width: { match: MATCH.number },
      usemap: { match: MATCH.string },
    },
    _experimentalAttributes: ['loading', 'referrerpolicy'],
    _deprecatedAttributes: [
      'intrinsicsize',
      'align',
      'border',
      'hspace',
      'longdesc',
      'name',
      'vspace',
    ],
  },
  {
    name: 'input',
    isEmpty: true,
    attr: {
      type: {
        _isMultivalid: true,
        match: MATCH.list(ATTRIBUTE_VALUES.inputType),
        invalid: ['datetime'],
      },
      accept: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['file'],
        match: MATCH.string,
      },
      alt: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['file'],
        match: MATCH.string,
      },
      autocomplete: {
        _isStringlist: true,
        separatorCharacter: ['type'],
        match: MATCH.list(ATTRIBUTE_VALUES.inputAutocomplete),
      },
      autofocus: {
        match: MATCH.hardBoolean,
      },
      capture: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['file'],
        match: MATCH.string,
      },
      checked: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['radio', 'checkbox'],
        match: MATCH.hardBoolean,
      },
      dirname: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['text', 'search'],
        match: MATCH.string,
      },
      disabled: {
        match: MATCH.hardBoolean,
      },
      form: {
        match: MATCH.string,
      },
      formaction: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['image', 'submit'],
        match: MATCH.url, // Test URL
      },
      formenctype: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['image', 'submit'],
        match: MATCH.list(ATTRIBUTE_VALUES.encryption),
      },
      formmethod: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['image', 'submit'],
        match: MATCH.list(ATTRIBUTE_VALUES.formmethod),
      },
      formnovalidate: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['image', 'submit'],
        match: MATCH.hardBoolean,
      },
      formtarget: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['image', 'submit'],
        match: MATCH.string,
      },
      list: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: [
          'text',
          'search',
          'url',
          'tel',
          'email',
          'date',
          'month',
          'week',
          'time',
          'datetime-local',
          'number',
          'range',
          'color',
        ],
        match: MATCH.string,
      },
      max: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: [
          'date',
          'month',
          'week',
          'time',
          'datetime-local',
          'number',
          'range',
        ],
        match: MATCH.number,
      },
      maxlength: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['password', 'search', 'tel', 'text', 'url'],
        match: MATCH.number,
      },
      min: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: [
          'date',
          'month',
          'week',
          'time',
          'datetime-local',
          'number',
          'range',
        ],
        match: MATCH.number,
      },
      minlength: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['password', 'search', 'tel', 'text', 'url'],
        match: MATCH.number,
      },
      multiple: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['email', 'file'],
        match: MATCH.hardBoolean,
      },
      name: {
        match: MATCH.string,
      },
      pattern: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['password', 'text', 'tel'],
        match: MATCH.string,
      },
      placeholder: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['password', 'search', 'text', 'tel', 'url'],
        match: MATCH.string,
      },
      readonly: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: [
          'text',
          'search',
          'url',
          'tel',
          'email',
          'password',
          'date',
          'month',
          'week',
          'time',
          'datetime-local',
          'number',
        ],
        match: MATCH.hardBoolean,
      },
      required: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: [
          'text',
          'search',
          'url',
          'tel',
          'email',
          'password',
          'date',
          'month',
          'week',
          'time',
          'datetime-local',
          'number',
          'checkbox',
          'radio',
          'file',
        ],
        match: MATCH.hardBoolean,
      },
      src: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: ['image'],
        match: MATCH.string,
      },
      step: {
        _isDependant: true,
        attributeName: ['type'],
        attributeValue: [
          'date',
          'month',
          'week',
          'time',
          'datetime-local',
          'number',
          'range',
        ],
        match: MATCH.number,
      },
      value: {
        match: MATCH.string,
      },
    },
    _nonStandardAttributes: [
      'height',
      'size',
      'width',
      'autocorrect',
      'incremental',
      'mozactionhint',
      'orient',
      'results',
      'webkitdirectory',
    ],
  },
  {
    name: 'ins',
    attr: {
      cite: { match: MATCH.url },
      datetime: { match: MATCH.string },
    },
  },
  { name: 'kbd' },
  {
    name: 'label',
    attr: {
      for: { match: MATCH.string },
    },
  },
  { name: 'legend' },
  {
    name: 'li',
    attr: { value: { match: MATCH.string } },
    _deprecatedAttributes: ['type'],
  },
  {
    name: 'link',
    isEmpty: true,
    attr: {
      rel: {
        _isMultivalid: true,
        match: MATCH.list(ATTRIBUTE_VALUES.validLinkTypes),
        invalid: ATTRIBUTE_VALUES.invalidLinkTypes,
      },
      as: { match: MATCH.list(ATTRIBUTE_VALUES.linkAs) },
      crossorigin: {
        match: MATCH.list(ATTRIBUTE_VALUES.crossorigin),
      },
      disabled: { match: MATCH.hardBoolean },
      href: { match: MATCH.url }, // Test URL
      hreflang: { match: MATCH.list(ATTRIBUTE_VALUES.isoCodes) },
      imagesizes: { match: MATCH.string },
      imagesrcset: { match: MATCH.string },
      media: { match: MATCH.string },
      type: { match: MATCH.string },
    },
    _experimentalAttributes: ['integrity', 'prefetch', 'referrpolicy'],
    _nonStandardAttributes: ['methods', 'target'],
    _deprecatedAttributes: ['charset', 'rev'],
  },
  { name: 'main' },
  {
    name: 'map',
    attr: { name: { match: MATCH.string } },
  },
  { name: 'mark' },
  { name: 'menu', _isExperimental: true },
  {
    name: 'meta',
    isEmpty: true,
    attr: {
      content: { match: MATCH.string },
      'http-equiv': {
        match: MATCH.list(ATTRIBUTE_VALUES.httpEquiv),
      },
      name: { match: MATCH.string },
      charset: { match: MATCH.string },
    },
  },
  {
    name: 'meter',
    attr: {
      high: { match: MATCH.number },
      low: { match: MATCH.number },
      optimum: { match: MATCH.number },
      value: { match: MATCH.string },
      form: { match: MATCH.string },
      max: { match: MATCH.string },
      min: { match: MATCH.string },
    },
  },
  { name: 'nav' },
  { name: 'noscript' },
  {
    name: 'object',
    attr: {
      data: { match: MATCH.url }, // Test URL
      name: { match: MATCH.string },
      form: { match: MATCH.string },
      type: { match: MATCH.string },
      usemap: { match: MATCH.string },
      height: { match: MATCH.number },
      width: { match: MATCH.number },
    },
    _deprecatedAttributes: [
      'archive',
      'border',
      'classid',
      'codebase',
      'codetype',
      'declare',
      'standby',
    ],
  },
  {
    name: 'ol',
    attr: {
      reversed: { match: MATCH.hardBoolean },
      start: { match: MATCH.number },
      type: { match: MATCH.list(ATTRIBUTE_VALUES.orderedListType) },
    },
  },
  {
    name: 'optgroup',
    attr: {
      disabled: { match: MATCH.hardBoolean },
      label: { match: MATCH.string },
    },
  },
  {
    name: 'option',
    attr: {
      disabled: { match: MATCH.hardBoolean },
      label: { match: MATCH.string },
      selected: { match: MATCH.hardBoolean },
      value: { match: MATCH.string },
    },
  },
  {
    name: 'output',
    attr: {
      for: { match: MATCH.string },
      name: { match: MATCH.string },
      form: { match: MATCH.string },
    },
  },
  { name: 'p' },
  {
    name: 'param',
    isEmpty: true,
    attr: {
      name: { match: MATCH.string },
      value: { match: MATCH.string },
    },
    _deprecatedAttributes: ['type', 'valuetype'],
  },
  { name: 'picture' },
  {
    name: 'portal',
    attr: {
      src: { match: MATCH.url }, // Test URL
    },
  },
  {
    name: 'pre',
    _deprecatedAttributes: ['cols', 'width'],
    _nonStandardAttributes: ['wrap'],
  },
  {
    name: 'progress',
    attr: {
      value: { match: MATCH.string },
      max: { match: MATCH.string },
    },
  },
  {
    name: 'q',
    attr: { cite: { match: MATCH.url } }, // Test URL
  },
  { name: 'rp' },
  { name: 'rt' },
  { name: 'ruby' },
  { name: 's' },
  { name: 'samp' },
  {
    name: 'script',
    attr: {
      async: { match: MATCH.hardBoolean },
      corssorigin: {
        match: MATCH.list(ATTRIBUTE_VALUES.crossorigin),
      },
      defer: { match: MATCH.hardBoolean },
      src: { match: MATCH.url }, // Test URL
      type: { match: MATCH.string },
      nonce: { match: MATCH.number },
      nomodule: { match: MATCH.hardBoolean },
      integrity: { match: MATCH.string },
    },
    _experimentalAttributes: ['referrerpolicy'],
    _deprecatedAttributes: ['charset', 'language'],
  },
  { name: 'section' },
  {
    name: 'select',
    attr: {
      autocomplete: {
        _isStringlist: true,
        separatorCharacter: ['type'],
        match: MATCH.list(ATTRIBUTE_VALUES.inputAutocomplete),
      },
      autofocus: { match: MATCH.hardBoolean },
      disabled: { match: MATCH.hardBoolean },
      form: { match: MATCH.string },
      multiple: { match: MATCH.hardBoolean },
      name: { match: MATCH.string },
      required: { match: MATCH.hardBoolean },
      size: { match: MATCH.number },
    },
  },
  { name: 'slot', attr: { name: { match: MATCH.string } } },
  { name: 'small' },
  {
    name: 'source',
    isEmpty: true,
    attr: {
      srcset: { match: MATCH.string },
      src: { match: MATCH.url }, // Test URL
      media: { match: MATCH.string },
      sizes: { match: MATCH.string },
      type: { match: MATCH.string },
      srcset: { match: MATCH.string },
    },
  },
  { name: 'span' },
  { name: 'strong' },
  {
    name: 'style',
    attr: {
      type: { match: MATCH.list(ATTRIBUTE_VALUES.typeStyle) },
      media: { match: MATCH.string },
      nonce: { match: MATCH.string },
    },
  },
  { name: 'sub' },
  { name: 'summary' },
  { name: 'sup' },
  {
    name: 'table',
    _deprecatedAttributes: [
      'align',
      'bgcolor',
      'border',
      'cellpadding',
      'cellspacing',
      'frame',
      'rules',
      'summary',
      'width',
    ],
  },
  {
    name: 'tbody',
    _deprecatedAttributes: ['align', 'bgcolor', 'char', 'charoff', 'valign'],
  },
  {
    name: 'td',
    attr: {
      colspan: { match: MATCH.number },
      headers: { match: MATCH.string },
      rowspan: { match: MATCH.number },
    },
    _deprecatedAttributes: [
      'align',
      'axis',
      'bgcolor',
      'char',
      'charoff',
      'height',
      'scope',
      'valign',
      'width',
    ],
  },
  { name: 'template' },
  {
    name: 'textarea',
    attr: {
      autocomplete: {
        _isStringlist: true,
        separatorCharacter: ['type'],
        match: MATCH.list(ATTRIBUTE_VALUES.inputAutocomplete),
      },
      cols: { match: MATCH.number },
      disabled: { match: MATCH.hardBoolean },
      form: { match: MATCH.string },
      maxlength: { match: MATCH.number },
      name: { match: MATCH.string },
      placeholder: { match: MATCH.string },
      readonly: { match: MATCH.hardBoolean },
      required: { match: MATCH.hardBoolean },
      rows: { match: MATCH.number },
      spellcheck: { match: MATCH.list(ATTRIBUTE_VALUES.softBoolean) },
      wrap: { match: MATCH.list(ATTRIBUTE_VALUES.wrap) },
    },
    _deprecatedAttributes: ['autocapitalize', 'autocorrect'],
  },
  {
    name: 'tfoot',
    _deprecatedAttributes: ['align', 'bgcolor', 'char', 'charoff', 'valign'],
  },
  {
    name: 'th',
    attr: {
      abbr: { match: MATCH.string },
      colspan: { match: MATCH.number },
      headers: { match: MATCH.string },
      rowspan: { match: MATCH.number },
      scope: { match: MATCH.list(ATTRIBUTE_VALUES.scope) },
    },
    _deprecatedAttributes: [
      'align',
      'axis',
      'bgcolor',
      'char',
      'charoff',
      'height',
      'scope',
      'valign',
      'width',
    ],
  },
  {
    name: 'thead',
    _deprecatedAttributes: ['align', 'bgcolor', 'char', 'charoff', 'valign'],
  },
  { name: 'time', attr: { datetime: { match: MATCH.string } } },
  { name: 'title' },
  {
    name: 'tr',
    _deprecatedAttributes: ['align', 'bgcolor', 'char', 'charoff', 'valign'],
  },
  {
    name: 'track',
    isEmpty: true,
    attr: {
      default: { match: MATCH.hardBoolean },
      kind: { match: MATCH.list(ATTRIBUTE_VALUES.trackKind) },
      label: { match: MATCH.string },
      srclang: { match: MATCH.list(ATTRIBUTE_VALUES.isoCodes) },
      src: { match: MATCH.url },
    },
  },
  { name: 'u' },
  {
    name: 'ul',
    _deprecatedAttributes: ['compact', 'type'],
  },
  { name: 'var' },
  {
    name: 'video',
    attr: {
      autoplay: { match: MATCH.hardBoolean },
      controls: { match: MATCH.hardBoolean },
      crossorigin: {
        match: MATCH.list(ATTRIBUTE_VALUES.crossorigin),
      },
      loop: { match: MATCH.hardBoolean },
      muted: { match: MATCH.hardBoolean },
      poster: { match: MATCH.url }, // Test URL
      preload: { match: MATCH.list(ATTRIBUTE_VALUES.preload) },
      src: { match: MATCH.url }, // Test URL
      playsinline: { MATCH: MATCH.hardBoolean },
      height: { match: MATCH.number },
      width: { match: MATCH.number },
    },
    _experimentalAttributes: [
      'autopictureinpicture',
      'controlslist',
      'disablepictureinpicture',
      'disableremoteplayback',
    ],
  },
  { name: 'wbr', isEmpty: true },
]

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This dictionary contains guidelines for all global attributes.
 */
// prettier-ignore-start
const GLOBAL_ATTRIBUTES = {
  accesskey: { match: MATCH.string },
  autocapitalize: { match: MATCH.list(ATTRIBUTE_VALUES.autocapitalize) },
  class: { match: MATCH.string },
  contenteditable: { match: MATCH.list(ATTRIBUTE_VALUES.softBoolean) },
  data: { match: MATCH.string },
  dir: { match: MATCH.list(ATTRIBUTE_VALUES.bdoDir) },
  draggable: { match: MATCH.list(ATTRIBUTE_VALUES.softBoolean) },
  enterkeyhint: { match: MATCH.list(ATTRIBUTE_VALUES.enterkeyhint) },
  hidden: { match: MATCH.hardBoolean },
  id: { match: MATCH.string },
  inputmode: { match: MATCH.list(ATTRIBUTE_VALUES.inputmode) },
  itemid: { match: MATCH.string },
  itemprop: { match: MATCH.string },
  itemref: { match: MATCH.string },
  itemscope: { match: MATCH.hardBoolean },
  itemtype: { match: MATCH.url }, // Test URL
  lang: { match: MATCH.list(ATTRIBUTE_VALUES.isoCodes) },
  nonce: { match: MATCH.string },
  spellcheck: { match: MATCH.list(ATTRIBUTE_VALUES.softBoolean) },
  style: { match: MATCH.string },
  tabindex: { match: MATCH.number },
  title: { match: MATCH.string },
  // Event Listener
  cancel: { match: MATCH.function },
  error: { match: MATCH.function },
  scroll: { match: MATCH.function },
  select: { match: MATCH.function },
  show: { match: MATCH.function },
  wheel: { match: MATCH.function },
  copy: { match: MATCH.function },
  cut: { match: MATCH.function },
  paste: { match: MATCH.function },
  compositionend: { match: MATCH.function },
  compositionstart: { match: MATCH.function },
  compositionupdate: { match: MATCH.function },
  blur: { match: MATCH.function },
  focus: { match: MATCH.function },
  focusin: { match: MATCH.function },
  focusout: { match: MATCH.function },
  fullscreenchange: { match: MATCH.function },
  fullscreenerror: { match: MATCH.function },
  keydown: { match: MATCH.function },
  keypress: { match: MATCH.function },
  keyup: { match: MATCH.function },
  auxclick: { match: MATCH.function },
  click: { match: MATCH.function },
  contextmenu: { match: MATCH.function },
  dblclick: { match: MATCH.function },
  mousdown: { match: MATCH.function },
  mouseenter: { match: MATCH.function },
  mouseleave: { match: MATCH.function },
  mousemove: { match: MATCH.function },
  mouseout: { match: MATCH.function },
  mouseover: { match: MATCH.function },
  mouseup: { match: MATCH.function },
  change: { match: MATCH.function },
  webkitmouseforcechanged: { match: MATCH.function },
  webkitmouseforcedown: { match: MATCH.function },
  webkitmouseforcewillbegin: { match: MATCH.function },
  webkitmouseforceup: { match: MATCH.function },
  touchcancel: { match: MATCH.function },
  touchend: { match: MATCH.function },
  touchmove: { match: MATCH.function },
  touchstart: { match: MATCH.function },
  // Custom attributes
  activate: { match: MATCH.activate },
}
// prettier-ignore-end

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This array contains the list of all event listeners.
 */
// prettier-ignore
const EVENT_LISTNERS = ['cancel', 'error', 'scroll', 'select', 'show', 'wheel', 'copy', 'cut', 'paste', 'compositionend', 'compositionstart', 'compositionupdate', 'blur', 'focus', 'focusin', 'focusout', 'fullscreenchange', 'fullscreenerror', 'keydown', 'keypress', 'keyup', 'auxclick', 'click', 'contextmenu', 'dblclick', 'mousdown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'change','webkitmouseforcechanged', 'webkitmouseforcedown', 'webkitmouseforcewillbegin', 'webkitmouseforceup', 'touchcancel', 'touchend', 'touchmove', 'touchstart']
