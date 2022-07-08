import { Observable } from '../Observable/Observable'
import { render } from '../Render/Render'
import { Render } from '../Render/Render.interface'
import { StateReference, StaticAttribute, StaticChild } from '../types'
import { query } from '../Utils/Utils'

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
  tag: string | StateReference

  /**
   *
   */
  classes: (string | StateReference)[] = []

  /**
   *
   */
  children: (StaticChild | StateReference)[] = []

  /**
   *
   */
  attributes: { [key: string]: StaticAttribute | StateReference } = {}

  /**
   * @todo determinar el tipo de elemento: Parent/Empty/SVG
   */
  private rerender: Function = (): void => {
    let tag: string =
      this.tag instanceof StateReference ? this.tag.get() : this.tag

    // console.log(this.classes)
    let classes: string[] = this.classes.map(
      (reactiveClass: string | StateReference): string =>
        reactiveClass instanceof StateReference
          ? reactiveClass.get()
          : reactiveClass
    )

    let children: StaticChild[] = this.children.map(
      (reactiveChildren: StaticChild | StateReference) =>
        reactiveChildren instanceof StateReference
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
