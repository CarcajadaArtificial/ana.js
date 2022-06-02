import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { Spacing, RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { ListGapClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _     _     _   
//  | |   (_)___| |_ 
//  | |   | / __| __|
//  | |___| \__ \ |_ 
//  |_____|_|___/\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This is an Ana Component, it is not used to render the HTMLElement itself. Instead, this class is used to create a render function based on the global configuration.
 */
export function rList(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function  => {
    return (param: iList = {}): HTMLElement => {
      // Default values
      param = {
        ...{ gap: 'single' },
        ...param,
      }
      let classes = {
        box: classNames(ListGapClass(param.gap)).split(' ')
      }
  
      return a.div(...classes.box)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iList {
  gap?: Spacing
}
