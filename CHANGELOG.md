# CHANGELOG.md

## Unreleased

### **0.5.4** (Latest)

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
  