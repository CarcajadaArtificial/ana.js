/**
 * @module Components/Atoms/Subheading
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary, ContrastValues, ColorValues } from '../../../types'
import classNames from 'classnames'
import { ColorContrastClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____        _     _                    _ _
//  / ___| _   _| |__ | |__   ___  __ _  __| (_)_ __   __ _
//  \___ \| | | | '_ \| '_ \ / _ \/ _` |/ _` | | '_ \ / _` |
//   ___) | |_| | |_) | | | |  __/ (_| | (_| | | | | | (_| |
//  |____/ \__,_|_.__/|_| |_|\___|\__,_|\__,_|_|_| |_|\__, |
//                                                    |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * A Subheading is the smallest of the three heading types, along with a Heading and Title. It is conventionally used for titles of subsections, multiple of these can be found inside a section.
 */
export function rSubheading(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  config
  return (...children: [Node | string | Function]): Function => {
    return (param: iSubheading = {}): HTMLElement => {
      // Default values
      param = {
        ...{ contrast: 'highest', color: 'grey' },
        ...param,
      }
      let classes = {
        Subheading: classNames(
          'a-Subheading',
          ColorContrastClass(param.color, param.contrast, 'txt')
        ).split(' '),
      }

      return a.div(...classes.Subheading)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iSubheading {
  contrast?: ContrastValues
  color?: ColorValues
}
