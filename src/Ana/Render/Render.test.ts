import { dAnaConfiguration } from '../Ana/Ana.interface'
import { globalOverrides } from '../global'
import { ReactiveRenderer } from './Render'
import { Render } from './Render.interface'

globalOverrides(dAnaConfiguration)

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                _             _____         _
//  |  _ \ ___ _ __   __| | ___ _ __  |_   _|__  ___| |_
//  | |_) / _ \ '_ \ / _` |/ _ \ '__|   | |/ _ \/ __| __|
//  |  _ <  __/ | | | (_| |  __/ |      | |  __/\__ \ |_
//  |_| \_\___|_| |_|\__,_|\___|_|      |_|\___||___/\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('Render', () => {
  const renderer = new ReactiveRenderer()
  const a: { [key: string]: any } = renderer.render<Render>()

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  describe('createRenderer', () => {
    test('Returns a defined instance of a Proxy object', () => {
      expect(a).toBeTruthy()
    })
  })

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  describe('renderSVG', () => {
    test('Renders SVGElements using every string in config.svgElements as name.', () => {
      dAnaConfiguration.svgElements.forEach((name) => {
        let elementType: string = a[name]()().constructor.name
        // Checks that the element type starts with 'SVG', and ends with 'Element'.
        // SVGElement passes, SVGCircleElement passes, SVGSVGElement passes ...
        expect(elementType.substring(0, 3)).toBe('SVG')
        expect(elementType.substring(elementType.length - 7)).toBe('Element')
      })
    })

    test('Render an SVG Element with children', () => {
      dAnaConfiguration.svgElements.forEach((name) => {
        expect(a.svg(a[name]()())().outerHTML).toBe(
          `<svg><${name}></${name}></svg>`
        )
      })
    })

    test('Render an SVG Element with attributes', () => {
      dAnaConfiguration.svgElements.forEach((name) => {
        expect(a[name]()({ class: 'test' }).outerHTML).toBe(
          `<${name} class="test"></${name}>`
        )
      })
    })
  })

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  describe('renderWithoutChildren', () => {
    test('Renders empty elements using every string in config.emptyElement as name.', () => {
      dAnaConfiguration.emptyElements.forEach((name) => {
        let elementType: string = a[name]().constructor.name
        // Checks that the element type starts with 'HTML', and ends with 'Element'.
        expect(elementType.substring(0, 4)).toBe('HTML')
        expect(elementType.substring(elementType.length - 7)).toBe('Element')
      })
    })

    test('Render an SVG Element with class', () => {
      dAnaConfiguration.emptyElements.forEach((name) => {
        expect(a[name]('test').outerHTML).toBe(`<${name} class="test">`)
      })
    })

    test('Render an SVG Element with attributes', () => {
      dAnaConfiguration.emptyElements.forEach((name) => {
        expect(a[name]().has({ class: 'test' }).outerHTML).toBe(
          `<${name} class="test">`
        )
      })
    })
  })

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  describe('renderWithChildren', () => {
    // prettier-ignore
    const parentElements = ['a','audio','blockquote','body','button','canvas','caption','colgroup','data','dd','del','details','dialog','div','fieldset','form','h1','h2','h3','h4','h5','h6','head','html','iframe','ins','label','li','map','meter','object','ol','optgroup','option','output','portal','pre','progress','q','script','select','slot','style','table','tbody','td','textarea','tfoot','th','thead','time','tr','ul','video','abbr','address','article','aside','b','bdi','cite','code','datalist','dfn','dl','dt','em','figcaption','figure','footer','header','i','kbd','legend','main','mark','nav','noscript','p','picture','rp','rt','ruby','s','samp','section','small','span','strong','sub','summary','sup','title','u','var']

    test('Renders empty elements using every string in config.emptyElement as name.', () => {
      parentElements.forEach((name) => {
        let elementType: string = a[name]()().constructor.name
        // Checks that the element type starts with 'HTML', and ends with 'Element'.
        expect(elementType.substring(0, 4)).toBe('HTML')
        expect(elementType.substring(elementType.length - 7)).toBe('Element')
      })
    })

    test('Render a Parent Element with class', () => {
      parentElements.forEach((name) => {
        expect(a[name]('test')().outerHTML).toBe(
          `<${name} class="test"></${name}>`
        )
        expect(a[name]('test', 'foo', 'bar')().outerHTML).toBe(
          `<${name} class="test foo bar"></${name}>`
        )
        expect(a[name]('test foo bar')().outerHTML).toBe(
          `<${name} class="test foo bar"></${name}>`
        )
        expect(a[name]('test foo', 'bar', 'a b c')().outerHTML).toBe(
          `<${name} class="test foo bar a b c"></${name}>`
        )
      })
    })

    test('Render a Parent Elements with children', () => {
      parentElements.forEach((parentName) => {
        parentElements.forEach((childName) => {
          expect(a[parentName]()(a[childName]()()).outerHTML).toBe(
            `<${parentName}><${childName}></${childName}></${parentName}>`
          )
        })
      })
    })

    test('Render a Parent Element with attributes', () => {
      parentElements.forEach((name) => {
        expect(a[name]()().has({ class: 'test' }).outerHTML).toBe(
          `<${name} class="test"></${name}>`
        )
      })
    })
  })
})
