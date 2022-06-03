/**
 * @module Atoms/Box
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { Spacing, RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { BoxMarginClass } from '../../Particles/Particles'

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
  return (...children: [Node | string | Function]): Function  => {
    return (param: iBox = {}): HTMLElement => {
      // Default values
      param = {
        ...{ margin: 'single' },
        ...param,
      }
      let classes = {
        box: classNames(BoxMarginClass(param.margin)).split(' ')
      }
  
      return a.div(...classes.box)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iBox {
  margin?: Spacing
}
