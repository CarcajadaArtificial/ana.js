import express, { Application, Request, Response, NextFunction } from 'express'
import path from 'path'
import fs from 'fs'

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
  res.sendFile(path.join(__dirname, '/components/index.html'))
})

app.get('/:componentType/:componentName', (req, res) => {
  const type = req.params.componentType
  const name = req.params.componentName
  const componentPath =
    name === 'ana.css' || name === 'ana.js'
      ? path.join(__dirname, '..', `dist/ana/${name}`)
      : path.join(__dirname, `components/${type}/${name}.html`)

  let pageExists = false
  try {
    pageExists = fs.existsSync(componentPath)
  } catch (err) {
    console.error(err)
  }

  console.log(name, componentPath, 'Page Exists:', pageExists)
  if (pageExists) {
    res.sendFile(componentPath)
  } else {
    res.sendStatus(404)
  }
})

app.listen(4444, () =>
  console.log('Component tests running\nhttp://localhost:4444/')
)
