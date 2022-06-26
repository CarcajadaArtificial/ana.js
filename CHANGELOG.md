# CHANGELOG.md

## **0.9.0 Goals**

- Finish up documentation:
  - [ ] Types
  - [ ] Render
  - [ ] Utils

## Unreleased

### **0.8.9** (Latest)

- `Added` the .has function extension of HTMLElement to the Render module.

### **0.8.8**

- `Added` the App class to the Render module, renamed as ReactiveRenderer.

### **0.8.7**

- `Added` the render function to the App class, removed it from the Ana class.

### **0.8.6**

- `Added` a test list that automatically updates to the element rerender tester.
  - `~/src/main.ts`
  - `~/index.html`

### **0.8.5**

- `Added` Added an element rerender tester.
  - `~/src/main.ts`
  - `~/index.html`

- `Added` Better types for static data. All of this are ment to be reactive in the future.
  - `~/src/Ana/types.ts`
  - `~/src/Ana/Render/Render.test.ts`
  - `~/src/Ana/Render/Render.ts`

- `Added` the app functionality to the App Module.
  - `~/src/Ana/App/App.ts`
  - `~/src/Ana/Ana/Ana.ts`

### **0.8.4**

- `Added` the App module to the Ana class.
  - `~/src/Ana/Ana/Ana.ts`

### **0.8.3**

- `Added` github workflow fix

### **0.8.2**

- `Added` the App module
  - `~/src/Ana/App/App.ts`

### **0.8.1**

- `Added` github workflow for CI
  - `~/.github/workflows/integrate.yml`

### **0.7.10**

- `Added` a renamed directory `~/src/Ana` that replaces `~/src/ts`
  - `~/src/Ana/*`
  - `~/vite.config.js`

### **0.7.9**

- `Removed` node-fetch
  - `~/src/ts/Utils/Utils.test.ts`

- `Added` Error handling messages.
  - `~/src/ts/errors.ts`
  - `~/src/ts/Observable/Observable.ts`
  - `~/src/ts/Utils/Utils.ts`

### **0.7.8**

- `Added` GenericData type for dictionaries with `any` type.

- `Added` a few tests and test requirements for the Utils module.
  - `~/src/ts/Utils/Utils.test.ts`
  - `~/src/ts/Utils/Utils.ts`

### **0.7.7**

- `Added` a directory for the Utils module.
  - `~/src/ts/Utils/Utils.ts`

### **0.7.6**

- `Added` a complete coverage of testing the Render module.
  - `~/src/ts/Render/Render.test.ts`
  - `~/src/ts/Render/Render.ts`

- `Added` jsdom instead of happydom for dom emulation during testing.
  - `~/vite.config.js`

- `Added` svgElements and emptyElements to Ana Configuration
  - `~/src/ts/Ana/Ana.ts`
  - `~/src/ts/Ana/Ana.interface.ts`

### **0.7.5**

- `Added` a complete coverage of Observable testing.
  - `~/src/ts/Observable.ts`

- `Added` trush function to utils
  - `~/src/ts/utils.ts`

- `Added` `happy-dom` plugin to vite
  - `~/vite.config.js`

- `Added` a more powerfull and simple renderer.
  - `~/src/ts/Render/Render.ts`
  - `~/src/ts/Ana/Ana.ts`

- `Added` an interface for standard elements.
  - `~/src/ts/Render/Render.interface.ts`

### **0.7.4**

- `Added` Observable unit tests.
  - `~/src/ts/Observable/Observable.ts`
  - `~/src/ts/Observable/Observable.test.ts`

### **0.7.3**

- `Added` Vitest package.

### **0.7.2**

- `Removed` documentation relevant only to the features that were transfered to other repos.
  - `~/CONTRIBUTING.md`

- `Removed` unused types
  - `~/src/ts/types.ts`

### **0.7.1**

- `Removed` components scss, transfered them to ana.js-ui repository.
  - `~/src/scss*`

### **0.6.20**

- `Added` ana.js-ui extension.
  - `~/src/ts/Ana/Ana.ts`

- `Removed` components, transfered them to ana.js-ui repository.
  - `~/src/ts/Components/*`

### **0.6.19**

- `Added` Svg functionality
  - `~/src/ts/Render.ts`
  - `~/src/ts/Ana/Ana.ts`

### **0.6.18**

- `Added` Ana.js extension executions.
  - `~/src/ts/Ana/Ana.ts`

- `Added` The render module as the formal HTMLElement renderer class.
  - `~/src/ts/Render.ts`

- `Removed` The createRenderDictionary function
  - `~/src/ts/Components/Components.ts`

- `Removed` Transfered all of the standard linter functionalities to ana.js-check repository.
  - `~/src/ts/Element/*`

### **0.6.17**

- `Added` Property for library extensions.
  - `~/src/ts/Ana/Ana.interface.ts`
  - `~/src/ts/Ana/Ana.ts`

- `Removed` All main features except for HTMLElement rendering and Reactiveness.
  - `~/src/main.ts`

- `Removed` SVG Renderer set Attributes.
  - `~/src/ts/Elements/Element/Element.ts`

### **0.6.16**

- `Added` Minimal render class without svg, components, and standard linting.
  - `~/src/ts/Elements/Elements.ts`
  - `~/src/ts/Ana/Ana.ts`

- `Added` byId util instead of eid for better reading
  - `~/src/ts/utils.ts`
  - `~/src/ts/Components/Organisms/App/App.ts`
  - `~/src/ts/Components/Organisms/Page/Page.ts`

- `Removed` Surface test page.
  - `~/src/ts/Components/Atoms/Surface/Surface.test.html`

### **0.6.15**

- `Added` New component schema added to Box atom
  - `~/src/ts/Components/Atoms/Box/Box.interface.ts`
  - `~/src/ts/Components/Atoms/Box/Box.ts`

- `Added` applyDefaultParameters function for simpler parameter notations.
  - `~/src/ts/utils.ts`

### **0.6.14**

- `Added` App and Navbar Components
  - `~/src/main.ts`
  - `~/src/ts/Components/Components.ts`
  - `~/src/ts/Components/Molecules/Navbar/Navbar.ts`
  - `~/src/ts/Components/Organisms/App/App.ts`
  - `~/src/ts/Components/Organisms/Page/Page.ts`
  - `~/src/scss/molecules.mod.scss`

- `Removed` test Page Components
  - `~/src/ts/Components/Molecules/Test/Test.tx`
  - `~/src/ts/Components/Pages/Colorpage/Colorpage.tx`
  - `~/src/ts/Components/Organisms/Testpage/Testpage.tx`

### **0.6.13**

- `Added` Minimal SVG support. About 20% of the available elements, and avoided most of the attributes that can be avoided.
  - `~/src/ts/Ana/Ana.ts`
  - `~/src/ts/Elements/Elements.ts`
  - `~/src/ts/Elements/Element/Element.ts`

### **0.6.12**

- `Added` getting started instructions
  - `~/README.md`

### **0.6.11**

Skipped v0.6.9-v0.6.10 while testing different configurations and publishing again.

- `Added` Correct publishing configuration, now anyone that installs the library can actually use it.
  - `~/package.json`
  - `~/tsconfig.json`
  - `~/vite.config.js`

### **0.6.8**

- `Added` Small fixes to build warnings.
  - `~/src/*`

- `Added` Better package scripts
  - `~/package.json`

- `Added` Updated script documentation
  - `~/CONTRIBUTING.md`

### **0.6.7**

Fuck webpack.

- `Added` Vite bundler.
  - `~/package.json`
  - `~/tsconfig.json`
  - `~/index.html`
  - `~/.gitignore`
  - `~/src/main.ts`
  - `~/src/vite-env.d.ts`

- `Removed` provisional Express test server.
  - `~/test/*`

- `Removed` Webpack bundler.
  - `~/webpack.config.cjs`

### **0.6.6**

- `Added` SVG component support.
  - `~/src/ts/Components/Components.ts`
  - `~/src/ts/Elements/Elements.ts`

### **0.6.5**

Skipped v0.6.1-v0.6.4 while testing different configurations and publishing again.

- `Added` somewhat better build configurations.

### **0.6.0**

- `Added` Exports.
  - `~/src/ts/index.ts`

### **0.5.16**

- `Added` Better documentation
  - `~/README.md`
  - `~/CONTRIBUTING.md`

### **0.5.15**

- `Added` Better documentation
  - `~/README.md`
  - `~/CONTRIBUTING.md`

- `Added` Better package metadata for publishing
  - `~/package.json`

### **0.5.14**

- `Added` Documentation for missing features.

- `Removed` Markdown feature because it isn't in the alpha scope.
  - `~/src/ts/markdown.ts`

- `Removed` Button, Card, Chip, Input and Icon components because they aren't in the alpha scope.
  - `~/src/ts/Components/Atoms/Icon/Icon.ts`
  - `~/src/ts/Components/Molecules/Button/Button.ts`
  - `~/src/ts/Components/Molecules/Card/Card.ts`
  - `~/src/ts/Components/Molecules/Chip/Chip.ts`
  - `~/src/ts/Components/Molecules/Input/Input.ts`

### **0.5.13**

- `Added` minimal reactive functionality. At the moment, rerenders the whole page when the state changes in any way.
  - `~/src/ts/Observable.ts`
  - `~/src/ts/types.ts`
  - `~/src/ts/Elements.ts`
  - `~/src/ts/Elements.ts`

- `Added` prependToBody functionality to the Page organism.
  - `~/src/ts/Components/Organisms/Page/Page.ts`

### **0.5.12**

- `Added` the Colorpage organism. (for testing)
  - `~/src/ts/Ana/Ana.ts`
  - `~/src/ts/Components/Pages/Colorpage`

- `Added` the Colors testing page.
  - `~/test/app.ts`
  - `~/test/colors.html`

- `Added` css variable functionality.
  - `~/src/scss/variables/colors.scss`
  - `~/src/scss/utils/colors.mod.scss`
  - `~/src/scss/style.scss`

- `Added` basic Page organism.
  - `~/src/ts/Components/Organism/Page/Page.ts`
  - `~/src/scss/organisms.mod.scss`

### **0.5.11**

- `Added` the Testpage organism.
  - `~/src/ts/Components/Organisms/Testpage/Testpage.ts`
  - `~/src/ts/Ana/Ana.ts`
  - `~/scss/organisms.mod.scss`

- `Added` the round, elevation and addClass properties to the Surface atom
  - `~/src/Components/Atoms/Surface/Surface.ts`
  - `~/src/Components/Atoms/Surface/Surface.test.html`

- `Added` standarized Spacing classes for roundness, margin, padding, and gap.
  - `~/src/scss/atoms.mod.scss`
  - `~/src/ts/types.ts`
  - `~/src/ts/Components/Atoms/Box/Box.ts`
  - `~/src/ts/Components/Atoms/List/List.ts`
  - `~/src/ts/Components/Particles/Particles.ts`

- `Added` the Test atom.
  - `~/src/ts/Components/Molecules/Test/Test.ts`
  - `~/src/ts/Ana/Ana.ts`

- `Added` a fix for the testing server.
  - `~/tsconfig.json`
  - `~/test/app.ts`
  - `~/test/index.html`

### **0.5.10**

- `Added` the Checkbox molecule
  - `~/src/ts/Components/Molecules/Checkbox/Checkbox.ts`
  - `~/src/ts/Ana/Ana.ts`
  - `~/src/ts/types.ts`
  - `~/src/scss/molecules.mod.scss`
  - `~/src/scss/style.scss`

- `Added` the addClass and tag properties to the Label atom.
  - `~/src/ts/Component/Atoms/Label/Label.ts`

### **0.5.9**

- `Added` the Link atom
  - `~/src/ts/Components/Atoms/Link.ts`
  - `~/src/ts/Ana/Ana.tx`
  - `~/src/scss/atoms.mod.scss`

### **0.5.8**

- `Added` a better component example in `CONTRIBUTING.md`.
  - `~/CONTRIBUTING.md`

- `Added` a Title, Heading, Subheading, Label and Paragraph atoms
  - `~/src/ts/Components/Atoms/Title/Title.ts`
  - `~/src/ts/Components/Atoms/Heading/Heading.ts`
  - `~/src/ts/Components/Atoms/Subheading/Subheading.ts`
  - `~/src/ts/Components/Atoms/Paragraph/Paragraph.ts`
  - `~/src/ts/Components/Atoms/Label/Label.ts`
  - `~/src/scss/atoms.mod.scss`
  - `~/src/ts/Ana/Ana.ts`

- `Added` reset Element Surface, Box and List documentation comments
  - `~/src/ts/Components/Atoms/Box/Box.ts`
  - `~/src/ts/Components/Atoms/List/List.ts`
  - `~/src/ts/Components/Atoms/Surface/Surface.ts`
  - `~/src/ts/Elements/Element/Element.ts`

### **0.5.7**

- `Added` hotfix where untracked files didn't commit
  - `~/src/ts/Components/Atoms/Box/Box.ts`
  - `~/src/ts/Components/Atoms/List/List.ts`

### **0.5.6**

- `Added` the Box atom
  - `~/src/scss/atoms.mod.scss`
  - `~/src/ts/Ana/Ana.ts`
  - `~/src/ts/Components/Atoms/Box/Box.ts`
  - `~/src/ts/Components/Particles/Particles.ts`
  - `~/src/ts/types.ts`

- `Added` the List atom
  - `~/src/scss/atoms.mod.scss`
  - `~/src/ts/Ana/Ana.ts`
  - `~/src/ts/Components/Atoms/List/List.ts`
  - `~/src/ts/Components/Particles/Particles.ts`
  - `~/src/ts/types.ts`

### **0.5.5**

- `Added` the Surface atom
  - `~/src/scss/utils/colors.mod.scss`
  - `~/src/scss/atoms.mod.scss`
  - `~/src/ts/Ana/Ana.ts`
  - `~/src/ts/Components/Atoms/Surface/Surface.ts`
  - `~/src/ts/Components/Particles/Particles.ts`
  - `~/src/ts/types.ts`

- `Added` a better implementation for Layout atom
  - `~/src/ts/Components/Atoms/Layout/Layout.ts`
  - `~/src/ts/types.ts`

### **0.5.4**

- `Added` the Layout atom
  - `~/src/scss/atoms.mod.scss`
  - `~/src/ts/Components/Atoms/Layout/Layout.ts`
  - `~/src/ts/Components/Particles/Particles.ts`

- `Added` an Element render fix
  - `~/src/Elements/Element/Element.ts`

### **0.5.3**

- `Added` cleaner code inside in the Element class.
  - `~/src/ts/Elements/Element/Element.ts`

- `Added` playground to the gitignore file, because now the changes made on it wont be staged.
  - `~/.gitignore``

- `Added` references to the package scripts `_build-ts:watch` and `_publish-ts` in the changelog.
  - `~/CHANGELOG.md`

### **0.5.2**

I made a design decision regarding the project's readability when using the Ana framework. Firstly, moved the class assignation to a curried function: `a.div(...children).has({class: 'class'})` -> `a.div('class')(...children)`. Secondly a children checker was implemented for cases when a function accidentaly is sent as a child: `a.div('class')(a.div())`, the correct way is as follows: `a.div('class')(a.div()())`. Empty elements like `<img/>` or `<input/>` are also affected.

```typescript
// Before
a.div(
  a.div(
    ...children
  ).has({ class: 'child' })
).has({ class: 'parent' })

// After
a.div('parent')(
  a.div('child')(
    ...children
  )
)

// --- Empty Elements ---

// Before
a.div(
  a.input({
    class: 'child',
    type: 'checkbox',
    checked: true,
  })
).has({ class: 'parent' })

// After
a.div('parent')(
  a.input('child').has({ type: 'checkbox', checked: true })
)
```

- `Added` a more readable render function.
  - `~/src/ts/Elements/Element/Element.ts`

- `Added` minor documentation to playrgound.
  - `~/src/test/playground.html`

### **0.5.1**

This is another update with lots of files but few changes.

- `Added` cleaner code to the framework in general:
  - `~/src/ts/Ana/*`
  - `~/src/ts/Elements/*` - Implemented the matching dictionary inside `Window` instead of `HTMLElement`.
  - `~/src/ts/types.ts`

- `Removed` the `html-element` package, `Added` the `classnames` package.
  - `~/package.json`

### **0.5.0**

In this update, I'm going all-in with TypeScript and using this opportunity to do it cleanly. The source code is modular now, with every *one thing* inside a directory. That is why there are a lot of changes, but really, not much has changed. The function `extendParameterDefaults` has been in my mind a lot lately. I know how to avoid it altogether using a "constants" object, maybe inside a new file with the name: `component.constants.ts`.

- `Added` new fraction system, this has been going on back and forth for a while. I need to decide for one sasslinter and stick to it.
  - `~/src/scss/utils/layout.mod.scss`

- `Added` modular organization to the Ana framework.
  - `~/src/ts/Ana/*`
  - `~/src/ts/Components/*`
  - `~/src/ts/Elements/*`

- `Removed` previous organization of the Ana framework.
  - `~/src/ts/ana.ts`
  - `~/src/ts/elements.ts`
  - `~/src/ts/molecules.ts`
  - `~/src/ts/organisms.ts`
  - `~/src/ts/standard.ts`

- `Removed` previous organization of component testing
  - `~/src/test/components/*`

- `Added` a home view for component testing
  - `~/src/test/index.html`

- `Added` a cleaner organization of package scripts.
  - `~/package.json`
  - `~/tsconfig.json`
  - `~/test/tsconfig.json`
  - `~/webpack.config.js`

- `Added` a better contributing file.
  - `~/CONTRIBUTING.md`

- `Removed` Docuemnation getter function. The problem is that the typedoc script uses all .ts files to generate the `~/dist/typedoc/typedoc.json`, including `~/test/app.ts` that references the generated `typedoc.json`. So, the typedoc script must exclude the test server or else it won't run.
  - `~/test/app.ts`

### **0.4.0**

- `Added` (WIP) Markdown creation module for easy formatting in .mdx files.

- `Removed` Storybook because it was having compiling error and dependancy vulnerabilities and can be avoided with a customized component testing.
  - `~/.storybook`
  - `~/test/stories`
  - `~/test/utils`

### **0.3.0**

- `Added` Typescript Classes
  - `~/src/ts/standard.ts` constains the classes that make up the Ana standard's data structures.
  - `~/src/ts/elements.ts` constains the class AnaElements that renders all HTMLElements using the standard.
  - `~/src/ts/ana.ts` constains the class Ana, the target developer will mainly interact with this class.
  - `~/src/ts/index.ts` constains global object overrides and exports.
  - `~/tsconfig.json` contains TypeScript global configurations.
  - `~/webpack.config.json` contains Webpack global configurations.

- `Added` Playground testing HTML file.
  - `~/test/playground-html`

- `Removed` Gulpfile because all gulp functions were substituted by NPM scripts.
  - `~/gulpfile.js`

- `Removed` package-lock.json because is automatically generated.
  - `~/package-lock.json`

- `Changed` Package to newer framework technology (`./package.json`)
  - `Removed` All gulp dependencies (`gulp`, `gulp-concat`, `gulp-minify`, `gulp-rename`, `gulp-sass`, `gulp-jsdoc3`, and `gulp-sourcemaps`) becuase they were substituted by the TypeScript compiler and NPM scripts.
  - `Removed` All jest dependencies (`jest` and `jest-html-reporter`) because unit tests will be implemented in a future release.
  - `Removed` The `jsdoc-json` dependency becuse they were substituted by TypeScript's TypeDoc.
  - `Removed` All scss dependencies (`node-sass`, `sass`, and `sassdoc`) because they were substituted by NPM scripts.
  - `Added` The TypeScript loader dependency `ts-loader`.
  - `Added` Webpack required dependencies for TypeScript compiling (`webpack` and `webpack-cli`)

- `Changed` Layout math syntax from `math.div(1, 2)` to `1/2.`
  - `~/src/scss/utils/layouts.mod.scss`

- `Changed` Gitignore directory from `public/` to `dist/`.
  - `~/.gitignore`

### **0.2.0**

- `Added` Storybook module.
  - `~/.storybook/main.js` contains the general configuration for the storybook module. [Read more](https://storybook.js.org/docs/react/configure/overview)
  - `~/.storybook/preview.js` contains story level confguration and global variables or functions. [Read more](https://storybook.js.org/docs/react/configure/overview#configure-story-rendering)
  - `~/test/stories/helpers/documentation.js` contains all elements and functions exclusive to Storybook documentation.
  - `~/test/stories/utils/sampleData.js` contains samples of standarized Data. This prevents inconsitencies in testing samples. *This file still needs lots of data samples and should be expanded with time.*

- `Added` Storybook stories for multiple components.
  - `~/test/stories/atoms.story.mdx` contains miscelaneous atom components, the uncategorizable.
  - `~/test/stories/input.story.mdx` contains aInputText, aInputCheckbox, aInputSelect, and all future input components.
  - `~/test/stories/layout.story.mdx` contains aLayout but needs a lot of custom documentation that illustrates correctly how to configure the component.
  - `~/test/stories/typography.story.mdx` contains aLabel, aSmall, aParagraph, aSubheading, aHeading, aTitle, and aDisplay components.

- `Added` custom documentation styles.
  - `~/src/scss/docs.mod.scss` contains styles exclusive to the process of documenting elements inside the Storybook site.
  - `~/src/scss/styles.scss` added the import.

- `Added` layout-block mixin inside the atoms module. *Missing mixin sassdoc documentation*
  - `~/src/scss/atoms.mod.scss`

- `Added` Column skip functionality to the layout mixin.
  - `~/src/scss/utils/layouts.mod.scss`

- `Added` Material design icons to main file.
  - `~/src/scss/styles.scss`

- `Added` Component documentation to track progress.
  - `~/README.md`

- `Changed` component documentation to be more understandable.
  - `~/src/js/atoms/card.js`
  - `~/src/js/atoms/display.js`
  - `~/src/js/atoms/heading.js`
  - `~/src/js/atoms/label.js`
  - `~/src/js/atoms/paragraph.js`
  - `~/src/js/atoms/separator.js`
  - `~/src/js/atoms/small.js`
  - `~/src/js/atoms/subheading.js`
  - `~/src/js/atoms/title.js`
  - `~/src/js/molecules/input.js`
  