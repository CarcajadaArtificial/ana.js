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

* `test`
  
  It uses Nodemon watching for changes in the app (`.ts` and `.scss` files) and for changes in the test (`.html` files). It reruns the node server (`~/test/app.ts`) when a change is made.

* `build`

  It processes the complete proyect, which is mainly divided in two parts: the contents inside `~/src/ts` and `~/src/scss` into a single directory `~/dist/ana/`. It runs `_build-sass` and `_build-ts` to achieve this.

* `doc`
  
  It runs all the standard documentation processing, divided into sassdoc and typedoc. It runs `_build-sass:doc` and `_build-ts:doc` to achieve this.

### Secondary Package Scripts

* `_build-css`

  It processes all of the project's scss code through `~/src/scss/style.scss` into a single css file inside the distribution directory (`~/dist/ana/ana.css` and `~/dist/ana/ana.css.map`).

* `_build-css:doc`

  It uses the sassdoc comment standard to process all scss files inside the source directoy (`~/src/scss/*.scss` and `~/src/scss/**/*.scss`).

* `_build-css:min`

  It builds the scss code, just like `_build-css`, but minified and without the map. It is used for the publishing version.

* `_build-ts`

  It processes all of the typescript part of the project. It uses the Typescript and Webpack configuration (`~/tsconfig.json` and `~/webpack.config.json`) to build everything into a single file in the distribution directory (`~/dist/ana/ana.js`)

* `_build-ts:doc`

  It uses the typedoc comment standard to process all typescript files inside the source directory (`~/src/ts/*.ts` and `~/src/ts/**/*.ts`)

* `_build-ts:watch`

  It runs the same process as `_build-ts`, but watches for changes made to source files.

* `_publish-ts`

  It creates a minified version of the compiled project and does not create a sourcemap for debugging. But the result is ready to be deployed.

## Creating a Component

```typescript
/**
 * @module Type/Example
 */
import { iAnaConfiguration } from '../../../Ana/Ana.interface'
import { RenderDictionary } from '../../../types'
import classNames from 'classnames'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Example
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 */
export function rExample(
  a: RenderDictionary,
  config: iAnaConfiguration
): Function {
  return (...children: [Node | string | Function]): Function  => {
    return (param: iExample = {}): HTMLElement => {
      param = {
        ...{ },
        ...param,
      }
      let classes = {
        Example: classNames().split(' ')
      }
  
      return a.div(...classes.Example)(...children)
    }
  }
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iExample {}
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

## Node

```
$ node -v
v16.13.0
```

### Global dependencies

```
$ npm list -g --depth 0
├── corepack@0.10.0
├── npm@8.1.0
├── typedoc@0.22.11
└── typescript@4.5.5
```
