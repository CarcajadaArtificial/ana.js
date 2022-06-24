/**
 * @module Render
 */

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

  // Empty Elements
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

  // Elements with only global attributes
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