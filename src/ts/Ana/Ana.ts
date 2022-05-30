import { iAna, iAnaConfiguration } from './Ana.interface'
import { getElements } from '../Elements/Elements'
import { RenderDictionary } from '../types'
import { AttributeValuesDictionary, MatchFunctionsDictionary } from '../types'
import * as utils from '../utils'
// import { rDisplay } from '../Components/Atoms/Display/Display'
// import { rTitle } from '../Components/Atoms/Title/Title'
// import { rTestpage } from '../Components/Organisms/Testpage/Testpage'

declare global {
  interface HTMLElement {
    has(attributes: AttributeValuesDictionary): HTMLElement
    setAttributes(attributes: AttributeValuesDictionary): HTMLElement
  }
}

declare class Window {
  static matchDictionary: MatchFunctionsDictionary
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//       _
//      / \   _ __   __ _
//     / _ \ | '_ \ / _` |
//    / ___ \| | | | (_| |
//   /_/   \_\_| |_|\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 * @module Ana
 */
export class Ana implements iAna {
  /**
   * 
   */
  configuration: iAnaConfiguration = {
    standardVerificationMode: true,
  }

  /**
   *
   */
  eId: Function = utils.eId

  /**
   * 
   */
   private has = function (
    this: HTMLElement,
    attributes: AttributeValuesDictionary
  ): HTMLElement {
    let tagName = this.tagName.toLowerCase()
    if (Window.matchDictionary[tagName](attributes)) {
      return this.setAttributes(attributes)
    } else {
      return this
    }
  }

  /**
   * 
   */
  private setAttributes = function (
    this: HTMLElement,
    attributes: AttributeValuesDictionary
  ): HTMLElement {
    Object.keys(attributes).forEach((attributeName: string) => {
      let attribute = attributes[attributeName]
      if (typeof attribute === 'string') {
        this.setAttribute(attributeName, attribute)
      } else if (typeof attribute === 'boolean') {
        if(attribute === true) {
          this.setAttribute(attributeName, '')
        } else {
          this.removeAttribute(attributeName)
        }
      } else {
        let listenerFunction: Function = attribute
        this.addEventListener(attributeName, (event: Event) => {
          listenerFunction(event)
        })
      }
    })
    return this
  }

  /**
   * 
   */
  render: Function = (): RenderDictionary => {
    HTMLElement.prototype.has = this.has
    HTMLElement.prototype.setAttributes = this.setAttributes
    let elements = getElements(this.configuration)
    // let atoms = {
    //   Display: rDisplay(elements, this.configuration),
    //   Title: rTitle(elements, this.configuration),
    // }
    // let organisms = {
    //   Testpage: rTestpage(elements, this.configuration)
    // }
    // return { ...elements, ...atoms, ...organisms }
    return { ...elements }
  }

  /**
   * 
   */
  constructor(configuration: iAnaConfiguration = {}) {
    this.configuration = { ...this.configuration, ...configuration }
  }
}
