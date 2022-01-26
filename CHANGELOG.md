# CHANGELOG.md

## Unreleased

### **0.2.0** (Latest)

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
  