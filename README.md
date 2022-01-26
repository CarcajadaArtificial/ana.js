# ana.js

Anarchy

## Known Bugs

- [ ] The script `gulp watch` is not running JS documentation and builds.

## To-do

- [ ] Support SVG elements.
- [ ] Include [markdown-creator](https://www.npmjs.com/package/markdown-creator) in Storybook documentation.
- [ ] Publish documentation website.
- [ ] Add a CONTRIBUTING.md file with setup instructions, and correct feature development process.
- [ ] Setup project Github Wiki, tasks, and actions.
- [ ] Add a documentation home to Storybook.

## Notes

### Inside

- Surfaces
- Colors
- Typography
- Iconography
- Input parts

### To update

- Merge options and attributes
- Validate attributes
- Add class substitution
- Change from R to RR

### Discipline things regarding components

- Attributes and classes will be applied to the highest level element.
- Attributes and options must be stored in the same object "edit".
- Attribute types must be validated at the start of the function
- Attributes and classes for elements other than the highest level must be attended in a case-to-case basis and will have the prefix "attr" (attrTitle: {...attributes for Title element }) or the prefix "class" (classTitle: 'a-secondary-title')

## Components

### Atoms

| Component  | JsDoc | Storybook | Class Standard | Render Updated |
| ---------- | ----- | --------- | -------------- | -------------- |
| Button     | ✅    | ⌛         | ⭕             | ✅             |
| Card       | ✅    | ⭕         | ⭕             | ✅             |
| Display    | ✅    | ⌛         | ⭕             | ✅             |
| Heading    | ✅    | ⌛         | ⭕             | ✅             |
| Icon       | ✅    | ⌛         | ⭕             | ✅             |
| Label      | ✅    | ⌛         | ⭕             | ✅             |
| Layout     | ⭕    | ✅         | ⭕             | ✅             |
| Link       | ✅    | ⌛         | ⭕             | ✅             |
| Paragraph  | ✅    | ⌛         | ⭕             | ✅             |
| Separator  | ⭕    | ⌛         | ⭕             | ✅             |
| Small      | ✅    | ⌛         | ⭕             | ✅             |
| Subheading | ✅    | ⌛         | ⭕             | ✅             |
| Title      | ✅    | ⌛         | ⭕             | ✅             |

### Molecules

| Component  | JsDoc | Storybook | Class Standard | Render Updated |
| ---------- | ----- | --------- | -------------- | -------------- |
| Chip       | ✅    | ⭕         | ⭕             | ✅             |
| InputText  | ✅    | ⌛         | ⭕             | ✅             |
| Checkbox   | ✅    | ⌛         | ⭕             | ✅             |
| Select     | ✅    | ⌛         | ⭕             | ✅             |

### Organisms

| Component  | JsDoc | Storybook | Class Standard | Render Updated |
| ---------- | ----- | --------- | -------------- | -------------- |
| ChartBar   | ⭕    | ⭕         | ⭕             | ✅             |
| CoverArt   | ⭕    | ⭕         | ⭕             | ⭕             |
| Mail       | ⭕    | ⭕         | ⭕             | ✅             |
| MailList   | ⭕    | ⭕         | ⭕             | ✅             |
| Record     | ⭕    | ⭕         | ⭕             | ⭕             |
| Table      | ⭕    | ⭕         | ⭕             | ⭕             |
