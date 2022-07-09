import { Observable } from '../Observable/Observable'
import { Reference } from '../Reference/Reference'
import { render } from '../Render/Render'
import { Render } from '../Render/Render.interface'
import { StaticAttribute, StaticChild } from '../types'
import { query } from '../utils'

const a = render<Render>()

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
  /**
   *
   */
  observable: Observable = new Observable()

  /**
   *
   */
  id: string = String(Object.keys(window.ana.reactives).length)

  /**
   *
   */
  reference: string

  /**
   *
   */
  tag: string | Reference

  /**
   *
   */
  classes: (string | Reference)[] = []

  /**
   *
   */
  children: (StaticChild | Reference)[] = []

  /**
   *
   */
  attributes: { [key: string]: StaticAttribute | Reference } = {}

  /**
   * @todo determinar el tipo de elemento: Parent/Empty/SVG
   */
  private rerender: Function = (): void => {
    let tag: string = this.tag instanceof Reference ? this.tag.get() : this.tag

    // console.log(this.classes)
    let classes: string[] = this.classes.map(
      (reactiveClass: string | Reference): string =>
        reactiveClass instanceof Reference ? reactiveClass.get() : reactiveClass
    )

    let children: StaticChild[] = this.children.map(
      (reactiveChildren: StaticChild | Reference) =>
        reactiveChildren instanceof Reference
          ? reactiveChildren.get()
          : reactiveChildren
    )

    query(this.reference).replaceWith(
      a[tag](...classes)(...children).has(this.attributes)
    )
  }

  /**
   *
   * @param elementBase
   */
  constructor(elementBase: HTMLElement | SVGElement) {
    // Reference
    this.reference = '[data-ref="' + this.id + '"]'

    // Element
    this.tag = elementBase.tagName.toLowerCase()
    elementBase.classList.length > 0
      ? (this.classes = elementBase.classList.value.split(' '))
      : (this.classes = [])
    elementBase.removeAttribute('class')
    console.log(elementBase.outerHTML)
    this.children = Array.from(elementBase.childNodes)
    Array.prototype.map.call(elementBase.attributes, (attribute) => {
      this.attributes[attribute.name] = attribute.value
    })
    this.attributes['data-ref'] = this.id

    // Observable
    this.observable.subscribe(this.rerender)

    // Window
    window.ana.reactives[this.id] = this
  }
}