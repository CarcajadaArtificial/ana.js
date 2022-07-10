import { Ana, Render } from './Ana/index'
import { Reference } from './Ana/Reference/Reference'

const ana = new Ana()
const a = ana.render<Render>()

const d = window.ana.state

ana.init(
  {
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    list: ['x', 'y', 'z'],
    last: 1,
  },
  () => {
    return a.div()(
      a.h1()('Live test'),
      a.div()(a.h2()('Single Static'), a.p()('A')),
      a.div()(a.h2()('Single Reactive'), a.p(d.a)(d.a)),
      a.div()(
        a.h2()('Multiple Reactive'),
        a.p()(
          a.span()('Results:  '),
          'A: ',
          d.a,
          ', B: ',
          d.b,
          ', C: ',
          d.c,
          ', D: ',
          d.d,
          ', E: ',
          d.e
        )
      ),
      a.div()(
        a.h2()('Array Reactive'),
        a.p()(
          ana.f(
            (list: Reference) =>
              list.value.map((item: string) => a.strong()(item)),
            d.list
          )
        )
      ),
      a.div()(
        a.h2()('Conditional Reactive'),
        a.p()(
          ana.f((last: Reference) => {
            if (last.value % 2 === 0) {
              return a.strong()(last.value, ': Even')
            } else {
              return a.strong()(last.value, ': Odd')
            }
          }, d.last)
        )
      )
    )
  }
)

// /*
// Simulator of changing data.
var interval: NodeJS.Timeout = setInterval(() => {
  let randomLetter = ['a', 'b', 'c', 'd', 'e'][Math.floor(Math.random() * 5)]
  let randomNumber = Math.ceil(Math.random() * 100)
  ana.up[randomLetter](String(randomNumber))
  ana.up.last(randomNumber)
  if (randomNumber % 5 === 0) ana.up.list([...d.list.value, randomLetter])
}, 1000)

document.body.addEventListener('click', () => clearInterval(interval))
// */
