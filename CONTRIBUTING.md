# Contributing

Before anything else is said, thank you for reading this and showing interest in my project. I never expected anyone to even consider to contribute, so, for even reaching you have my deepest thanks.

## Table of contents

1. [Initial Setup](#initial-setup)
2. [Running the project](#running-the-project)
3. [What is what](#what-is-what)
4. [Pull Requests](#pull-requests)

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

---

## Running the project

* `npm run dev`

  *(Vite default script)*
  The developer should run this script to start developing any TypeScript feature. It runs a build before the server, this is to catch any build errors prior to the start of the development. This way, the developer knows if there are any build errors/warnings before even adding new code.

* `npm run build`

  *(Vite default script)*
  The developer should run this script before commiting changes and publishing to NPM.

* `npm run preview`
  
  *(Vite default script)*
  It runs a local server using the built files inside the `~/dist` directory.

* `npm run test`

  *(Vitest default script)*
  It runs all the tests in watch mode. The tests are extremely fast so they can be run frequently without issues. During Continuous Integration, a similar script will be run but without the watch mode.

* `npm run coverage`

  It runs the coverage function in Vitest using the c8 package. This scrpit will be run during Continuous Integration to display coverage results on the project's README.

[Back to top](#top)

---

## What is what

`Work in progress`

### Ana

* AnaConfiguration interface.
* The Ana class.

### Observable

* The Observable class.

### Render

* The Render class.
* The Render interface.
* Different types elements and the functions that render them.

### Utilities

* Utils
* Types
* Index

### Testing

* How to write tests?
* When to write tests?

### Documentation

* How to document?

[Back to top](#top)

---

## Pull Requests

`Work in progress`

### Version management

* When to advance a version?
* How will my changes be merged?

### Content of a pull request

* What to write as a description?
