/**
 * @module Components
 */
import { iAnaConfiguration } from '../Ana/Ana.interface'
import { getElements, getSVG } from '../Elements/Elements'
import { RenderDictionary } from '../types'
import { rBox } from './Atoms/Box/Box'
import { rHeading } from './Atoms/Heading/Heading'
import { rLabel } from './Atoms/Label/Label'
import { rLayout } from './Atoms/Layout/Layout'
import { rLink } from './Atoms/Link/Link'
import { rList } from './Atoms/List/List'
import { rParagraph } from './Atoms/Paragraph/Paragraph'
import { rSmall } from './Atoms/Small/Small'
import { rSubheading } from './Atoms/Subheading/Subheading'
import { rSurface } from './Atoms/Surface/Surface'
import { rTitle } from './Atoms/Title/Title'
import { rCheckbox } from './Molecules/Checkbox/Checkbox'
import { rNavbar } from './Molecules/Navbar/Navbar'
import { rApp } from './Organisms/App/App'
import { rPage } from './Organisms/Page/Page'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//    ____                                             _
//   / ___|___  _ __ ___  _ __   ___  _ __   ___ _ __ | |_
//  | |   / _ \| '_ ` _ \| '_ \ / _ \| '_ \ / _ \ '_ \| __|
//  | |__| (_) | | | | | | |_) | (_) | | | |  __/ | | | |_
//   \____\___/|_| |_| |_| .__/ \___/|_| |_|\___|_| |_|\__|
//                       |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This function is used to remove import clutter inside of the main Ana class.
 * @param configuration The global framework configuration
 * @returns A Render Dictionary with all elements and components
 */
export const createRenderDictionary = (
  configuration: iAnaConfiguration
): RenderDictionary => {
  let elements = getElements(configuration)
  let svgs = getSVG(configuration)
  return {
    ...elements,
    ...svgs,
    // Atoms
    Layout: rLayout(elements, configuration),
    Surface: rSurface(elements, configuration),
    Box: rBox(elements, configuration),
    List: rList(elements, configuration),
    Title: rTitle(elements, configuration),
    Heading: rHeading(elements, configuration),
    Subheading: rSubheading(elements, configuration),
    Paragraph: rParagraph(elements, configuration),
    Label: rLabel(elements, configuration),
    Link: rLink(elements, configuration),
    Small: rSmall(elements, configuration),
    // Molecules
    Checkbox: rCheckbox(elements, configuration),
    Navbar: rNavbar(elements, configuration),
    // Organisms
    App: rApp(elements, configuration),
    Page: rPage(elements, configuration),
  }
}