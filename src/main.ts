import { Ana, byId } from './ts/index'

const A = new Ana()
const a = A.render

A.app({
  title: 'Example title'
}, (state: any) => byId('app').replaceChildren(
  a.h1()(state.title)
))

setTimeout(() => {
  A.up({ title: 'Title changed after 5 seconds' })
}, 5000);