/**
 * @module Components/Atoms/Heading
 */
 import { iAnaConfiguration } from '../../../Ana/Ana.interface'
 import { RenderDictionary, ContrastValues, ColorValues } from '../../../types'
 import classNames from 'classnames'
 import { ColorContrastClass } from '../../Particles/Particles'
 
 //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
 //   _____ _ _   _
 //  |_   _(_) |_| | ___
 //    | | | | __| |/ _ \
 //    | | | | |_| |  __/
 //    |_| |_|\__|_|\___|
 //
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
 /**
  * A Heading is the medium-sized heading of the three heading types, the other two being the Subheading and the Title. It is conventionally used for titles of page sections, multiple of these can be found inside a single page.
  */
 export function rHeading(
   a: RenderDictionary,
   config: iAnaConfiguration
 ): Function {
   return (...children: [Node | string | Function]): Function => {
     return (param: iHeading = {}): HTMLElement => {
       // Default values
       param = {
         ...{ contrast: 'highest', color: 'grey' },
         ...param,
       }
       let classes = {
         Heading: classNames(
           'a-Heading',
           ColorContrastClass(param.color, param.contrast, 'txt')
         ).split(' '),
       }
 
       return a.div(...classes.Heading)(...children)
     }
   }
 }
 
 //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
 export interface iHeading {
   contrast?: ContrastValues
   color?: ColorValues
 }
 