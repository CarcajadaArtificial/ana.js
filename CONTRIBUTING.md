# Contributing

The documentation is written with MacOS Monterey in mind.

## Initial Setup

### Prerequisites

* Have the latest Xcode installed.
* Have Hombebrew installed.
* Have NVM installed.

### Initial setup steps

1. Clone project `git clone git@github.com:CarcajadaArtificial/ana.js.git`.
2. Install Node `nvm install 16.13.0` or `nvm use 16.13.0`.
3. Install Sass `brew install sass/sass/sass`.
4. Install Dependencies `npm i` and `npm i -D`.
5. (Coming soon) Run the setup script `npm run setup`.

## Developing Process

### Main Package Scripts

This scripts are the main 

* `test`
  
  It uses Nodemon watching for changes in the app (`.ts` and `.scss` files) and for changes in the test (`.html` files). It reruns the node server (`~/test/app.ts`) when a change is made.

* `build`

  It processes the complete proyect, which is mainly divided in two parts: the contents inside `~/src/ts` and `~/src/scss` into a single directory `~/dist/ana/`. It runs `_build-sass` and `_build-ts` to achieve this.

* `doc`
  
  It runs all the standard documentation processing, divided into sassdoc and typedoc. It runs `_build-sass:doc` and `_build-ts:doc` to achieve this.

### Secondary Package Scripts

* `_build-sass`

  It processes all of the project's scss code through `~/src/scss/style.scss` into a single css file inside the distribution directory (`~/dist/ana/ana.css` and `~/dist/ana/ana.css.map`).

* `_build-sass:doc`

  It uses the sassdoc comment standard to process all scss files inside the source directoy (`~/src/scss/*.scss` and `~/src/scss/**/*.scss`).

* `_build-sass:min`

  It builds the sass code, just like `_build-sass`, but minified and without the map. It is used for the publishing version.

* `_build-ts`

  It processes all of the typescript part of the project. It uses the Typescript and Webpack configuration (`~/tsconfig.json` and `~/webpack.config.json`) to build everything into a single file in the distribution directory (`~/dist/ana/ana.js`)

* `_build-ts:doc`

  It uses the typedoc comment standard to process all typescript files inside the source directory (`~/src/ts/*.ts` and `~/src/ts/**/*.ts`)

## Creating a Component

```typescript
//   ___                     _     
//  | __|_ ____ _ _ __  _ __| |___ 
//  | _|\ \ / _` | '  \| '_ \ / -_)
//  |___/_\_\__,_|_|_|_| .__/_\___|
//                     |_|         
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Component/ComponentType/Example
 * Description
 */
import { AnaComponent, extendParameterDefaults } from '../../elements'
// import { Component } from '../ComponentType/component'

/**
 * Usage
 */
export class Example extends AnaComponent {
  render: Function = (param: iExample = {}): HTMLElement => {
    const a = this.a

    return a.div(a.span('Example'))
  }
}

/**
 * Properties
 */
interface iExample {
  // Properties of Example
  [key: string]: tExample
}

type tExample = undefined // | Property types of Example
```

```html
<!-- 
  _____       _   
 |_   _|__ __| |_ 
   | |/ -_|_-<  _|
   |_|\___/__/\__|
                  
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title - Atom</title>
    <link rel="stylesheet" href="ana.css" />
  </head>
  <body id="a-body">
    <script src="ana.js"></script>
    <script>
      const a = new Ana()

      a.eId('a-body').append(a.span('Test'))
    </script>
  </body>
</html>
```
