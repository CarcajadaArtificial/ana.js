import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
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
 * This is an Ana Component, it is not used to render the HTMLElement itself. Instead, this class is used to create a render function based on the global configuration.
 */
export function rLayout(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function  => {
    return (param: iLayout = {}): HTMLElement => {
      // Default values
      param = {
        ...{ layoutType: 'full', layoutMargin: 'full' },
        ...param,
      }
      let classes = {
        layout: classNames(LayoutClass(param.layoutType, param.layoutMargin)).split(' ')
      }
  
      let layoutBlocks:HTMLElement[] = []
      if(children.length > 0) {
        layoutBlocks = children.map((block) => {
          return a.div('a-layout-block')(block)
        })
      }

  
      return a.div(...classes.layout)(...layoutBlocks)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iLayout {
  layoutType?:
    | 'full'
    | 'center'
    | 'focus'
    | 'halves'
    | 'thirds'
    | 'quarters'
    | 'right'
    | 'left'

  layoutMargin?: 'full' | 'single' | 'none'
}
