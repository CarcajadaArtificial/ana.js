/**
 * @module Components/Molecules/Test
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { rLayout } from '../../Atoms/Layout/Layout'
import { rSurface } from '../../Atoms/Surface/Surface'
import { rBox } from '../../Atoms/Box/Box'
import { rList } from '../../Atoms/List/List'
import { rParagraph } from '../../Atoms/Paragraph/Paragraph'
import { rHeading } from '../../Atoms/Heading/Heading'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _____         _
//  |_   _|__  ___| |_
//    | |/ _ \/ __| __|
//    | |  __/\__ \ |_
//    |_|\___||___/\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export function rTest(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  a.Layout = rLayout(a, config)
  a.Surface = rSurface(a, config)
  a.Box = rBox(a, config)
  a.List = rList(a, config)
  a.Heading = rHeading(a, config)
  a.Paragraph = rParagraph(a, config)

  return (...children: [Node | string | Function]): Function => {
    return (param: iTest = {}): HTMLElement => {
      param = {
        ...{ title: 'Test title', description: 'Test description' },
        ...param,
      }
      let classes = {
        Test: classNames().split(' '),
      }

      return a.Layout(
        a.Surface(
          a.Box(
            a.List(
              a.Heading(param.title)(),
              a.Paragraph(param.description)()
            )()
          )({ padding: 'tpl' })
        )(),
        a.List(...children)({ gap: 'tpl' })
      )({ type: 'right' })
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iTest {
  title?: string
  description?: string
}
