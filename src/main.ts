import { Ana } from './Ana/index'
import { GenericData } from './Ana/types'

const A = new Ana()
const a = A.render
const app = A.createApp

app.init(
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  },
  (d: GenericData) => a.ol()(
    a.li()(d.a),
    a.li()(d.b),
    a.li()(d.c),
    a.li()(d.d),
    a.li()(d.e),
  )
)

setTimeout(() => {
  renderRandoms()
}, 2000)


async function renderRandoms() {
  let options: string[] = ['a', 'b', 'c', 'd', 'e']
  setInterval(() => {
    let updateSnapshot: GenericData = {}
    updateSnapshot[options[Math.floor(Math.random() * 5)]] = Math.floor(Math.random() * 100)
    app.up(updateSnapshot)
  }, 2000 )
}