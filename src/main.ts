import { Ana, GenericData, Render } from './Ana/index'

const ana = new Ana()
const app = ana.createApp
const a = app.render<Render>()

app.init(
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  },
  (d: GenericData) =>
    a.div()(
      a.p('Test', 'test')('List 1'),
      a.ol()(a.li()(d.a), a.li()(d.b), a.li()(d.c), a.li()(d.d), a.li()(d.e)),
      a.p('Test', 'test')('List 2'),
      a.ol()(a.li()(d.a), a.li()(d.b), a.li()(d.c), a.li()(d.d), a.li()(d.e))
    )
)

var interval: NodeJS.Timeout = setInterval(
  () =>
    app.up[['a', 'b', 'c', 'd', 'e'][Math.floor(Math.random() * 5)]](
      Math.floor(Math.random() * 100)
    ),
  1000
)

document.body.addEventListener('click', () => clearInterval(interval))
