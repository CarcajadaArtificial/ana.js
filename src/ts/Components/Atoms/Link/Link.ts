/**
 * @module Components/Atoms/Link
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _     _       _    
//  | |   (_)_ __ | | __
//  | |   | | '_ \| |/ /
//  | |___| | | | |   < 
//  |_____|_|_| |_|_|\_\
//                      
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export function rLink(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  config
  return (...children: [Node | string | Function]): Function => {
    return (param: iLink = {}): HTMLElement => {
      param = {
        ...{ href: '#' },
        ...param,
      }
      let classes = {
        Link: classNames('a-Link').split(' '),
      }

      return a
        .a(...classes.Link)(...children)
        .has({ href: param.href })
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iLink {
  href?: string
}
