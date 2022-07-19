import { Ana } from '../Ana/Ana'
import { Observable } from '../Observable/Observable'
import { Reference, ReferenceFunction } from '../Reference/Reference'
import { StaticAttribute, StaticChild } from '../types'
import { query } from '../utils'

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
  children: (StaticChild | Reference | ReferenceFunction)[] = []

  /**
   *
   */
  attributes: { [key: string]: StaticAttribute | Reference } = {}

  /**
   * @todo determinar el tipo de elemento: Parent/Empty/SVG
   */
  private rerender: Function = (): void => {
    let tag: string = this.tag instanceof Reference ? this.tag.get() : this.tag

    let classes: string[] = this.classes.map(
      (reactiveClass: string | Reference): string =>
        reactiveClass instanceof Reference ? reactiveClass.get() : reactiveClass
    )

    let children: StaticChild[] = []
    this.children.forEach(
      (reactiveChildren: StaticChild | Reference | ReferenceFunction) => {
        if (reactiveChildren instanceof Reference) {
          children.push(reactiveChildren.get())
        } else if (reactiveChildren instanceof ReferenceFunction) {
          let childrenReturned = reactiveChildren.run()
          if (Array.isArray(childrenReturned)) {
            children.push(...reactiveChildren.run())
          } else {
            children.push(reactiveChildren.run())
          }
        } else {
          children.push(reactiveChildren)
        }
      }
    )

    let ana = new Ana()
    let a = ana.render

    query(this.reference).replaceWith(
      a[tag](...classes)(...children).has(this.attributes)
    )
  }

  /**
   *
   * @param elementBase
   */
  constructor(elementBase: HTMLElement | SVGElement, anaRef: Ana) {
    // Reference
    this.reference = '[data-ref="' + this.id + '"]'

    // Element
    // Tag
    this.tag = elementBase.tagName.toLowerCase()
    // Classes
    elementBase.classList.length > 0
      ? (this.classes = elementBase.classList.value.split(' '))
      : (this.classes = [])
    elementBase.removeAttribute('class')
    // Children
    this.children = Array.from(elementBase.childNodes)
    // Attributes
    Array.prototype.map.call(elementBase.attributes, (attribute) => {
      this.attributes[attribute.name] = attribute.value
    })
    // Data Attribute Reference
    this.attributes['data-ref'] = this.id

    // Observable
    this.observable.subscribe(this.rerender)

    // Window
    window.ana.reactives[this.id] = this
  }
}
