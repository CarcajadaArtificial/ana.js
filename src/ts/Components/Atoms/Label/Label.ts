/**
 * @module Atoms/Label
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import {
  RenderDictionary,
  ContrastValues,
  ColorValues,
  TextElements,
  AddClassDictionary,
} from '../../../types'
import classNames from 'classnames'
import { ColorContrastClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _          _          _
//  | |    __ _| |__   ___| |
//  | |   / _` | '_ \ / _ \ |
//  | |__| (_| | |_) |  __/ |
//  |_____\__,_|_.__/ \___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * A Label is one of two base typographical elements, slightly smaller than a Paragraph. This element is used for short text, a few words at most. For multilinear text, use a Paragraph instead
 */
export function rLabel(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function => {
    return (param: iLabel = {}): HTMLElement => {
      // Default values
      param = {
        ...{ contrast: 'highest', color: 'grey', tag: 'span', addClass: {} },
        ...param,
      }
      let classes = {
        Label: classNames(
          'a-Label',
          ColorContrastClass(param.color, param.contrast, 'txt'),
          param.addClass ? param.addClass.Label : ''
        ).split(' '),
      }

      return param.tag
        ? a[param.tag](...classes.Label)(...children)
        : a.span(...classes.Label)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iLabel {
  contrast?: ContrastValues
  color?: ColorValues
  tag?: TextElements
  addClass?: AddClassDictionary
}
