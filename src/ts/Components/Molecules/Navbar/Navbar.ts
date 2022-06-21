/**
 * @module Type/Navbar
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'
import { rParagraph } from '../../Atoms/Paragraph/Paragraph'
import { rSurface } from '../../Atoms/Surface/Surface'
import { rBox } from '../../Atoms/Box/Box'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _   _             _
//  | \ | | __ ___   _| |__   __ _ _ __
//  |  \| |/ _` \ \ / / '_ \ / _` | '__|
//  | |\  | (_| |\ V /| |_) | (_| | |
//  |_| \_|\__,_| \_/ |_.__/ \__,_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The Navbar is in charge of the site’s navigation. Out there, there are numerous different navbars. They have different scopes and complexities between each other. This one is a navbar stripped down to it’s bare minimums. It contains the site’s logo and name that work as a “home” button, and an “actions” space where buttons can be placed to do something. Mainly that space will be occupied by a Drawer component coming from the right side. It is not a toolbar. The navbar must not reach a point where it becomes an enabler of main functionalities. Finally,  it must be able to be minimized or entirely hidden.
 */
export function rNavbar(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  a.Paragraph = rParagraph(a, config)
  a.Surface = rSurface(a, config)
  a.Box = rBox(a, config)
  return (...children: [Node | string | Function]): Function => {
    children
    return (param: iNavbar = {}): HTMLElement => {
      param = {
        ...{ title: 'Title', logo: a.span()('Logo'), actions: [a.span('Action')()] },
        ...param,
      }
      let classes = {
        Navbar: classNames('a-Navbar').split(' '),
        Container: classNames('a-Navbar_container').split(' '),
        Logo: classNames('a-Navbar_logo').split(' '),
        Title: classNames('a-Navbar_title').split(' '),
        Actions: classNames('a-Navbar_actions').split(' '),
      }
      classes

      return a.div(classes.Container)(
        a.Surface(
          a.Box(a.nav('a-Navbar')(param.logo, a.Paragraph(param.title)()))({
            padding: 'tpl',
          })
        )()
      )
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iNavbar {
  logo?: Node
  actions?: Node[]
  title?: string
  isHidden?: boolean
  isMinimized?: boolean
}
