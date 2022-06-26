import { Ana } from './Ana/index'
import { GenericData } from './Ana/types'

const A = new Ana()
const a = A.render
const app = A.createApp

app.init(
  {
    title: 'Example title',
  },
  (d: GenericData) => a.h1()(d.title)
)

setTimeout(() => {
  app.up({ title: 'Title changed after 5 seconds' })
}, 5000)
