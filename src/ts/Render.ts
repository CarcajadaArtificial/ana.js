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

import { AttributeValuesDictionary } from './types'

/**
 * This dictionary is a compendium that contains instances of all of the `Element` and `Attribute` classes. Here lies what it means to be correct or incorrect in accordance to me. I studied every HTML reference I could find, it ended with this standard.
 */
export class Render {
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * Checks if a function is being passed as children to an element. Usually because of a missed parenthesis: Incorrect: `div('class')(div('class'))` Correct: `div('class')(div('class')())`
   * @param children This array of *potential* children, must have the functions filtered out. These happen when the developer using this framework forgets to add a second set of parenthesis when rendering an element.
   * @returns An array of children, with the functions filtered out.
   */
  private checkChildren(children: [Node | string | Function]): [Node | string] {
    var checkedChildren: any[] = []
    children.forEach((child) => {
      if (typeof child === 'function') {
        // Error: Recieved a function as an element's child. This is because the second parentesis was missed: a.div() => a.div()()
      } else {
        checkedChildren.push(child)
      }
    })
    return checkedChildren as [Node | string]
  }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   By design, Ana.js gives priority to two properties of an HTML element. Firstly, in their classes, the most important of them all. There shouldn't be any filler elements without classes, every part of the interface must be designed with element classes in mind. Secondly, the children are rendered inside the element. Their functionality is essential for the framework, they are the most basic feature, demonstrated here: `a.div(...classes)(...children)`.
   * @param classes It is the only attribute not added with the `.has()` function, it is special that way, first the class, then everything else.
   * @param children The array of elements to be placed inside this one.
   * @returns An element, fully classed, with the list of children inside of it.
   */
  private renderWithChildren =
    (elementName: string): Function =>
    (...classes: string[]): Function => {
      let htmlelement = document.createElement(elementName)
      if (classes.length > 0) {
        htmlelement.classList.add(...classes)
      }
      return (...children: [Node | string | Function]): HTMLElement => {
        htmlelement.append(...this.checkChildren(children))
        return htmlelement
      }
    }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * What is an "empty element"? It's not designed to have any other elements inside of it. Examples of this are: `<input />`, `<img />`, `<link />`, `<meta />`, etc. This function renders these kinds of elements. `a.input(class).has(attributes)`.
   * @param classes The only input that an empty element need is a class. Anything else will be added later, using auxiliary functions like 'has'.
   * @returns A complete html element without any attributes other than the class.
   */
  private renderWithoutChildren =
    (elementName: string): Function =>
    (...classes: string[]): HTMLElement => {
      let htmlelement = document.createElement(elementName)
      if (classes.length > 0) {
        htmlelement.classList.add(...classes)
      }
      return htmlelement
    }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * This function creates an SVGElement renderer, and it is the step where the framework's configuration affects the way the svgs are rendered. This function is necesary be
   * @returns A render function for an SVGElement.
   *
   * @todo Check if Obejct.getPrototypeOf(child).constructor.name starts with "HTML", and throw an error if so.
   */
  private renderSVG =
    (elementName: string): Function =>
    (...children: [Node | string | Function]): Function =>
    (attributes: AttributeValuesDictionary): Node => {
      let svgElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        elementName
      )
      svgElement.append(...this.checkChildren(children))
      if (attributes) {
        svgElement.has(attributes)
      }
      return svgElement
    }

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /**
   * Anchor description
   */
  a: Function = this.renderWithChildren('a')
  /**
   * Audio description
   */
  audio: Function = this.renderWithChildren('audio')
  blockquote: Function = this.renderWithChildren('blockquote')
  body: Function = this.renderWithChildren('body')
  button: Function = this.renderWithChildren('button')
  canvas: Function = this.renderWithChildren('canvas')
  caption: Function = this.renderWithChildren('caption')
  colgroup: Function = this.renderWithChildren('colgroup')
  data: Function = this.renderWithChildren('data')
  dd: Function = this.renderWithChildren('dd')
  del: Function = this.renderWithChildren('del')
  details: Function = this.renderWithChildren('details')
  dialog: Function = this.renderWithChildren('dialog')
  div: Function = this.renderWithChildren('div')
  fieldset: Function = this.renderWithChildren('fieldset')
  form: Function = this.renderWithChildren('form')
  h1: Function = this.renderWithChildren('h1')
  h2: Function = this.renderWithChildren('h2')
  h3: Function = this.renderWithChildren('h3')
  h4: Function = this.renderWithChildren('h4')
  h5: Function = this.renderWithChildren('h5')
  h6: Function = this.renderWithChildren('h6')
  head: Function = this.renderWithChildren('head')
  html: Function = this.renderWithChildren('html')
  iframe: Function = this.renderWithChildren('iframe')
  ins: Function = this.renderWithChildren('ins')
  label: Function = this.renderWithChildren('label')
  li: Function = this.renderWithChildren('li')
  map: Function = this.renderWithChildren('map')
  meter: Function = this.renderWithChildren('meter')
  object: Function = this.renderWithChildren('object')
  ol: Function = this.renderWithChildren('ol')
  optgroup: Function = this.renderWithChildren('optgroup')
  option: Function = this.renderWithChildren('option')
  output: Function = this.renderWithChildren('output')
  portal: Function = this.renderWithChildren('portal')
  pre: Function = this.renderWithChildren('pre')
  progress: Function = this.renderWithChildren('progress')
  q: Function = this.renderWithChildren('q')
  script: Function = this.renderWithChildren('script')
  select: Function = this.renderWithChildren('select')
  slot: Function = this.renderWithChildren('slot')
  style: Function = this.renderWithChildren('style')
  table: Function = this.renderWithChildren('table')
  tbody: Function = this.renderWithChildren('tbody')
  td: Function = this.renderWithChildren('td')
  textarea: Function = this.renderWithChildren('textarea')
  tfoot: Function = this.renderWithChildren('tfoot')
  th: Function = this.renderWithChildren('th')
  thead: Function = this.renderWithChildren('thead')
  time: Function = this.renderWithChildren('time')
  tr: Function = this.renderWithChildren('tr')
  ul: Function = this.renderWithChildren('ul')
  video: Function = this.renderWithChildren('video')

  // Empty Elements
  area: Function = this.renderWithoutChildren('area')
  base: Function = this.renderWithoutChildren('base')
  br: Function = this.renderWithoutChildren('br')
  col: Function = this.renderWithoutChildren('col')
  embed: Function = this.renderWithoutChildren('embed')
  hr: Function = this.renderWithoutChildren('hr')
  img: Function = this.renderWithoutChildren('img')
  input: Function = this.renderWithoutChildren('input')
  link: Function = this.renderWithoutChildren('link')
  meta: Function = this.renderWithoutChildren('meta')
  param: Function = this.renderWithoutChildren('param')
  source: Function = this.renderWithoutChildren('source')
  track: Function = this.renderWithoutChildren('track')
  wbr: Function = this.renderWithoutChildren('wbr')

  // Elements with only global attributes
  abbr: Function = this.renderWithChildren('abbr')
  address: Function = this.renderWithChildren('address')
  article: Function = this.renderWithChildren('article')
  aside: Function = this.renderWithChildren('aside')
  b: Function = this.renderWithChildren('b')
  bdi: Function = this.renderWithChildren('bdi')
  cite: Function = this.renderWithChildren('cite')
  code: Function = this.renderWithChildren('code')
  datalist: Function = this.renderWithChildren('datalist')
  dfn: Function = this.renderWithChildren('dfn')
  dl: Function = this.renderWithChildren('dl')
  dt: Function = this.renderWithChildren('dt')
  em: Function = this.renderWithChildren('em')
  figcaption: Function = this.renderWithChildren('figcaption')
  figure: Function = this.renderWithChildren('figure')
  footer: Function = this.renderWithChildren('footer')
  header: Function = this.renderWithChildren('header')
  i: Function = this.renderWithChildren('i')
  kbd: Function = this.renderWithChildren('kbd')
  legend: Function = this.renderWithChildren('legend')
  main: Function = this.renderWithChildren('main')
  mark: Function = this.renderWithChildren('mark')
  nav: Function = this.renderWithChildren('nav')
  noscript: Function = this.renderWithChildren('noscript')
  p: Function = this.renderWithChildren('p')
  picture: Function = this.renderWithChildren('picture')
  rp: Function = this.renderWithChildren('rp')
  rt: Function = this.renderWithChildren('rt')
  ruby: Function = this.renderWithChildren('ruby')
  s: Function = this.renderWithChildren('s')
  samp: Function = this.renderWithChildren('samp')
  section: Function = this.renderWithChildren('section')
  small: Function = this.renderWithChildren('small')
  span: Function = this.renderWithChildren('span')
  strong: Function = this.renderWithChildren('strong')
  sub: Function = this.renderWithChildren('sub')
  summary: Function = this.renderWithChildren('summary')
  sup: Function = this.renderWithChildren('sup')
  template: Function = this.renderWithChildren('template')
  title: Function = this.renderWithChildren('title')
  u: Function = this.renderWithChildren('u')
  var: Function = this.renderWithChildren('var')

  // SVG
  circle: Function = this.renderSVG('circle')
  ellipse: Function = this.renderSVG('ellipse')
  line: Function = this.renderSVG('line')
  polygon: Function = this.renderSVG('polygon')
  polyline: Function = this.renderSVG('polyline')
  rect: Function = this.renderSVG('rect')
  defs: Function = this.renderSVG('defs')
  g: Function = this.renderSVG('g')
  marker: Function = this.renderSVG('marker')
  mask: Function = this.renderSVG('mask')
  svg: Function = this.renderSVG('svg')
  switch: Function = this.renderSVG('switch')
  symbol: Function = this.renderSVG('symbol')
  desc: Function = this.renderSVG('desc')
  linearGradient: Function = this.renderSVG('linearGradient')
  radialGradient: Function = this.renderSVG('radialGradient')
  stop: Function = this.renderSVG('stop')
  image: Function = this.renderSVG('image')
  path: Function = this.renderSVG('path')
  text: Function = this.renderSVG('text')
  use: Function = this.renderSVG('use')
}
