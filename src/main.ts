import { Ana } from './ts/index'
import '../build/ana.css'

const A = new Ana()
const a = A.render()

a.Page(
  a.Title('test')()
)()
