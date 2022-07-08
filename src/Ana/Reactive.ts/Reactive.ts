import { Observable } from '../Observable/Observable'
import { StaticAttributes, StaticChild } from '../types'
import { query } from '../Utils/Utils'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                 _   _
//  |  _ \ ___  __ _  ___| |_(_)_   _____
//  | |_) / _ \/ _` |/ __| __| \ \ / / _ \
//  |  _ <  __/ (_| | (__| |_| |\ V /  __/
//  |_| \_\___|\__,_|\___|\__|_| \_/ \___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export class Reactive {
  // Observable
  observable: Observable = new Observable()

  // Reference
  dataset: string
  reference: string
  query?: HTMLElement | SVGElement

  // Element
  tag: string
  classes: string = ''
  children: StaticChild[] = []
  attributes: StaticAttributes = {}

  // private rerender:Function = ():HTMLElement | SVGElement => {
  //   return a[this.tag]
  // }

  constructor(elementBase: HTMLElement | SVGElement) {
    // Reference
    let id = window.ana.reactives.length
    this.dataset = `ref=${id}`
    this.reference = `[data-${this.dataset}]`
    this.query = query(this.reference)
    // Element
    this.tag = elementBase.tagName.toLowerCase()
    this.classes = elementBase.classList.value
    this.children = Array.from(elementBase.childNodes)
    Array.prototype.map.call(elementBase.attributes, (attribute) => {
      this.attributes[attribute.name] = attribute.value
    })
    // Observable
    // this.observable.subscribe(this.rerender)
  }
}
