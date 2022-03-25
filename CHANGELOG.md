# CHANGELOG.md

## Unreleased

### **0.4.0** (Latest)

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
  