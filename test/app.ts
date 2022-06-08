import express, { Application, Request, Response, NextFunction } from 'express'
import path from 'path'
import fs from 'fs'
import * as td from 'typedoc'

//console.log(Object.keys(td))
// Lo último que estaba haciendo era intentar leer cada archivo *.ts cuando se hiciera el request de la página de prueba de ese componente. Así regresaría el typedoc.json de ese componente únicamente para poblar de contenido el sitio de pruebas. Pero ya estoy llegando al punto donde no puedo configurar que typedoc lea un sólo archivo, por lo que estoy pensando que la mejor opción es generar el typedoc completo, y limpiar mis comentarios hasta que el schema del typedoc.json del proyecto completo sea navegable fácilmente.
// const tdApp = new td.Application()
// tdApp.options.addReader(new td.TSConfigReader())
// tdApp.options.addReader(new td.TypeDocReader())

const app: Application = express()

// Static Member
app.get('/ana.css', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '/dist/ana/ana.css'))
})

// Static Member
app.get('/ana.css.map', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '/dist/ana/ana.css.map'))
})

// Static Member
app.get('/ana.js', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '/dist/ana/ana.js'))
})

// Index Page
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/:componentType/:componentName', (req, res) => {
  const type = req.params.componentType
  const name = req.params.componentName

  if (!['Atoms', 'Molecules', 'Organisms'].includes(type)) {
    res.sendStatus(404)
  }

  const testPath = path.join(
    __dirname,
    `../src/ts/Components/${type}/${name}/${name}.test.html`
  )

  if (!fs.existsSync(testPath)) {
    res.sendStatus(404)
  }

  res.sendFile(testPath)
})

app.listen(4444, () =>
  console.log('Component tests running\nhttp://localhost:4444/')
)
