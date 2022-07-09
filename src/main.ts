import { Ana, Render } from './Ana/index'

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
        a.p()(...d.list.map((item: string) => a.strong()(item)))
      )
    )
  }
)

// /*
var interval: NodeJS.Timeout = setInterval(() => {
  let randomLetter = ['a', 'b', 'c', 'd', 'e'][Math.floor(Math.random() * 5)]
  let randomNumber = Math.floor(Math.random() * 100)
  ana.up[randomLetter](String(randomNumber))

  if (randomNumber % 5 === 0) ana.up.list([...d.list.value, randomLetter])
}, 1000)

document.body.addEventListener('click', () => clearInterval(interval))
// */
