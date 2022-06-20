# ana.js

![GitHub](https://img.shields.io/github/license/CarcajadaArtificial/ana.js)
![GitHub all releases](https://img.shields.io/github/downloads/CarcajadaArtificial/ana.js/total)

![Banner](https://user-images.githubusercontent.com/13631141/173929134-ff19b3c7-2f46-4ab6-9bfa-1d089f790c82.png)

## Table of Contents

1. [About the project](#about-the-project)
2. [Getting started](#getting-started)
3. [Roadmap](#roadmap)

---

## About the project

This is my take on frameworks. Firstly, I am the only man developing this tool. One that will be compared to other tools built and maintained by teams orders of magnitude larger than a team of one. Someone who stumbles upon this project may not find it apt for their needs, which is perfectly fine. It doesn’t fill my needs either, if it did, I wouldn’t be continuously building and upgrading it.

What is Ana? It is short for Anarchy, a system that questions all hierarchy, authority, and, established rules. Ok, that’s too real-lifey. What does Ana.js question? What is considered to be a hierarchy, authority, or rules in the world of Front-End JavaScript Framework? Well, any answer to this will be completely arbitrary. I wouldn’t even say that the framework goes entirely against the “establishment”, it being the numerous highly competent frameworks that solve problems in the industry. Nevertheless, it does go against certain industry standards.

- **Not a standard, but your standard.**
  
  What does quality mean? What does good code look like? What is a valid use of HTML Elements and their attributes? The industry reduced these questions to a bunch of standards that most people blindly follow. Developers created linters for easy standardization. Ana.js has an integrated linter that checks if the code you’re writing goes according to your own definition of correct.

- **Good 'ol JavaScript Functions**
  
  This framework is non-declarative by nature. The main deal is that creating HTML Elements is done functionally. Render functions receive other render functions as parameters. There is no markup to interact and everything can fit inside a script tag. Web components are built using these functions, so they get added to the render dictionary like any other HTML Element.

- **No compilers, no builders**
  
  I would suppose that this is a controversial take, given that the industry is moving towards front-end compilers for smaller builds. But this framework is more of a library, a hypothetical JavaScript update for the language itself, for easier manipulation and creation of elements.

[Back to top](#top)

---

## Getting started

### NPM

1. Install the library

    ```node
    npm i ana.js
    ```

2. Saffold a vanilla-ts project using [Vite](https://vitejs.dev/).

    ```node
    npm create vite@latest
    ```

    - Select project name.
    - From the list of Frameworks choose `vanilla`, then `vanilla-ts`.
    - Install all node modules.

    <br>

3. Install the Ana.js package.

    ```node
    npm i ana.js
    ```

4. Import the Ana module

    ```typescript
    import { Ana } from 'ana.js'

    const A = new Ana()
    const a = A.render()
    ```

### Downloadable

Download the latest [release](https://github.com/CarcajadaArtificial/ana.js/releases).

```html
<link rel="stylesheet" href="ana.min.css">
<script src="ana.min.js"></script>
```

[Back to top](#top)

---

## Roadmap

- **Features**
  - [x] Reactivity.
  - [x] SVG support. (~20% of SVG Elements)
  - [ ] Animation engine.
  - [ ] Server Side rendering.

- **Development**
  - [ ] Testing server.
  - [ ] Error handling.
  - [ ] Unit testing.
  - [ ] Github actions for CI/CD.
  - [ ] Project dockerization.

- **Documentation**
  - [x] Server running instructions.
  - [x] How to add a new component.
  - [ ] Project publishing instructions.

[Back to top](#top)
