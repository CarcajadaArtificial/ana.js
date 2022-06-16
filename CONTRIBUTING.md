# Contributing

### Table of contents

1. [Initial Setup](#initial-setup)
2. [Developing Process](#developing-process)

---

## Initial setup

The documentation is written with MacOS Monterey in mind.

### Prerequisites

* Have the latest Xcode installed.
* Have Hombebrew installed.
* Have NVM installed.

### Initial setup steps

1. Fork and clone project.
2. Install Node `nvm install 16.13.0` or `nvm use 16.13.0`.
3. Install Sass `brew install sass/sass/sass`.
4. Install Dependencies `npm i` and `npm i -D`.
5. (Coming soon) Run the setup script `npm run setup`.

### Node

```
$ node -v
v16.13.0
```

### Global dependencies

```
$ npm list -g --depth 0
├── corepack
├── npm
├── typedoc
└── typescript
```

[Back to top](#top)

---

## Developing Process

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

[Back to top](#top)

---

## Package Scripts

* `npm run dev`

  The developer should run this script to start developing any TypeScript feature. It runs a build before the server, this is to catch any build errors prior to the start of the development. This way, the developer knows if there are any build errors/warnings before even adding new code. Also, before any of that even happens, it builds all of the css into the `~/build` directory. It is necessary for a built css to exist before building any TypeScript code.

* `npm run dev-css`
  
  The developer should run this script when developing any CSS features. If the developer is creating new components that require this script and `npm run dev`, both should be run on separate but parallel terminal sessions.

* `npm run build`

  The developer should run this script before commiting changes and publishing to NPM.

* `npm run preview`
  
  It runs a local server using the built files inside the `~/dist` directory.

  [Back to top](#top)
