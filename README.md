# ana.js

Anarchy

## To-Do

### Utils

- [ ] Add a standarized way to create, concatenate, and override element classes of any ana component.

### General Updates

- [ ] Update all UI components to support new render function.
- [ ] After element classes are standarized, update library to support said standard.
- [ ] Add unit testing for UI components. (Storybook.js)
- [ ] Add documentation for all UI components.

## Notes

### JS Componentes

#### Inside

- Surfaces
- Colors
- Typography
- Iconography
- Input parts

#### To update

- Merge options and attributes
- Validate attributes
- Add class substitution
- Change from R to RR

#### Discipline things regarding components

- Attributes and classes will be applied to the highest level element.
- Attributes and options must be stored in the same object "edit".
- Attribute types must be validated at the start of the function
- Attributes and classes for elements other than the highest level must be attended in a case-to-case basis and will have the prefix "attr" (attrTitle: {...attributes for Title element }) or the prefix "class" (classTitle: 'a-secondary-title')
