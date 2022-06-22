import classNames from 'classnames'
import { SpacingClass } from '../../Particles/Particles'
import { Spacing } from "../../../types";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Input Interface
export interface iBox {
  padding?: Spacing
  margin?: Spacing
  border?: Spacing
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Complete Interface
export interface Box {
  padding: Spacing
  // margin: Spacing
  // border: Spacing
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Default Values
export const dBox: Box = {
  padding: 'sgl',
  // margin: 'sgl',
  // border: 'sgl',
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cBox(p: Box): {[key: string]: string[] } {
  return {
    Box: classNames('a-Box', SpacingClass('p', p.padding)).split(' ')
  }
}