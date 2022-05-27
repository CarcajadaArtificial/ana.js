//   _____       _
//  |_   _|__ __| |_ _ __  __ _ __ _ ___
//    | |/ -_|_-<  _| '_ \/ _` / _` / -_)
//    |_|\___/__/\__| .__/\__,_\__, \___|
//                  |_|        |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/Organism/Testpage
 * Description
 *
 * Element, description, usage, properties, variations
 */
import { AnaComponent } from '../../Components'
//import { Title } from '../atoms/title'
// import { Layout } from '../atoms/layout'

/**
 * Usage
 */
export class Testpage extends AnaComponent {
  render: Function = (param: iTestpage = {}): void => {
    // const a = this.a
  }
}

/**
 * Properties
 */
interface iTestpage {
  name?: string
  element?: HTMLElement
  variations?: [{ [key: string]: string | HTMLElement }]
  [key: string]: tTestpage
}

type tTestpage =
  | undefined
  | string
  | HTMLElement
  | { [key: string]: string }
  | [{ [key: string]: string | HTMLElement }]
