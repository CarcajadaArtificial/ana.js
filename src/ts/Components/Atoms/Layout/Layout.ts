/**
 * @module Components/Atoms/Layout
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { LayoutMargin, LayoutType, RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { LayoutClass } from '../../Particles/Particles'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _                            _
//  | |    __ _ _   _  ___  _   _| |_
//  | |   / _` | | | |/ _ \| | | | __|
//  | |__| (_| | |_| | (_) | |_| | |_
//  |_____\__,_|\__, |\___/ \__,_|\__|
//              |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 */
export function rLayout(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  config
  return (...children: [Node | string | Function]): Function  => {
    return (param: iLayout = {}): HTMLElement => {
      // Default values
      param = {
        ...{ type: 'full', margin: 'full' },
        ...param,
      }
      let classes = {
        layout: classNames(LayoutClass(param.type, param.margin)).split(' ')
      }
  
      let layoutBlocks:HTMLElement[] = []
      if(children.length > 0) {
        layoutBlocks = children.map((block) => {
          return a.div('a-Layout-block')(block)
        })
      }

  
      return a.div(...classes.layout)(...layoutBlocks)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iLayout {
  type?: LayoutType
  margin?: LayoutMargin
}
