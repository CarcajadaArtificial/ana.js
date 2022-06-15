/**
 * @module Components/Atoms/List
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { Spacing, RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { SpacingClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _     _     _   
//  | |   (_)___| |_ 
//  | |   | / __| __|
//  | |___| \__ \ |_ 
//  |_____|_|___/\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 */
export function rList(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function  => {
    return (param: iList = {}): HTMLElement => {
      // Default values
      param = {
        ...{ gap: 'sgl' },
        ...param,
      }
      let classes = {
        box: classNames(`a-List`, SpacingClass('g', param.gap)).split(' ')
      }
  
      return a.div(...classes.box)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iList {
  gap?: Spacing
}
