/**
 * @module Pages/Colorpage
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import { eId } from '../../../utils'
import { rHeading } from '../../Atoms/Heading/Heading'
import { rList } from '../../Atoms/List/List'
import { rLayout } from '../../Atoms/Layout/Layout'
import { rSurface } from '../../Atoms/Surface/Surface'
import { rBox } from '../../Atoms/Box/Box'
import { rParagraph } from '../../Atoms/Paragraph/Paragraph'
import { rSubheading } from '../../Atoms/Subheading/Subheading'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//    ____      _
//   / ___|___ | | ___  _ __ _ __   __ _  __ _  ___
//  | |   / _ \| |/ _ \| '__| '_ \ / _` |/ _` |/ _ \
//  | |__| (_) | | (_) | |  | |_) | (_| | (_| |  __/
//   \____\___/|_|\___/|_|  | .__/ \__,_|\__, |\___|
//                          |_|          |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export function rColorpage(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function => {
    a.Heading = rHeading(a, config)
    a.Subheaidng = rSubheading(a, config)
    a.List = rList(a, config)
    a.Layout = rLayout(a, config)
    a.Surface = rSurface(a, config)
    a.Box = rBox(a, config)
    a.Paragraph = rParagraph(a, config)

    return (param: iColorpage = {}): HTMLElement | undefined => {
      param = {
        ...{
          prependToBody: true,
          colorNames: [
            'red',
            'violet',
            'blue',
            'cyan',
            'green',
            'lime',
            'yellow',
            'orange',
            'grey',
          ],
          shadeNames: [
            'white',
            'tint-lightest',
            'tint-lighter',
            'tint-light',
            'lightest',
            'lighter',
            'light',
            'base',
            'dark',
            'darker',
            'darkest',
            'shade',
            'black',
          ],
        },
        ...param,
      }

      let colorSections: HTMLElement[] = []

      // Creates the list of color sections
      param.colorNames?.forEach((mainColorName) => {
        let sectionColorShades: HTMLElement[] = []

        // Creates the list of shade subsections for this current color section
        param.shadeNames?.forEach((shadeName) => {
          sectionColorShades.push(colorBlock(a, mainColorName, shadeName))
        })

        // Creates a complete color section
        let section = a.List(
          a.Subheading(
            `${mainColorName.replace(/^\w/, (c) => c.toUpperCase())} Colors`
          )(),
          a.Surface(
            a.Box(
              a.List(
                a
                  .div()(...sectionColorShades)
                  .has({ style: 'display: flex' })
              )({ gap: 'tpl' })
            )({ padding: 'tpl' })
          )({ round: 'dbl' })
        )()

        colorSections.push(section)
      })

      let shadeSections: HTMLElement[] = []

      // Creates the list of shades section
      param.shadeNames?.forEach((mainShadeName) => {
        let sectionShadeColors: HTMLElement[] = []

        // Creates the list of shade subsections for this current color section
        param.colorNames?.forEach((colorName) => {
          sectionShadeColors.push(colorBlock(a, colorName, mainShadeName))
        })

        // Creates a complete color section
        let section = a.List(
          a.Subheading(
            `${mainShadeName.replace(/^\w/, (c) => c.toUpperCase())} Shades`
          )(),
          a.Surface(
            a.Box(
              a.List(
                a
                  .div()(...sectionShadeColors)
                  .has({ style: 'display: flex' })
              )({ gap: 'tpl' })
            )({ padding: 'tpl' })
          )({ round: 'dbl' })
        )()

        shadeSections.push(section)
      })

      let page = a.Surface(
        a.Layout(a.List(...colorSections)(), a.List(...shadeSections)())({ type: 'halves' })
      )({
        contrast: 'mid',
        addClass: { Surface: 'a-Page' },
      })

      if (param.prependToBody === true) {
        eId('a-Body').prepend(page)
        return undefined
      } else {
        return page
      }
    }
  }
}

function colorBlock(
  a: RenderDictionary,
  color: string,
  shade: string
): HTMLElement {
  return a
    .div()()
    .has({ style: colorBlockStyles(color, shade) })
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
function colorBlockStyles(color: string, shade: string): string {
  return `
  height: 50px;
  width: 100%;
  background: var(--clr-${color}-${shade})
`
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iColorpage {
  prependToBody?: boolean
  colorNames?: string[]
  shadeNames?: string[]
}
