/**
 * @module Components/Atom/Small
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                  _ _
//  / ___| _ __ ___   __ _| | |
//  \___ \| '_ ` _ \ / _` | | |
//   ___) | | | | | | (_| | | |
//  |____/|_| |_| |_|\__,_|_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export function rSmall(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function => {
    return (param: iSmall = {}): HTMLElement => {
      param = {
        ...{},
        ...param,
      }
      let classes = {
        Small: classNames().split(' '),
      }

      return a.div(...classes.Small)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iSmall {}
