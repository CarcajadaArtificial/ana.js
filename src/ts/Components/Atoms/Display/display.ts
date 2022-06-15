/**
 * @module Components/Atom/Display
 */
 import { iAnaConfiguration } from '../../../Ana/Ana.interface'
 import { RenderDictionary } from '../../../types'
 import classNames from 'classnames'
 
 //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
 //   ____  _           _             
 //  |  _ \(_)___ _ __ | | __ _ _   _ 
 //  | | | | / __| '_ \| |/ _` | | | |
 //  | |_| | \__ \ |_) | | (_| | |_| |
 //  |____/|_|___/ .__/|_|\__,_|\__, |
 //              |_|            |___/ 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
 /**
  * 
  */
 export function rDisplay(
   a: RenderDictionary,
   config: iAnaConfiguration
 ): Function {
   return (...children: [Node | string | Function]): Function  => {
     return (param: iDisplay = {}): HTMLElement => {
       param = {
         ...{ },
         ...param,
       }
       let classes = {
         Display: classNames().split(' ')
       }
   
       return a.div(...classes.Display)(...children)
     }
   }
 }
 
 //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
 export interface iDisplay {}