//       _
//      / \   _ __   __ _
//     / _ \ | '_ \ / _` |
//    / ___ \| | | | (_| |
//   /_/   \_\_| |_|\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The `Ana` class is the first thing that has contact with developers using this framework. It's main job is to give access to everything they
 * @module Ana
 */
import { AnaElements } from './elements'
import { AnaMarkdown } from './markdown'
import * as Util from './utils'
// Atoms
import { Small } from './components/atoms/small'
import { Label } from './components/atoms/label'
import { Paragraph } from './components/atoms/paragraph'
import { Subheading } from './components/atoms/subheading'
import { Heading } from './components/atoms/heading'
import { Title } from './components/atoms/title'
import { Display } from './components/atoms/display'
import { Link } from './components/atoms/link'
import { Icon } from './components/atoms/icon'
// Molecules
import * as Molecule from './molecules'
import * as Organism from './organisms'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type aids in the configuration object used during the class instance construction.
 * ```Typescript
 * const a = new Ana(AnaConfiguration)
 * ```
 */
export interface AnaConfiguration {
  /**
   * {@link Ana.standardVerificationMode | Read more}
   */
  standardVerificationMode?: boolean
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * The main interface of the framework
 */
export interface Ana {
  // Atoms
  Small: Function
  Label: Function
  Paragraph: Function
  Subheading: Function
  Heading: Function
  Title: Function
  Display: Function
  Link: Function
  Icon: Function
  // Molecules
  Button: Function
  Input: Function
  Chip: Function
  Card: Function
  // Organisms
  Page: Function
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * The main class of the framework.
 */
export class Ana extends AnaElements {
  /**
   * This property is used to manage the developing mode that enables or disables the standard checking in HTMLElements and all of their attributes.
   */
  standardVerificationMode: boolean = true

  /**
   * This property contains all render functions for any markdown elements.
   */
  md: AnaMarkdown = new AnaMarkdown()

  /**
   * 
   */
  eId: Function = Util.eId

  /**
   * 
   */
  bring: Function = Util.bring

  /**
   *
   */
  private addComponents: Function = (param: AnaConfiguration = {}) => {
    let a = new AnaElements(param)
    // Atoms
    this.Small = new Small(a, param, 'a-small').render
    this.Label = new Label(a, param, 'a-label').render
    this.Paragraph = new Paragraph(a, param, 'a-paragraph').render
    this.Subheading = new Subheading(a, param, 'a-subheading').render
    this.Heading = new Heading(a, param, 'a-heading').render
    this.Title = new Title(a, param, 'a-title').render
    this.Display = new Display(a, param, 'a-display').render
    this.Link = new Link(a, param, 'a-link').render
    this.Icon = new Icon(a, param, 'a-icon').render
    // Molecules
    this.Button = new Molecule.Button(a, param, 'a-button').render
    this.Input = new Molecule.Input(a, param, 'a-input').render
    this.Chip = new Molecule.Chip(a, param, 'a-chip').render
    this.Card = new Molecule.Card(a, param, 'a-card').render
    // Organisms
    this.Page = new Organism.Page(a, param, 'a-page').render
  }

  /**
   * ```Typescript
   * const a = new Ana({
   *  // Options
   * })
   * ```
   */
  constructor(param: AnaConfiguration = {}) {
    super(param)
    this.standardVerificationMode = param.standardVerificationMode === true
    this.addComponents(param)
  }
}
