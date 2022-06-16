/**
 * @module Components/Organisms/Page
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { eId } from '../../../utils'

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
  config
  return (...children: [Node | string | Function]): Function => {
    return (param: iPage = {}): HTMLElement | undefined => {
      param = {
        ...{ prependToBody: true },
        ...param,
      }
      let classes = {
        Page: classNames('a-Page').split(' '),
      }

      const page =  a.div(...classes.Page)(...children)

      if (param.prependToBody === true) {
        eId('a-Body').prepend(page)
        return undefined
      } else {
        return page
      }
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iPage {
  prependToBody?: boolean
  // type?: PageTypeDictionary
}
