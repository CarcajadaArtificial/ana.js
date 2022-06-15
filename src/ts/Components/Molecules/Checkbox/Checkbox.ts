/**
 * @module Components/Molecules/Checkbox
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { rLabel } from '../../Atoms/Label/Label'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//    ____ _               _    _
//   / ___| |__   ___  ___| | _| |__   _____  __
//  | |   | '_ \ / _ \/ __| |/ / '_ \ / _ \ \/ /
//  | |___| | | |  __/ (__|   <| |_) | (_) >  <
//   \____|_| |_|\___|\___|_|\_\_.__/ \___/_/\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export function rCheckbox(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  a.Label = rLabel(a, config)
  return (...children: [Node | string | Function]): Function => {
    return (param: iCheckbox = {}): HTMLElement => {
      param = {
        ...{ disabled: false, checked: false },
        ...param,
      }
      let classes = {
        Checkbox: classNames('a-Checkbox').split(' '),
        Container: classNames('a-Checkbox_container').split(' '),
      }

      return a.Label(
        a.input(classes.Checkbox)
          .has({ type: 'checkbox', disabled: param.disabled, checked: param.checked }),
        ...children
      )({ tag: 'label', addClass: { Label: classes.Container } })
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iCheckbox {
  disabled?: boolean
  checked?: boolean
}
