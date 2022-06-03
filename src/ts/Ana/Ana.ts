import { iAna, iAnaConfiguration } from './Ana.interface'
import { getElements } from '../Elements/Elements'
import { RenderDictionary } from '../types'
import { AttributeValuesDictionary, MatchFunctionsDictionary } from '../types'
import * as utils from '../utils'
import { rLayout } from '../Components/Atoms/Layout/Layout'
import { rSurface } from '../Components/Atoms/Surface/Surface'
import { rBox } from '../Components/Atoms/Box/Box'
import { rList } from '../Components/Atoms/List/List'
import { rTitle } from '../Components/Atoms/Title/Title'
import { rHeading } from '../Components/Atoms/Heading/Heading'
import { rSubheading } from '../Components/Atoms/Subheading/Subheading'
import { rParagraph } from '../Components/Atoms/Paragraph/Paragraph'
import { rLabel } from '../Components/Atoms/Label/Label'
import { rLink } from '../Components/Atoms/Link/Link'

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
    let atoms = {
      Layout: rLayout(elements, this.configuration),
      Surface: rSurface(elements, this.configuration),
      Box: rBox(elements, this.configuration),
      List: rList(elements, this.configuration),
      Title: rTitle(elements, this.configuration),
      Heading: rHeading(elements, this.configuration),
      Subheading: rSubheading(elements, this.configuration),
      Paragraph: rParagraph(elements, this.configuration),
      Label: rLabel(elements, this.configuration),
      Link: rLink(elements, this.configuration),
      //   Display: rDisplay(elements, this.configuration),
    }
    // let organisms = {
    //   Testpage: rTestpage(elements, this.configuration)
    // }
    // return { ...elements, ...atoms, ...organisms }
    return { ...elements, ...atoms}
  }

  /**
   * 
   */
  constructor(configuration: iAnaConfiguration = {}) {
    this.configuration = { ...this.configuration, ...configuration }
  }
}
