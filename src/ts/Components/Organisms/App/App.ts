/**
 * @module Type/App
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { byId } from '../../../utils'
import { rNavbar } from '../../Molecules/Navbar/Navbar'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//      _
//     / \   _ __  _ __
//    / _ \ | '_ \| '_ \
//   / ___ \| |_) | |_) |
//  /_/   \_\ .__/| .__/
//          |_|   |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export function rApp(a: RenderDictionary, config: iAnaConfiguration): Function {
  a.Navbar = rNavbar(a, config)
  // return (...children: [Node | string | Function]): Function => {
    return (param: iApp = {}): HTMLElement | undefined => {
      param = {
        ...{ prependToBody: true },
        ...param,
      }
      let classes = {
        App: classNames('a-App').split(' '),
      }

      const app = a.main(...classes.App)(a.Navbar()())

      if (param.prependToBody === true) {
        byId('app').prepend(app)
        return undefined
      } else {
        return app
      }
    }
  // }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iApp {
  prependToBody?: boolean
}
