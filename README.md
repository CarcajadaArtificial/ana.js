# ana.js

![Banner](https://user-images.githubusercontent.com/13631141/173929134-ff19b3c7-2f46-4ab6-9bfa-1d089f790c82.png)

Hello! Welcome to my module’s page! Firstly, thank you very much for being interested enough to click on my project, and secondly, for taking the time to read this. So what did you click on?

## Table of Contents

1. [What is Ana?](#what-is-ana)
2. [Feature](#features)
3. [Getting started](#getting-started)
4. [Roadmap](#roadmap)

## What is Ana?

Ana (or `Ana.js`) is me trying to escape *framework hell*. Specifically, escape frameworks whose syntax looks like HTML (I'm looking at you JSX). Ana does this by still looking like TypeScript (and JavaScript). Rendering elements looks like readable phrases `a.button('primary')` renders `<button class=”primary” />`, and reads like “a button primary”. The aim of the framework is for it to look and feel as if it was another update for the JavaScript language itself, providing a set of shortcuts to known JS features, instead of proposing a new language itself.

### Why should I use Ana in my projects?

The short answer is: if you need to render reactive HTML/SVG elements focusing on time to interaction. Pure Ana.js is like pure JSX, it is a very useful tool but requires others for complex applications.

[Back to top](#top)

---

## Features

### Good ‘ol JavaScript syntax

The syntax doesn’t look like HTML. It doesn’t have any `< />`, and looks more like pure TypeScript (or JavaScript). Ana provides functions that render reactive web elements without the need for any .html files at all.

### Render anywhere

You are not stuck to rendering on the server or the client. In its ideal form, Ana renderers all static content on the server and works the interactions with the client. Nevertheless, this feature is flexible for apps that render purely on the client or purely on the server.

### Standard intellisense

Thanks to TypeScript Magic, I defined an interface with a standard of good practices for HTML/SVG elements that uses Ana’s render methods. This avoids the need of researching if an element’s attribute is a good practice, experimental, deprecated or whatever.

[Back to top](#top)

---

## Getting Started

### Deno

### Node.js

[Back to top](#top)

---

## Roadmap

### Feature Roadmap

- [ ]  SRR Functionality: Render HTML markup as strings on the server.
  - [x]  Render empty elements.
  - [x]  Render parent elements.
  - [x]  Render elements with attributes.
  - [x]  Render SVG elements.
  - [x]  Publish library.
  - [x]  Render a static site in the server.
  - [ ]  Add CSS and JS to the static site.
  - [ ]  Render elements with event listeners.
- [ ]  Reactivity: Make rendered elements reactive to a data state.
- [ ]  Components: Add an architecture that supports reusable UI components.

### Development

- [x]  Unit testing.
  - [x]  Ana
  - [x]  Renderer
  - [x]  Utils
- [ ]  Documentation
  - [ ]  Contributing (update to Deno project)
  - [x]  Changelog (edit to only have the current version’s changes)
  - [ ]  Readme (add Getting Started)
  - [x]  Utils
  - [x]  Types
  - [ ]  Renderer
  - [ ]  Elements
  - [x]  Ana
- [ ]  Error handling.
- [ ]  Github actions for CI/CD.
- [ ]  Project dockerization.

### External

- [ ]  Prettier plugin or configuration file.
- [ ]  VSCode syntax highlighting.
- [ ]  Scaffolding CLI package `ana-cli`.

[Back to top](#top)
