# ana.js

Anarchy

## Notes

### Known Bugs

### Release 1

- [X] Migrate project from Js to Ts and from gulpfile to npm scripts.
- [X] Convert render function to a prototype `R.div(...children).edit({...edit})`

### Release 2

- [ ] Convert all components to a prototype `aComponent(...children).edit({..edit})`
- [ ] Add a Standard Override Dictionary in Ana instance.
- [ ] Include [markdown-creator](https://www.npmjs.com/package/markdown-creator) in Storybook documentation.
- [ ] Support SVG elements.
- [ ] Publish documentation website.
- [ ] Add a documentation home to Storybook.

### Future

- [ ] Setup project Github Wiki, tasks, and actions.
- [ ] Create own iconography.
- [ ] Add a CONTRIBUTING.md file with setup instructions, and correct feature development process.

## Node

### Versions

```
$ node -v
v16.13.0
```

### Global dependencies

```
$ npm list -g --depth 0
├── corepack@0.10.0
├── node-sass@7.0.1
├── npm@8.1.0
├── typedoc@0.22.11
└── typescript@4.5.5
```

## Components

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
