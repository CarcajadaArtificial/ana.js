import express, { Application, Request, Response, NextFunction } from 'express'
import path from 'path';
import typedoc from '../dist/typedoc/typedoc.json'

const app: Application = express()

// Static Member
app.get('/ana.css',function(req,res){
  res.sendFile(path.join(__dirname,'..','/dist/css/style.css')); 
});

// Static Member
app.get('/style.css.map',function(req,res){
  res.sendFile(path.join(__dirname,'..','/dist/css/style.css.map')); 
});

// Static Member
app.get('/ana.js',function(req,res){
  res.sendFile(path.join(__dirname,'..','/dist/js/ana.js')); 
});

// Index Page
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, '/components/index.html'));
})

// Document Getter function
app.post('/func/getDocumentation', (req: Request, res: Response, next: NextFunction) => {
  const documentation: { [key: string]: any} = {}
  
  // Atoms
  var atomsModule = typedoc.children.find(child => child.name === "Atoms")
  var atoms: any[] = atomsModule ? atomsModule.children : []
  atoms.forEach(atom => {
    if(!documentation[atom.name]) {
      documentation[atom.name] = {}
    }

    if(atom.kindString === 'Class') {
      documentation[atom.name].class = atom
    } else if(atom.kindString === 'Interface') {
      documentation[atom.name.substr(1)].type = atom
    }
  })

  // Molecules

  // Organisms

  // HTMLElements

  let emptyDocModules: string[] = []
  Object.keys(documentation).forEach(docModule => {
    if(Object.keys(documentation[docModule]).length === 0) {
      delete documentation[docModule]
      emptyDocModules.push(docModule)
    }
  })

  res.send(documentation)
})

app.listen(4444, () => console.log('Component tests running\nhttp://localhost:4444/'))
