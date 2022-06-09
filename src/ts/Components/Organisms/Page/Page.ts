/**
 * @module Organisms/Page
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                  
//  |  _ \ __ _  __ _  ___ 
//  | |_) / _` |/ _` |/ _ \
//  |  __/ (_| | (_| |  __/
//  |_|   \__,_|\__, |\___|
//              |___/      
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export function rPage(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function => {
    return (param: iPage = {}): HTMLElement => {
      param = {
        ...{},
        ...param,
      }
      let classes = {
        Page: classNames('a-Page').split(' '),
      }

      return a.div(...classes.Page)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iPage {
  // prependToBody?: boolean
  // type?: PageTypeDictionary
}
