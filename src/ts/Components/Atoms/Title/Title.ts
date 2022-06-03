/**
 * @module Atoms/Title
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary, ContrastValues, ColorValues } from '../../../types'
import classNames from 'classnames'
import { ColorContrastClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _____ _ _   _
//  |_   _(_) |_| | ___
//    | | | | __| |/ _ \
//    | | | | |_| |  __/
//    |_| |_|\__|_|\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * A Title is the largest heading of the three heading types, the other two being the Heading and Subheading. It is conventionally used for page title and only one can be found, usually at the top of the page.
 */
export function rTitle(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function => {
    return (param: iTitle = {}): HTMLElement => {
      // Default values
      param = {
        ...{ contrast: 'highest', color: 'grey' },
        ...param,
      }
      let classes = {
        Title: classNames(
          'a-Title',
          ColorContrastClass(param.color, param.contrast, 'txt')
        ).split(' '),
      }

      return a.div(...classes.Title)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iTitle {
  contrast?: ContrastValues
  color?: ColorValues
}
