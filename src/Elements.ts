//   ___ _                   _
//  | __| |___ _ __  ___ _ _| |_ ___
//  | _|| / -_) '  \/ -_) ' \  _(_-<
//  |___|_\___|_|_|_\___|_||_\__/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Children } from './types.ts';
import { Renderer } from './Renderer.ts';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This is an auxiliaty type for the Elements Interface. Used to abstract the render function's part
 * that adds the HTMLElement's classes.
 */
export type RenderClass<T> = (...classes: string[]) => T;

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This is an auxiliaty type for the Elements Interface. Used to abstract the render function's part
 * that adds the HTMLElement's children.
 */
export type RenderChildren<T> = (...children: Children) => T;

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type is used to define a Parent Element rendering function.
 */
export type ParentElement = RenderClass<RenderChildren<Renderer>>;

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type is used to define a Empty Element rendering function.
 */
export type EmptyElement = RenderClass<Renderer>;

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This interface helps in the frameworks usability. Adds Intellisense functionality that uses
 * HTMLElement standards in the Ana.js framework.
 */
export interface Elements {
  a: ParentElement;
  audio: ParentElement;
  blockquote: ParentElement;
  body: ParentElement;
  button: ParentElement;
  canvas: ParentElement;
  caption: ParentElement;
  colgroup: ParentElement;
  data: ParentElement;
  dd: ParentElement;
  del: ParentElement;
  details: ParentElement;
  dialog: ParentElement;
  div: ParentElement;
  fieldset: ParentElement;
  form: ParentElement;
  h1: ParentElement;
  h2: ParentElement;
  h3: ParentElement;
  h4: ParentElement;
  h5: ParentElement;
  h6: ParentElement;
  head: ParentElement;
  html: ParentElement;
  iframe: ParentElement;
  ins: ParentElement;
  label: ParentElement;
  li: ParentElement;
  map: ParentElement;
  meter: ParentElement;
  object: ParentElement;
  ol: ParentElement;
  optgroup: ParentElement;
  option: ParentElement;
  output: ParentElement;
  portal: ParentElement;
  pre: ParentElement;
  progress: ParentElement;
  q: ParentElement;
  script: ParentElement;
  select: ParentElement;
  slot: ParentElement;
  style: ParentElement;
  table: ParentElement;
  tbody: ParentElement;
  td: ParentElement;
  textarea: ParentElement;
  tfoot: ParentElement;
  th: ParentElement;
  thead: ParentElement;
  time: ParentElement;
  tr: ParentElement;
  ul: ParentElement;
  video: ParentElement;

  // Empty Elements
  area: EmptyElement;
  base: EmptyElement;
  br: EmptyElement;
  col: EmptyElement;
  embed: EmptyElement;
  hr: EmptyElement;
  img: EmptyElement;
  input: EmptyElement;
  link: EmptyElement;
  meta: EmptyElement;
  param: EmptyElement;
  source: EmptyElement;
  track: EmptyElement;
  wbr: EmptyElement;

  // Elements with only global attributes
  abbr: ParentElement;
  address: ParentElement;
  article: ParentElement;
  aside: ParentElement;
  b: ParentElement;
  bdi: ParentElement;
  cite: ParentElement;
  code: ParentElement;
  datalist: ParentElement;
  dfn: ParentElement;
  dl: ParentElement;
  dt: ParentElement;
  em: ParentElement;
  figcaption: ParentElement;
  figure: ParentElement;
  footer: ParentElement;
  header: ParentElement;
  i: ParentElement;
  kbd: ParentElement;
  legend: ParentElement;
  main: ParentElement;
  mark: ParentElement;
  nav: ParentElement;
  noscript: ParentElement;
  p: ParentElement;
  picture: ParentElement;
  rp: ParentElement;
  rt: ParentElement;
  ruby: ParentElement;
  s: ParentElement;
  samp: ParentElement;
  section: ParentElement;
  small: ParentElement;
  span: ParentElement;
  strong: ParentElement;
  sub: ParentElement;
  summary: ParentElement;
  sup: ParentElement;
  template: ParentElement;
  title: ParentElement;
  u: ParentElement;
  var: ParentElement;

  // SVG
  circle: ParentElement;
  ellipse: ParentElement;
  line: ParentElement;
  polygon: ParentElement;
  polyline: ParentElement;
  rect: ParentElement;
  defs: ParentElement;
  g: ParentElement;
  marker: ParentElement;
  mask: ParentElement;
  svg: ParentElement;
  switch: ParentElement;
  symbol: ParentElement;
  desc: ParentElement;
  linearGradient: ParentElement;
  radialGradient: ParentElement;
  stop: ParentElement;
  image: ParentElement;
  path: ParentElement;
  text: ParentElement;
  use: ParentElement;

  // Key
  [key: string]: ParentElement | EmptyElement;
}
