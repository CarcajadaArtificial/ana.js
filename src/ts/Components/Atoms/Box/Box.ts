/**
 * @module Components/Atoms/Box
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { Spacing, RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { SpacingClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____            
//  | __ )  _____  __
//  |  _ \ / _ \ \/ /
//  | |_) | (_) >  < 
//  |____/ \___/_/\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 */
export function rBox(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  config
  return (...children: [Node | string | Function]): Function  => {
    return (param: iBox = {}): HTMLElement => {
      // Default values
      param = {
        ...{ padding: 'sgl' },
        ...param,
      }
      let classes = {
        box: classNames('a-Box', SpacingClass('p', param.padding)).split(' ')
      }
  
      return a.div(...classes.box)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iBox {
  padding?: Spacing
}
