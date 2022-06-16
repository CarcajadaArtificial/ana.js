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
import { rTest } from './Molecules/Test/Test'
import { rPage } from './Organisms/Page/Page'
import { rTestpage } from './Organisms/Testpage/Testpage'

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
    Test: rTest(elements, configuration),
    // Organisms
    Testpage: rTestpage(elements, configuration),
    Page: rPage(elements, configuration),
  }
}
