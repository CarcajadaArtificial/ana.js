import { ParentElement, EmptyElement } from '../types'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                _
//  |  _ \ ___ _ __   __| | ___ _ __
//  | |_) / _ \ '_ \ / _` |/ _ \ '__|
//  |  _ <  __/ | | | (_| |  __/ |
//  |_| \_\___|_| |_|\__,_|\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This dictionary is a compendium that contains instances of all of the `Element` and `Attribute` classes. Here lies what it means to be correct or incorrect in accordance to me. I studied every HTML reference I could find, it ended with this standard.
 */
export interface Render {
  a: ParentElement
  audio: ParentElement
  blockquote: ParentElement
  body: ParentElement
  button: ParentElement
  canvas: ParentElement
  caption: ParentElement
  colgroup: ParentElement
  data: ParentElement
  dd: ParentElement
  del: ParentElement
  details: ParentElement
  dialog: ParentElement
  div: ParentElement
  fieldset: ParentElement
  form: ParentElement
  h1: ParentElement
  h2: ParentElement
  h3: ParentElement
  h4: ParentElement
  h5: ParentElement
  h6: ParentElement
  head: ParentElement
  html: ParentElement
  iframe: ParentElement
  ins: ParentElement
  label: ParentElement
  li: ParentElement
  map: ParentElement
  meter: ParentElement
  object: ParentElement
  ol: ParentElement
  optgroup: ParentElement
  option: ParentElement
  output: ParentElement
  portal: ParentElement
  pre: ParentElement
  progress: ParentElement
  q: ParentElement
  script: ParentElement
  select: ParentElement
  slot: ParentElement
  style: ParentElement
  table: ParentElement
  tbody: ParentElement
  td: ParentElement
  textarea: ParentElement
  tfoot: ParentElement
  th: ParentElement
  thead: ParentElement
  time: ParentElement
  tr: ParentElement
  ul: ParentElement
  video: ParentElement

  // Empty Elements
  area: EmptyElement
  base: EmptyElement
  br: EmptyElement
  col: EmptyElement
  embed: EmptyElement
  hr: EmptyElement
  img: EmptyElement
  input: EmptyElement
  link: EmptyElement
  meta: EmptyElement
  param: EmptyElement
  source: EmptyElement
  track: EmptyElement
  wbr: EmptyElement

  // Elements with only global attributes
  abbr: ParentElement
  address: ParentElement
  article: ParentElement
  aside: ParentElement
  b: ParentElement
  bdi: ParentElement
  cite: ParentElement
  code: ParentElement
  datalist: ParentElement
  dfn: ParentElement
  dl: ParentElement
  dt: ParentElement
  em: ParentElement
  figcaption: ParentElement
  figure: ParentElement
  footer: ParentElement
  header: ParentElement
  i: ParentElement
  kbd: ParentElement
  legend: ParentElement
  main: ParentElement
  mark: ParentElement
  nav: ParentElement
  noscript: ParentElement
  p: ParentElement
  picture: ParentElement
  rp: ParentElement
  rt: ParentElement
  ruby: ParentElement
  s: ParentElement
  samp: ParentElement
  section: ParentElement
  small: ParentElement
  span: ParentElement
  strong: ParentElement
  sub: ParentElement
  summary: ParentElement
  sup: ParentElement
  template: ParentElement
  title: ParentElement
  u: ParentElement
  var: ParentElement

  // SVG
  circle: Function
  ellipse: Function
  line: Function
  polygon: Function
  polyline: Function
  rect: Function
  defs: Function
  g: Function
  marker: Function
  mask: Function
  svg: Function
  switch: Function
  symbol: Function
  desc: Function
  linearGradient: Function
  radialGradient: Function
  stop: Function
  image: Function
  path: Function
  text: Function
  use: Function
}
