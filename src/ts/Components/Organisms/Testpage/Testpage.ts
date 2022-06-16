/**
 * @module Components/Organisms/Testpage
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { rLayout } from '../../Atoms/Layout/Layout'
import { rBox } from '../../Atoms/Box/Box'
import { rSurface } from '../../Atoms/Surface/Surface'
import { rTitle } from '../../Atoms/Title/Title'
import { rParagraph } from '../../Atoms/Paragraph/Paragraph'
import { rCheckbox } from '../../Molecules/Checkbox/Checkbox'
import { rList } from '../../Atoms/List/List'
import { rSubheading } from '../../Atoms/Subheading/Subheading'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _____         _
//  |_   _|__  ___| |_ _ __   __ _  __ _  ___
//    | |/ _ \/ __| __| '_ \ / _` |/ _` |/ _ \
//    | |  __/\__ \ |_| |_) | (_| | (_| |  __/
//    |_|\___||___/\__| .__/ \__,_|\__, |\___|
//                    |_|          |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export function rTestpage(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  a.Layout = rLayout(a, config)
  a.Box = rBox(a, config)
  a.Surface = rSurface(a, config)
  a.Title = rTitle(a, config)
  a.Paragraph = rParagraph(a, config)
  a.Checkbox = rCheckbox(a, config)
  a.List = rList(a, config)
  a.Subheading = rSubheading(a, config)

  return (...children: [Node | string | Function]): Function => {
    return (param: iTestpage = {}): HTMLElement => {
      param = {
        ...{
          implemented: false,
          documented: false,
          tested: false,
          title: 'Example test',
          description: 'This is the description of an example test.',
          version: 'v0.0.0',
        },
        ...param,
      }
      let classes = {
        Testpage: classNames('a-Testpage').split(' '),
      }
      classes

      return a.Surface(
        a.List(
          a.Layout(
            a.Surface(
              a.Box(
                a.Title(param.title)(),
                a.Paragraph(param.description)()
              )({ padding: 'tpl' })
            )(),
            a.Surface(
              a.Box(
                a.List(
                  a.Subheading(`${param.version} progress`)(),
                  a.Checkbox('Implemented')({
                    disabled: true,
                    checked: param.implemented,
                  }),
                  a.Checkbox('Documented')({
                    disabled: true,
                    checked: param.documented,
                  }),
                  a.Checkbox('Tested')({
                    disabled: true,
                    checked: param.tested,
                  })
                )({ gap: 'dbl' })
              )({ padding: 'tpl' })
            )()
          )({ type: 'left' }),
          ...children
        )({ gap: 'tpl' })
      )({ contrast: 'high', addClass: { Surface: 'a-Testpage' } })
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iTestpage {
  implemented?: boolean
  documented?: boolean
  tested?: boolean
  title?: string
  description?: string
  version?: string
}
