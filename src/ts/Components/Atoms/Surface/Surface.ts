/**
 * @module Components/Atoms/Surface
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import {
  AddClassDictionary,
  ColorValues,
  ContrastValues,
  RenderDictionary,
  Spacing,
} from '../../../types'
import classNames from 'classnames'
import { ColorContrastClass, SpacingClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____              __
//  / ___| _   _ _ __ / _| __ _  ___ ___
//  \___ \| | | | '__| |_ / _` |/ __/ _ \
//   ___) | |_| | |  |  _| (_| | (_|  __/
//  |____/ \__,_|_|  |_|  \__,_|\___\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export function rSurface(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function => {
    return (param: iSurface = {}): HTMLElement => {
      // Default values
      param = {
        ...{
          contrast: 'highest',
          background: 'grey',
          round: 'sgl',
          elevation: 'sgl',
          addClass: {},
        },
        ...param,
      }
      let classes = {
        Surface: classNames(
          ColorContrastClass(param.background, param.contrast, 'bg'),
          SpacingClass('r', param.round),
          SpacingClass('l', param.elevation),
          param.addClass ? param.addClass.Surface : ''
        ).split(' '),
      }

      return a.div(...classes.Surface)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iSurface {
  background?: ColorValues
  contrast?: ContrastValues
  round?: Spacing
  elevation?: Spacing
  addClass?: AddClassDictionary
}
