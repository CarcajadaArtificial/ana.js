import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { ColorValues, ContrastValues, RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { ColorContrastClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____              __
//  / ___| _   _ _ __ / _| __ _  ___ ___
//  \___ \| | | | '__| |_ / _` |/ __/ _ \
//   ___) | |_| | |  |  _| (_| | (_|  __/
//  |____/ \__,_|_|  |_|  \__,_|\___\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This is an Ana Component, it is not used to render the HTMLElement itself. Instead, this class is used to create a render function based on the global configuration.
 */
export function rSurface(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function => {
    return (param: iSurface = {}): HTMLElement => {
      // Default values
      param = {
        ...{ contrast: 'highest', background: 'grey' },
        ...param,
      }
      let classes = {
        surface: classNames(ColorContrastClass(param.background, param.contrast, 'bg')).split(' '),
      }

      return a.div(...classes.surface)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iSurface {
  background?: ColorValues
  contrast?: ContrastValues
  // round?:
  // elevation?
}
