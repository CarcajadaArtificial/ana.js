/**
 * @module Components/Atoms/Box
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import { Box, cBox, dBox, iBox } from './Box.interface'
import { applyDefaultParameters } from '../../../utils'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____
//  | __ )  _____  __
//  |  _ \ / _ \ \/ /
//  | |_) | (_) >  <
//  |____/ \___/_/\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
export function rBox(a: RenderDictionary, config: iAnaConfiguration): Function {
  config
  return (...children: [Node | string | Function]): Function => {
    return (param: iBox = {}): HTMLElement => {
      let p: Box = applyDefaultParameters<Box, iBox>(dBox, param)
      let c = cBox(p)

      return a.div(c.box)(...children)
    }
  }
}
