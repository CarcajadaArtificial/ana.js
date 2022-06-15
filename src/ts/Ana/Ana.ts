import { iAna, iAnaConfiguration } from './Ana.interface'
import { getElements } from '../Elements/Elements'
import { RenderDictionary, State } from '../types'
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
import { rCheckbox } from '../Components/Molecules/Checkbox/Checkbox'
import { rTestpage } from '../Components/Organisms/Testpage/Testpage'
import { rTest } from '../Components/Molecules/Test/Test'
import { rColorpage } from '../Components/Pages/Colorpage/Colorpage'
import { rPage } from '../Components/Organisms/Page/Page'
import { Observable } from '../Observable'

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
  obs: Observable = new Observable()

  /**
   * 
   */
  state: State = {}

  /**
   * 
   */
  app(state: State, render: Function):void {
    this.obs.subscribe(render)
    this.up(state)
  }


  /**
   * 
   */
  up(state: State) {
    this.state = {...this.state, ...state}
    this.obs.emit(this.state)
  }

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
        if (attribute === true) {
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
    HTMLElement.prototype.setAttributes = this.setAttributes
    HTMLElement.prototype.has = this.has
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
    }
    let molecules = {
      Checkbox: rCheckbox(elements, this.configuration),
      Test: rTest(elements, this.configuration),
    }
    let organisms = {
      Testpage: rTestpage(elements, this.configuration),
      Page: rPage(elements, this.configuration),
    }
    let pages = {
      Colorpage: rColorpage(elements, this.configuration),
    }

    return { ...elements, ...atoms, ...molecules, ...organisms, ...pages }
  }

  /**
   *
   */
  constructor(configuration: iAnaConfiguration = {}) {
    this.configuration = { ...this.configuration, ...configuration }
  }
}
