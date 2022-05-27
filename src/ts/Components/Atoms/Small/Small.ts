//    ___            _ _ 
//   / __|_ __  __ _| | |
//   \__ \ '  \/ _` | | |
//   |___/_|_|_\__,_|_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Atom/Small
 */
import { AnaComponent } from '../../Components'

/**
 * ## Description
 * A Small is the smallest typographical element.
 * 
 * ## Usage
 * - Smaller versions of existing components like Buttons or Chips.
 * - Subtle text that isn’t meant to be always read, like copyright information, terms and conditions, etc.
 * 
 * ## Anatomy
 * 
 * ### Properties
 * - `text?` Every typographical element must be able to render custom text.
 * 
 * ### Styles
 * - `font-size` 8px
 * - `line-height` 12px
 * - `font-weight` 400
 * - `margin-bottom` 0px
 * - `text-align` left
 */
export class Small extends AnaComponent {
  render: Function = (param: iSmall = {}): HTMLElement => {
    const a = this.a
    //param = extendParameterDefaults<tSmall>(param, { text: 'Small' })

    return a
      .div(a.span(param.text).has({ class: this.classRoot }))
      .has({ class: `${this.classRoot}-container` })
  }
}

interface iSmall {
  text?: string
  [key: string]: tSmall
}

type tSmall = undefined | string