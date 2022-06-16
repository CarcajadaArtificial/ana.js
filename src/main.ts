import { Ana } from './ts/index'

const A = new Ana()
const a = A.render()

console.log(a.div()())

a.Page(
  a.Title('test')()
)()
