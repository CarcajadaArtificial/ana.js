/**
 * @module Components/Atoms/Paragraph
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary, ContrastValues, ColorValues } from '../../../types'
import classNames from 'classnames'
import { ColorContrastClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//  ____                                       _
// |  _ \ __ _ _ __ __ _  __ _ _ __ __ _ _ __ | |__
// | |_) / _` | '__/ _` |/ _` | '__/ _` | '_ \| '_ \
// |  __/ (_| | | | (_| | (_| | | | (_| | |_) | | | |
// |_|   \__,_|_|  \__,_|\__, |_|  \__,_| .__/|_| |_|
//                       |___/          |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * A Paragraph is one of two base typographical elements, slightly larger than a Label. This element is used for text that has multiple lines and more text after it, maybe a heading or another paragraph. If the content inside the element is a few words long, use a Label instead.
 */
export function rParagraph(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function => {
    return (param: iParagraph = {}): HTMLElement => {
      // Default values
      param = {
        ...{ contrast: 'highest', color: 'grey' },
        ...param,
      }
      let classes = {
        Paragraph: classNames(
          'a-Paragraph',
          ColorContrastClass(param.color, param.contrast, 'txt')
        ).split(' '),
      }

      return a.div(...classes.Paragraph)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iParagraph {
  contrast?: ContrastValues
  color?: ColorValues
}
