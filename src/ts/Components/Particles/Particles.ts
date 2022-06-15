/**
 * @module Components/Particles
 */

import {
  ColorValues,
  ContrastValues,
  LayoutMargin,
  LayoutType,
  Spacing,
  SpacingPrefix,
} from '../../types'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____            _   _      _           
//  |  _ \ __ _ _ __| |_(_) ___| | ___  ___ 
//  | |_) / _` | '__| __| |/ __| |/ _ \/ __|
//  |  __/ (_| | |  | |_| | (__| |  __/\__ \
//  |_|   \__,_|_|   \__|_|\___|_|\___||___/
//                                          
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This function creates a css class for background or text colors.
 * @param color The full name of the color.
 * @param contrast The contrast value for the color, this substitues the "light color / dark color" discrepancy.
 * @param type Background or text.
 * @returns A string with the color and contrast classes.
 * 
 * @todo Abbreviate contrast values. highest -> hst
 * @todo Reference the css classes relevant to this function.
 */
export function ColorContrastClass(
  color?: ColorValues,
  contrast?: ContrastValues,
  type?: 'txt' | 'bg'
) {
  return [
    `${color}-${type}`,
    {
      'cont-hst': contrast === 'highest',
      'cont-h': contrast === 'high',
      'cont-m': contrast === 'mid',
      'cont-l': contrast === 'low',
      'cont-lst': contrast === 'lowest',
    },
  ]
}

/**
 * This function creates the layout classes for a given type and margin.
 * @param type The type of the layout.
 * @param margin The margin of the layout.
 * @returns A string that contains the css classes for the layout type and margin.
 * 
 * @todo Reference the css classes relevant to this function.
 */
export function LayoutClass(type?: LayoutType, margin?: LayoutMargin) {
  return [
    {
      'a-Layout-full': type === 'full',
      'a-Layout-center': type === 'center',
      'a-Layout-focus': type === 'focus',
      'a-Layout-halves': type === 'halves',
      'a-Layout-thirds': type === 'thirds',
      'a-Layout-quarters': type === 'quarters',
      'a-Layout-right': type === 'right',
      'a-Layout-left': type === 'left',
    },
    {
      'a-Layout-margin-full': margin === 'full',
      'a-Layout-margin-single': margin === 'single',
      'a-Layout-margin-none': margin === 'none',
    },
  ]
}

/**
 * This function creates the classes for the spacing attributes.
 * @param prefix A character that abbreviates the spacing attribute.
 * @param spacing The spacing magnitude.
 * @returns A string with the spacing css class.
 * 
 * @todo Reference the css classes relevant to this function.
 */
export function SpacingClass(prefix: SpacingPrefix, spacing?: Spacing) {
  return `${prefix}-${spacing}`
}
