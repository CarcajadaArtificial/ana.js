//     ____ _ _            _     _   _ _   _ _ _ _   _
//    / ___| (_) ___ _ __ | |_  | | | | |_(_) (_) |_(_) ___  ___
//   | |   | | |/ _ \ '_ \| __| | | | | __| | | | __| |/ _ \/ __|
//   | |___| | |  __/ | | | |_  | |_| | |_| | | | |_| |  __/\__ \
//    \____|_|_|\___|_| |_|\__|  \___/ \__|_|_|_|\__|_|\___||___/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @module Test/Utils
 */
'use strict'
const { testEnvironment } = require('../../jest.config.js')
const { MATCH } = require('../../public/js/ana-min.js')
const U = require('../../public/js/ana-min.js')
jest.spyOn(global.console, 'warn')
jest.spyOn(global.console, 'error')

// =====================================================================================================
// Global Objects
// =====================================================================================================
const T = {
  blankString: '',
  blankArray: [],
  emptySpace: ' ',
  normalCharacters:
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210',
  specialCharacters: 'ºª!|@·#$%&/\\()=?^*+[]¨{}çÇ-_.:,;ñÑ<>¬ÁáÉéÍíÓóÚú\'"`´   ',
  numbers: [0, 1, -1, 1.01, -1.01],
  allDatatypes: [
    'string',
    'number',
    'boolean',
    'undefined',
    'null',
    'array',
    'element',
    'object',
    'function'
  ],
}

T.datatypes = {
  string: [
    T.blankString,
    T.emptySpace,
    T.normalCharacters,
    T.specialCharacters,
    String(T.normalCharacters),
  ],
  number: T.numbers,
  boolean: [true, false],
  undefined: [undefined],
  null: [null],
  array: [
    T.blankArray,
    T.numbers,
    T.normalCharacters.split(''),
    new Array(T.blankArray, T.numbers, T.normalCharacters.split('')),
  ],
  element: [
    document.createElement('div'),
    document.createElement('asdf'),
    document.createElement('svg'),
    document.createElement('body'),
    document.createElement('a'),
  ],
  object: [{ a: 1 }, new Object()],
  function: [
    function (param) {
      return param
    },
    (param) => {
      return param
    },
  ],
}

function _getDatatypes(except = '') {
  let setDatatypes = T.allDatatypes
  if (except !== '') {
    setDatatypes = setDatatypes.filter((datatype) => datatype !== except)
  }

  let sampleDatatypes = []
  setDatatypes.forEach(function (datatype) {
    sampleDatatypes = sampleDatatypes.concat(T.datatypes[datatype])
  })

  return sampleDatatypes
}

T.invalidSlugInputs = _getDatatypes('string')

T.html = {
  validRenders: [
    {
      name: 'a',
      element: document.createElement('a'),
      render: U.R('a'),
    },
    {
      name: 'abbr',
      element: document.createElement('abbr'),
      render: U.R('abbr'),
    },
    {
      name: 'address',
      element: document.createElement('address'),
      render: U.R('address'),
    },
    {
      name: 'area',
      element: document.createElement('area'),
      render: U.R('area'),
    },
    {
      name: 'article',
      element: document.createElement('article'),
      render: U.R('article'),
    },
    {
      name: 'aside',
      element: document.createElement('aside'),
      render: U.R('aside'),
    },
    {
      name: 'audio',
      element: document.createElement('audio'),
      render: U.R('audio'),
    },
    {
      name: 'b',
      element: document.createElement('b'),
      render: U.R('b'),
    },
    {
      name: 'base',
      element: document.createElement('base'),
      render: U.R('base'),
    },
    {
      name: 'bdi',
      element: document.createElement('bdi'),
      render: U.R('bdi'),
    },
    {
      name: 'bdo',
      element: document.createElement('bdo'),
      render: U.R('bdo'),
    },
    {
      name: 'blockquote',
      element: document.createElement('blockquote'),
      render: U.R('blockquote'),
    },
    {
      name: 'body',
      element: document.createElement('body'),
      render: U.R('body'),
    },
    {
      name: 'br',
      element: document.createElement('br'),
      render: U.R('br'),
    },
    {
      name: 'button',
      element: document.createElement('button'),
      render: U.R('button'),
    },
    {
      name: 'canvas',
      element: document.createElement('canvas'),
      render: U.R('canvas'),
    },
    {
      name: 'caption',
      element: document.createElement('caption'),
      render: U.R('caption'),
    },
    {
      name: 'cite',
      element: document.createElement('cite'),
      render: U.R('cite'),
    },
    {
      name: 'code',
      element: document.createElement('code'),
      render: U.R('code'),
    },
    {
      name: 'col',
      element: document.createElement('col'),
      render: U.R('col'),
    },
    {
      name: 'colgroup',
      element: document.createElement('colgroup'),
      render: U.R('colgroup'),
    },
    {
      name: 'data',
      element: document.createElement('data'),
      render: U.R('data'),
    },
    {
      name: 'datalist',
      element: document.createElement('datalist'),
      render: U.R('datalist'),
    },
    {
      name: 'dd',
      element: document.createElement('dd'),
      render: U.R('dd'),
    },
    {
      name: 'del',
      element: document.createElement('del'),
      render: U.R('del'),
    },
    {
      name: 'details',
      element: document.createElement('details'),
      render: U.R('details'),
    },
    {
      name: 'dfn',
      element: document.createElement('dfn'),
      render: U.R('dfn'),
    },
    {
      name: 'dialog',
      element: document.createElement('dialog'),
      render: U.R('dialog'),
    },
    {
      name: 'div',
      element: document.createElement('div'),
      render: U.R('div'),
    },
    {
      name: 'dl',
      element: document.createElement('dl'),
      render: U.R('dl'),
    },
    {
      name: 'dt',
      element: document.createElement('dt'),
      render: U.R('dt'),
    },
    {
      name: 'em',
      element: document.createElement('em'),
      render: U.R('em'),
    },
    {
      name: 'embed',
      element: document.createElement('embed'),
      render: U.R('embed'),
    },
    {
      name: 'fieldset',
      element: document.createElement('fieldset'),
      render: U.R('fieldset'),
    },
    {
      name: 'figcaption',
      element: document.createElement('figcaption'),
      render: U.R('figcaption'),
    },
    {
      name: 'figure',
      element: document.createElement('figure'),
      render: U.R('figure'),
    },
    {
      name: 'footer',
      element: document.createElement('footer'),
      render: U.R('footer'),
    },
    {
      name: 'form',
      element: document.createElement('form'),
      render: U.R('form'),
    },
    {
      name: 'h1',
      element: document.createElement('h1'),
      render: U.R('h1'),
    },
    {
      name: 'h2',
      element: document.createElement('h2'),
      render: U.R('h2'),
    },
    {
      name: 'h3',
      element: document.createElement('h3'),
      render: U.R('h3'),
    },
    {
      name: 'h4',
      element: document.createElement('h4'),
      render: U.R('h4'),
    },
    {
      name: 'h5',
      element: document.createElement('h5'),
      render: U.R('h5'),
    },
    {
      name: 'h6',
      element: document.createElement('h6'),
      render: U.R('h6'),
    },
    {
      name: 'head',
      element: document.createElement('head'),
      render: U.R('head'),
    },
    {
      name: 'header',
      element: document.createElement('header'),
      render: U.R('header'),
    },
    {
      name: 'hgroup',
      element: document.createElement('hgroup'),
      render: U.R('hgroup'),
    },
    {
      name: 'hr',
      element: document.createElement('hr'),
      render: U.R('hr'),
    },
    {
      name: 'html',
      element: document.createElement('html'),
      render: U.R('html'),
    },
    {
      name: 'i',
      element: document.createElement('i'),
      render: U.R('i'),
    },
    {
      name: 'iframe',
      element: document.createElement('iframe'),
      render: U.R('iframe'),
    },
    {
      name: 'img',
      element: document.createElement('img'),
      render: U.R('img'),
    },
    {
      name: 'input',
      element: document.createElement('input'),
      render: U.R('input'),
    },
    {
      name: 'ins',
      element: document.createElement('ins'),
      render: U.R('ins'),
    },
    {
      name: 'kbd',
      element: document.createElement('kbd'),
      render: U.R('kbd'),
    },
    {
      name: 'label',
      element: document.createElement('label'),
      render: U.R('label'),
    },
    {
      name: 'legend',
      element: document.createElement('legend'),
      render: U.R('legend'),
    },
    {
      name: 'li',
      element: document.createElement('li'),
      render: U.R('li'),
    },
    {
      name: 'link',
      element: document.createElement('link'),
      render: U.R('link'),
    },
    {
      name: 'main',
      element: document.createElement('main'),
      render: U.R('main'),
    },
    {
      name: 'map',
      element: document.createElement('map'),
      render: U.R('map'),
    },
    {
      name: 'mark',
      element: document.createElement('mark'),
      render: U.R('mark'),
    },
    {
      name: 'menu',
      element: document.createElement('menu'),
      render: U.R('menu'),
    },
    {
      name: 'meta',
      element: document.createElement('meta'),
      render: U.R('meta'),
    },
    {
      name: 'meter',
      element: document.createElement('meter'),
      render: U.R('meter'),
    },
    {
      name: 'nav',
      element: document.createElement('nav'),
      render: U.R('nav'),
    },
    {
      name: 'noscript',
      element: document.createElement('noscript'),
      render: U.R('noscript'),
    },
    {
      name: 'object',
      element: document.createElement('object'),
      render: U.R('object'),
    },
    {
      name: 'ol',
      element: document.createElement('ol'),
      render: U.R('ol'),
    },
    {
      name: 'optgroup',
      element: document.createElement('optgroup'),
      render: U.R('optgroup'),
    },
    {
      name: 'option',
      element: document.createElement('option'),
      render: U.R('option'),
    },
    {
      name: 'output',
      element: document.createElement('output'),
      render: U.R('output'),
    },
    {
      name: 'p',
      element: document.createElement('p'),
      render: U.R('p'),
    },
    {
      name: 'param',
      element: document.createElement('param'),
      render: U.R('param'),
    },
    {
      name: 'picture',
      element: document.createElement('picture'),
      render: U.R('picture'),
    },
    {
      name: 'pre',
      element: document.createElement('pre'),
      render: U.R('pre'),
    },
    {
      name: 'progress',
      element: document.createElement('progress'),
      render: U.R('progress'),
    },
    {
      name: 'q',
      element: document.createElement('q'),
      render: U.R('q'),
    },
    {
      name: 'rp',
      element: document.createElement('rp'),
      render: U.R('rp'),
    },
    {
      name: 'rt',
      element: document.createElement('rt'),
      render: U.R('rt'),
    },
    {
      name: 'ruby',
      element: document.createElement('ruby'),
      render: U.R('ruby'),
    },
    {
      name: 's',
      element: document.createElement('s'),
      render: U.R('s'),
    },
    {
      name: 'samp',
      element: document.createElement('samp'),
      render: U.R('samp'),
    },
    {
      name: 'script',
      element: document.createElement('script'),
      render: U.R('script'),
    },
    {
      name: 'section',
      element: document.createElement('section'),
      render: U.R('section'),
    },
    {
      name: 'select',
      element: document.createElement('select'),
      render: U.R('select'),
    },
    {
      name: 'slot',
      element: document.createElement('slot'),
      render: U.R('slot'),
    },
    {
      name: 'small',
      element: document.createElement('small'),
      render: U.R('small'),
    },
    {
      name: 'source',
      element: document.createElement('source'),
      render: U.R('source'),
    },
    {
      name: 'span',
      element: document.createElement('span'),
      render: U.R('span'),
    },
    {
      name: 'strong',
      element: document.createElement('strong'),
      render: U.R('strong'),
    },
    {
      name: 'style',
      element: document.createElement('style'),
      render: U.R('style'),
    },
    {
      name: 'sub',
      element: document.createElement('sub'),
      render: U.R('sub'),
    },
    {
      name: 'summary',
      element: document.createElement('summary'),
      render: U.R('summary'),
    },
    {
      name: 'sup',
      element: document.createElement('sup'),
      render: U.R('sup'),
    },
    {
      name: 'table',
      element: document.createElement('table'),
      render: U.R('table'),
    },
    {
      name: 'tbody',
      element: document.createElement('tbody'),
      render: U.R('tbody'),
    },
    {
      name: 'td',
      element: document.createElement('td'),
      render: U.R('td'),
    },
    {
      name: 'template',
      element: document.createElement('template'),
      render: U.R('template'),
    },
    {
      name: 'textarea',
      element: document.createElement('textarea'),
      render: U.R('textarea'),
    },
    {
      name: 'tfoot',
      element: document.createElement('tfoot'),
      render: U.R('tfoot'),
    },
    {
      name: 'th',
      element: document.createElement('th'),
      render: U.R('th'),
    },
    {
      name: 'thead',
      element: document.createElement('thead'),
      render: U.R('thead'),
    },
    {
      name: 'time',
      element: document.createElement('time'),
      render: U.R('time'),
    },
    {
      name: 'title',
      element: document.createElement('title'),
      render: U.R('title'),
    },
    {
      name: 'tr',
      element: document.createElement('tr'),
      render: U.R('tr'),
    },
    {
      name: 'track',
      element: document.createElement('track'),
      render: U.R('track'),
    },
    {
      name: 'u',
      element: document.createElement('u'),
      render: U.R('u'),
    },
    {
      name: 'ul',
      element: document.createElement('ul'),
      render: U.R('ul'),
    },
    {
      name: 'var',
      element: document.createElement('var'),
      render: U.R('var'),
    },
    {
      name: 'video',
      element: document.createElement('video'),
      render: U.R('video'),
    },
    {
      name: 'wbr',
      element: document.createElement('wbr'),
      render: U.R('wbr'),
    },
  ],
  invalidRenders: [
    {
      render: U.R('asdf'),
      value: undefined,
    },
  ],
  validAttributes: [
    {
      name: 'accesskey',
      tests: [
        {
          render: U.R('div', { accesskey: 'test' }),
          outer: '<div accesskey="test"></div>',
        },
      ],
    },
    {
      name: 'autocapitalize',
      tests: [
        {
          render: U.R('div', { autocapitalize: 'off' }),
          outer: '<div autocapitalize="off"></div>',
        },
        {
          render: U.R('div', { autocapitalize: 'sentences' }),
          outer: '<div autocapitalize="sentences"></div>',
        },
      ],
    },
    {
      name: 'nonce',
      tests: [
        {
          render: U.R('div', { nonce: 'test' }),
          outer: '<div nonce="test"></div>',
        },
        {
          render: U.R('div', { nonce: 'test test' }),
          outer: '<div nonce="test test"></div>',
        },
      ],
    },
    {
      name: 'class',
      tests: [
        {
          render: U.R('div', { class: 'test' }),
          outer: '<div class="test"></div>',
        },
        {
          render: U.R('div', { class: 'test test' }),
          outer: '<div class="test test"></div>',
        },
      ],
    },
    {
      name: 'alt',
      tests: [
        {
          render: U.R('area', { alt: 'test' }),
          outer: '<area alt="test">',
        },
        {
          render: U.R('area', { alt: 'test test' }),
          outer: '<area alt="test test">',
        },
      ],
    },
    {
      name: 'target',
      tests: [
        {
          render: U.R('a', { target: 'test' }),
          outer: '<a target="test"></a>',
        },
        {
          render: U.R('a', { target: 'test test' }),
          outer: '<a target="test test"></a>',
        },
        {
          render: U.R('area', { target: 'test' }),
          outer: '<area target="test">',
        },
        {
          render: U.R('area', { target: 'test test' }),
          outer: '<area target="test test">',
        },
        {
          render: U.R('base', { target: 'test' }),
          outer: '<base target="test">',
        },
        {
          render: U.R('base', { target: 'test test' }),
          outer: '<base target="test test">',
        },
        {
          render: U.R('form', { target: 'test' }),
          outer: '<form target="test"></form>',
        },
        {
          render: U.R('form', { target: 'test test' }),
          outer: '<form target="test test"></form>',
        },
      ],
    },
    {
      name: 'ping',
      tests: [
        {
          render: U.R('a', { ping: 'test' }),
          outer: '<a ping="test"></a>',
        },
        {
          render: U.R('a', { ping: 'test test' }),
          outer: '<a ping="test test"></a>',
        },
        {
          render: U.R('area', { ping: 'test' }),
          outer: '<area ping="test">',
        },
        {
          render: U.R('area', { ping: 'test test' }),
          outer: '<area ping="test test">',
        },
      ],
    },
    {
      name: 'download',
      tests: [
        {
          render: U.R('a', { download: 'test' }),
          outer: '<a download="test"></a>',
        },
        {
          render: U.R('a', { download: 'test test' }),
          outer: '<a download="test test"></a>',
        },
        {
          render: U.R('area', { download: 'test' }),
          outer: '<area download="test">',
        },
        {
          render: U.R('area', { download: 'test test' }),
          outer: '<area download="test test">',
        },
      ],
    },
    {
      name: 'title',
      tests: [
        {
          render: U.R('div', { title: 'test' }),
          outer: '<div title="test"></div>',
        },
        {
          render: U.R('div', { title: 'test test' }),
          outer: '<div title="test test"></div>',
        },
      ],
    },
    {
      name: 'class',
      tests: [
        {
          render: U.R('div', { class: 'test' }),
          outer: '<div class="test"></div>',
        },
        {
          render: U.R('div', { class: 'test test' }),
          outer: '<div class="test test"></div>',
        },
      ],
    },
    {
      name: 'coords',
      tests: [
        {
          render: U.R('area', { coords: 'test' }),
          outer: '<area coords="test">',
        },
        {
          render: U.R('area', { coords: 'test test' }),
          outer: '<area coords="test test">',
        },
      ],
    },
    {
      name: 'itemref',
      tests: [
        {
          render: U.R('div', { itemref: 'test' }),
          outer: '<div itemref="test"></div>',
        },
        {
          render: U.R('div', { itemref: 'test test' }),
          outer: '<div itemref="test test"></div>',
        },
      ],
    },
    {
      name: 'itemprop',
      tests: [
        {
          render: U.R('div', { itemprop: 'test' }),
          outer: '<div itemprop="test"></div>',
        },
        {
          render: U.R('div', { itemprop: 'test test' }),
          outer: '<div itemprop="test test"></div>',
        },
      ],
    },
    {
      name: 'itemid',
      tests: [
        {
          render: U.R('div', { itemid: 'test' }),
          outer: '<div itemid="test"></div>',
        },
        {
          render: U.R('div', { itemid: 'test test' }),
          outer: '<div itemid="test test"></div>',
        },
      ],
    },
    {
      name: 'id',
      tests: [
        {
          render: U.R('div', { id: 'test' }),
          outer: '<div id="test"></div>',
        },
        {
          render: U.R('div', { id: 'test test' }),
          outer: '<div></div>',
        },
      ],
    },
    {
      name: 'dir',
      tests: [
        {
          render: U.R('div', { dir: 'ltr' }),
          outer: '<div dir="ltr"></div>',
        },
        {
          render: U.R('div', { dir: 'rtl' }),
          outer: '<div dir="rtl"></div>',
        },
        {
          render: U.R('div', { dir: 'auto' }),
          outer: '<div dir="auto"></div>',
        },
      ],
    },
    {
      name: 'contenteditable',
      tests: [
        {
          render: U.R('div', { contenteditable: 'true' }),
          outer: '<div contenteditable="true"></div>',
        },
        {
          render: U.R('div', { contenteditable: 'false' }),
          outer: '<div contenteditable="false"></div>',
        },
        {
          render: U.R('div', { contenteditable: '' }),
          outer: '<div contenteditable=""></div>',
        },
      ],
    },
    {
      name: 'spellcheck',
      tests: [
        {
          render: U.R('div', { spellcheck: 'true' }),
          outer: '<div spellcheck="true"></div>',
        },
        {
          render: U.R('div', { spellcheck: 'false' }),
          outer: '<div spellcheck="false"></div>',
        },
        {
          render: U.R('div', { spellcheck: '' }),
          outer: '<div spellcheck=""></div>',
        },
      ],
    },
    {
      name: 'draggable',
      tests: [
        {
          render: U.R('div', { draggable: 'true' }),
          outer: '<div draggable="true"></div>',
        },
        {
          render: U.R('div', { draggable: 'false' }),
          outer: '<div draggable="false"></div>',
        },
        {
          render: U.R('div', { draggable: '' }),
          outer: '<div draggable=""></div>',
        },
      ],
    },
    {
      name: 'enterkeyhint',
      tests: [
        {
          render: U.R('div', { enterkeyhint: 'enter' }),
          outer: '<div enterkeyhint="enter"></div>',
        },
        {
          render: U.R('div', { enterkeyhint: 'done' }),
          outer: '<div enterkeyhint="done"></div>',
        },
        {
          render: U.R('div', { enterkeyhint: 'search' }),
          outer: '<div enterkeyhint="search"></div>',
        },
      ],
    },
    {
      name: 'crossorigin',
      tests: [
        {
          render: U.R('audio', { crossorigin: 'anonymous' }),
          outer: '<audio crossorigin="anonymous"></audio>',
        },
        {
          render: U.R('audio', { crossorigin: 'use-credentials' }),
          outer: '<audio crossorigin="use-credentials"></audio>',
        },
        {
          render: U.R('audio', { crossorigin: '' }),
          outer: '<audio crossorigin=""></audio>',
        },
        {
          render: U.R('video', { crossorigin: 'anonymous' }),
          outer: '<video crossorigin="anonymous"></video>',
        },
        {
          render: U.R('video', { crossorigin: 'use-credentials' }),
          outer: '<video crossorigin="use-credentials"></video>',
        },
        {
          render: U.R('video', { crossorigin: '' }),
          outer: '<video crossorigin=""></video>',
        },
        {
          render: U.R('img', { crossorigin: 'anonymous' }),
          outer: '<img crossorigin="anonymous">',
        },
        {
          render: U.R('img', { crossorigin: 'use-credentials' }),
          outer: '<img crossorigin="use-credentials">',
        },
        {
          render: U.R('img', { crossorigin: '' }),
          outer: '<img crossorigin="">',
        },
        {
          render: U.R('link', { crossorigin: 'anonymous' }),
          outer: '<link crossorigin="anonymous">',
        },
        {
          render: U.R('link', { crossorigin: 'use-credentials' }),
          outer: '<link crossorigin="use-credentials">',
        },
        {
          render: U.R('link', { crossorigin: '' }),
          outer: '<link crossorigin="">',
        },
      ],
    },
    {
      name: 'preload',
      tests: [
        {
          render: U.R('audio', { preload: 'none' }),
          outer: '<audio preload="none"></audio>',
        },
        {
          render: U.R('audio', { preload: 'metadata' }),
          outer: '<audio preload="metadata"></audio>',
        },
        {
          render: U.R('audio', { preload: 'auto' }),
          outer: '<audio preload="auto"></audio>',
        },
        {
          render: U.R('audio', { preload: '' }),
          outer: '<audio preload=""></audio>',
        },
        {
          render: U.R('video', { preload: 'none' }),
          outer: '<video preload="none"></video>',
        },
        {
          render: U.R('video', { preload: 'metadata' }),
          outer: '<video preload="metadata"></video>',
        },
        {
          render: U.R('video', { preload: 'auto' }),
          outer: '<video preload="auto"></video>',
        },
        {
          render: U.R('video', { preload: '' }),
          outer: '<video preload=""></video>',
        },
      ],
    },
    {
      name: 'hidden',
      tests: [
        {
          render: U.R('div', { hidden: true }),
          outer: '<div hidden=""></div>',
        },
        {
          render: U.R('div', { hidden: false }),
          outer: '<div></div>',
        },
      ],
    },
    {
      name: 'itemscope',
      tests: [
        {
          render: U.R('div', { itemscope: true }),
          outer: '<div itemscope=""></div>',
        },
        {
          render: U.R('div', { itemscope: false }),
          outer: '<div></div>',
        },
      ],
    },
    {
      name: 'autoplay',
      tests: [
        {
          render: U.R('audio', { autoplay: true }),
          outer: '<audio autoplay=""></audio>',
        },
        {
          render: U.R('audio', { autoplay: false }),
          outer: '<audio></audio>',
        },
        {
          render: U.R('video', { autoplay: true }),
          outer: '<video autoplay=""></video>',
        },
        {
          render: U.R('video', { autoplay: false }),
          outer: '<video></video>',
        },
      ],
    },
    {
      name: 'loop',
      tests: [
        {
          render: U.R('audio', { loop: true }),
          outer: '<audio loop=""></audio>',
        },
        {
          render: U.R('audio', { loop: false }),
          outer: '<audio></audio>',
        },
        {
          render: U.R('video', { loop: true }),
          outer: '<video loop=""></video>',
        },
        {
          render: U.R('video', { loop: false }),
          outer: '<video></video>',
        },
      ],
    },
    {
      name: 'muted',
      tests: [
        {
          render: U.R('audio', { muted: true }),
          outer: '<audio muted=""></audio>',
        },
        {
          render: U.R('audio', { muted: false }),
          outer: '<audio></audio>',
        },
        {
          render: U.R('video', { muted: true }),
          outer: '<video muted=""></video>',
        },
        {
          render: U.R('video', { muted: false }),
          outer: '<video></video>',
        },
      ],
    },
    {
      name: 'controls',
      tests: [
        {
          render: U.R('audio', { controls: true }),
          outer: '<audio controls=""></audio>',
        },
        {
          render: U.R('audio', { controls: false }),
          outer: '<audio></audio>',
        },
        {
          render: U.R('video', { controls: true }),
          outer: '<video controls=""></video>',
        },
        {
          render: U.R('video', { controls: false }),
          outer: '<video></video>',
        },
      ],
    },
    {
      name: 'inputmode',
      tests: [
        {
          render: U.R('div', { inputmode: 'none' }),
          outer: '<div inputmode="none"></div>',
        },
        {
          render: U.R('div', { inputmode: 'text' }),
          outer: '<div inputmode="text"></div>',
        },
        {
          render: U.R('div', { inputmode: 'search' }),
          outer: '<div inputmode="search"></div>',
        },
        {
          render: U.R('div', { inputmode: 'email' }),
          outer: '<div inputmode="email"></div>',
        },
      ],
    },
    {
      name: 'lang',
      tests: [
        {
          render: U.R('div', { lang: 'en' }),
          outer: '<div lang="en"></div>',
        },
        {
          render: U.R('div', { lang: 'eo' }),
          outer: '<div lang="eo"></div>',
        },
        {
          render: U.R('div', { lang: 'fr' }),
          outer: '<div lang="fr"></div>',
        },
      ],
    },
    {
      name: 'hreflang',
      tests: [
        {
          render: U.R('a', { hreflang: 'en' }),
          outer: '<a hreflang="en"></a>',
        },
        {
          render: U.R('a', { hreflang: 'eo' }),
          outer: '<a hreflang="eo"></a>',
        },
        {
          render: U.R('a', { hreflang: 'fr' }),
          outer: '<a hreflang="fr"></a>',
        },
        {
          render: U.R('area', { hreflang: 'en' }),
          outer: '<area hreflang="en">',
        },
        {
          render: U.R('area', { hreflang: 'eo' }),
          outer: '<area hreflang="eo">',
        },
        {
          render: U.R('area', { hreflang: 'fr' }),
          outer: '<area hreflang="fr">',
        },
        {
          render: U.R('link', { hreflang: 'en' }),
          outer: '<link hreflang="en">',
        },
        {
          render: U.R('link', { hreflang: 'eo' }),
          outer: '<link hreflang="eo">',
        },
        {
          render: U.R('link', { hreflang: 'fr' }),
          outer: '<link hreflang="fr">',
        },
      ],
    },
    {
      name: 'tabindex',
      tests: [
        {
          render: U.R('div', { tabindex: 0 }),
          outer: '<div tabindex="0"></div>',
        },
        {
          render: U.R('div', { tabindex: -1 }),
          outer: '<div tabindex="-1"></div>',
        },
        {
          render: U.R('div', { tabindex: 1 }),
          outer: '<div tabindex="1"></div>',
        },
        {
          render: U.R('div', { tabindex: 2 }),
          outer: '<div tabindex="2"></div>',
        },
      ],
    },
  ],
}

// =====================================================================================================
// Functions
// =====================================================================================================

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function slug() {
  test('Warns when input is empty', () => {
    U.slug(T.blankString)
    expect(console.warn).toBeCalled()
  })

  test('Warns when output is empty', () => {
    U.slug(T.specialCharacters)
    expect(console.warn).toBeCalled()
  })

  test('Error when input is empty', () => {
    T.invalidSlugInputs.forEach((nonStringValue) => {
      U.slug(nonStringValue)
    })
    expect(console.error).toBeCalledTimes(T.invalidSlugInputs.length)
  })

  test('Empty input outputs empty string', () => {
    expect(U.slug(T.blankString)).toEqual(T.blankString)
  })

  test('Input with only special characters outputs empty string', () => {
    expect(U.slug(T.onlySpecialCharacters)).toEqual(T.blankString)
  })

  test('Non-string input outputs empty string', () => {
    T.invalidSlugInputs.forEach((nonStringValue) => {
      expect(U.slug(nonStringValue)).toEqual(T.blankString)
    })
  })

  test('Input with no special characters output same string', () => {
    expect(U.slug(T.normalCharacters)).toEqual(T.normalCharacters)
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function areEqualArrays() {
  T.datatypes.array.forEach(function (iSample, iIndex) {
    T.datatypes.array.forEach(function (jSample, jIndex) {
      if (iIndex === jIndex) {
        test(`(Valid) [${iSample}] = [${jSample}]`, () => {
          expect(U.areEqualArrays(iSample, jSample)).toBe(true)
        })
      } else {
        test(`(Invalid) [${iSample}] != [${jSample}]`, () => {
          expect(U.areEqualArrays(iSample, jSample)).toBe(false)
        })
      }
    })
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function checkSingleValue() {
  T.allDatatypes.forEach(function (testingDatatype) {
    describe(`CHECK.${testingDatatype} (function)`, () => {
      T.datatypes[testingDatatype].forEach((testString) => {
        test(`(Valid) ${testString} returns true`, () => {
          expect(U.CHECK[testingDatatype](testString)).toBe(true)
        })
      })
      _getDatatypes(testingDatatype).forEach((testString) => {
        test(`(Invalid) ${U._writeDatatypeErrorMessage(
          testString
        )}: ${testString} returns false`, () => {
          expect(U.CHECK[testingDatatype](testString)).toBe(false)
          expect(console.error).toBeCalled()
        })
      })
    })
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function checkArrayItems() {
  Object.keys(T.datatypes).forEach((baseDatatypeName) => {
    Object.keys(T.datatypes).forEach((datatypeName) => {
      if (baseDatatypeName === datatypeName) {
        test(`(Valid) ${datatypeName}`, () => {
          expect(
            U.CHECK.arrayItems(T.datatypes[baseDatatypeName], datatypeName)
          ).toBe(true)
        })
      } else {
        test(`(Invalid) ${baseDatatypeName} getting ${datatypeName} as input.`, () => {
          expect(
            U.CHECK.arrayItems(T.datatypes[datatypeName], baseDatatypeName)
          ).toBe(false)
          expect(console.error).toBeCalled()
        })
      }
    })
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function checkObjectKeys() {
  let validObjectValues = {}
  let validObjectTypes = {}
  Object.keys(T.datatypes).forEach(function (datatypeName) {
    T.datatypes[datatypeName].forEach(function (datatypeSample, index) {
      let validObjectKey = `${datatypeName}-${index}`
      validObjectValues[validObjectKey] = datatypeSample
      validObjectTypes[validObjectKey] = datatypeName
    })
  })
  test(`(Valid) Object Keys`, () => {
    expect(U.CHECK.objectKeys(validObjectValues, validObjectTypes)).toBe(true)
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function matchList() {
  Object.keys(MATCH._attributeValues).forEach(function (
    attributeValueListName
  ) {
    test('(Valid) MATCH.matchList', () => {
      expect(
        U.MATCH.list(MATCH._attributeValues[attributeValueListName])
      ).toBeInstanceOf(Function)
    })
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function matchHardBoolean() {
  let elementWithoutAttribute = T.datatypes.element[0].cloneNode()
  let elementWithAttribute = T.datatypes.element[0].cloneNode()
  elementWithAttribute.toggleAttribute('test')
  test('(Valid) MATCH.hardBoolean true with element without test attribute to be <div test=""></div>', () => {
    expect(
      U.MATCH.hardBoolean(true, elementWithoutAttribute, 'test').outerHTML
    ).toBe('<div test=""></div>')
  })
  test('(Valid) MATCH.hardBoolean true with element with test attribute to be <div test=""></div>', () => {
    expect(
      U.MATCH.hardBoolean(true, elementWithAttribute, 'test').outerHTML
    ).toBe('<div test=""></div>')
  })
  test('(Valid) MATCH.hardBoolean false with element without test attribute to be <div></div>', () => {
    expect(
      U.MATCH.hardBoolean(false, elementWithoutAttribute, 'test').outerHTML
    ).toBe('<div></div>')
  })
  test('(Valid) MATCH.hardBoolean false with element with test attribute to be <div></div>', () => {
    expect(
      U.MATCH.hardBoolean(false, elementWithAttribute, 'test').outerHTML
    ).toBe('<div></div>')
  })
  _getDatatypes('boolean').forEach(function (invalidRender) {
    test(`(Invalid) MATCH.hardBoolean ${invalidRender} to be null`, () => {
      expect(
        U.MATCH.hardBoolean(
          invalidRender,
          T.datatypes.element[0].cloneNode(),
          'test'
        )
      ).toBe(null)
    })
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function matchString() {
  let elementWithoutAttribute = T.datatypes.element[0].cloneNode()
  T.datatypes.string.forEach(function (validRender) {
    let elementWithAttribute = elementWithoutAttribute.cloneNode()
    elementWithAttribute.setAttribute('test', validRender)
    test(`(Valid) MATCH.string ${validRender} to be ${elementWithAttribute.outerHTML}`, () => {
      expect(
        U.MATCH.string(validRender, elementWithoutAttribute, 'test').outerHTML
      ).toBe(elementWithAttribute.outerHTML)
    })
  })
  _getDatatypes('string').forEach(function (invalidRender) {
    test(`(Invalid) MATCH.string ${invalidRender} to be null`, () => {
      expect(
        U.MATCH.string(invalidRender, elementWithoutAttribute, 'test')
      ).toBe(null)
    })
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function matchSlug() {
  let elementWithoutAttribute = T.datatypes.element[0].cloneNode()
  test(`(Valid) MATCH.slug ${T.normalCharacters} to be <div test="${T.normalCharacters}"></div>`, () => {
    expect(
      U.MATCH.slug(T.normalCharacters, elementWithoutAttribute, 'test')
        .outerHTML
    ).toBe(`<div test="${T.normalCharacters}"></div>`)
  })
  test(`(Invalid) MATCH.slug ${T.specialCharacters} to be null`, () => {
    expect(
      U.MATCH.slug(T.specialCharacters, elementWithoutAttribute, 'test')
    ).toBe(null)
  })
  _getDatatypes('string').forEach(function (invalidRender) {
    test(`(Invalid) MATCH.slug ${invalidRender} to be null`, () => {
      expect(U.MATCH.slug(invalidRender, elementWithoutAttribute, 'test')).toBe(
        null
      )
    })
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function matchNumber() {
  let elementWithoutAttribute = T.datatypes.element[0].cloneNode()
  T.datatypes.number.forEach(function (validRender) {
    let elementWithAttribute = elementWithoutAttribute.cloneNode()
    elementWithAttribute.setAttribute('test', validRender)
    test(`(Valid) MATCH.number ${validRender} to be ${elementWithAttribute.outerHTML}`, () => {
      expect(
        U.MATCH.number(validRender, elementWithoutAttribute, 'test').outerHTML
      ).toBe(elementWithAttribute.outerHTML)
    })
  })
  _getDatatypes('number').forEach(function (invalidRender) {
    test(`(Invalid) MATCH.number ${invalidRender} to be null`, () => {
      expect(
        U.MATCH.number(invalidRender, elementWithoutAttribute, 'test')
      ).toBe(null)
    })
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function verifyElement() {
  T.html.validRenders.forEach(function (validRender) {
    test(`(Valid) Render ${validRender.name} as "${validRender.element.outerHTML}"`, () => {
      expect(validRender.render.outerHTML).toBe(validRender.element.outerHTML)
    })
  })
  _getDatatypes().forEach(function (invalidRender) {
    test(`(Invalid) Render ${invalidRender} as null`, () => {
      expect(U.R(invalidRender)).toBe(null)
      expect(console.error).toBeCalled()
    })
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function verifyChildren() {
  test(`(Valid) Render null children as "<div></div>"`, () => {
    expect(U.R('div').outerHTML).toBe('<div></div>')
  })
  test(`(Valid) Render element children as "<div><div></div></div>"`, () => {
    expect(U.R('div', {}, U.R('div')).outerHTML).toBe('<div><div></div></div>')
  })
  test(`(Valid) Render array children as "<div><div></div><div></div><div></div></div>"`, () => {
    expect(U.R('div', {}, [U.R('div'), U.R('div'), U.R('div')]).outerHTML).toBe(
      '<div><div></div><div></div><div></div></div>'
    )
  })
  test(`(Valid) Render string children as "<div>test</div>"`, () => {
    expect(U.R('div', {}, 'test').outerHTML).toBe('<div>test</div>')
  })
  test(`(Valid) Render null children as "<img>"`, () => {
    expect(U.R('img').outerHTML).toBe('<img>')
  })
  test(`(Invalid) Render element children as null`, () => {
    expect(U.R('img', {}, U.R('div'))).toBe(null)
  })
  test(`(Invalid) Render array children as null`, () => {
    expect(U.R('img', {}, [U.R('div'), U.R('div'), U.R('div')])).toBe(null)
  })
  test(`(Invalid) Render string children as null`, () => {
    expect(U.R('img', {}, 'test')).toBe(null)
  })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function verifyAttributes() {
  T.html.validAttributes.forEach(function (validAttributes) {
    validAttributes.tests.forEach(function (testSample) {
      test(`(Valid) Attribute ${validAttributes.name} renders ${testSample.outer}`, () => {
        expect(testSample.render.outerHTML).toBe(testSample.outer)
      })
    })
  })
  // 1. Global attr [Done]
  // 2. Exclusive attrs
  // 3. Multivalid attrs
  // 4. Dependant attrs
  // 5. Deprecated attrs
  // 6. Nonstandard attrs
  // 7. Experimental attrs
}

// =====================================================================================================
// Test Descriptions
// =====================================================================================================
describe('Client Utils (Module Unit Tests)', () => {
  describe('Correct module importing', () => {
    test('Imported', () => {
      expect(U.CLIENT_ENVIRONMENT).toBeDefined()
    })
  })
  describe('slug (function)', slug)
  describe('areEqualArrays (function)', areEqualArrays)
  describe('CHECK (namespace)', () => {
    describe('CHECK [single values] (function)', checkSingleValue)
    describe('CHECK.arrayItems (function)', checkArrayItems)
    describe('CHECK.objectKeys (function)', checkObjectKeys)
    // - CHECK.url (function)
    //describe('CHECK.url (function)', checkUrl)
  })
  // describe('MATCH (namespace)', () => {
  //   describe('MATCH.list', matchList)
  //   describe('MATCH.hardBoolean', matchHardBoolean)
  //   describe('MATCH.string', matchString)
  //   describe('MATCH.slug', matchSlug)
  //   describe('MATCH.number', matchNumber)
  // })
  // describe('RENDER (namespace)', () => {
  //   describe('Verify Render Element', verifyElement)
  //   describe('Verify Render Children', verifyChildren)
  // })
  // describe('Verify Render Attributes', verifyAttributes)
})
