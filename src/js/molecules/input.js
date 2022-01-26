//          ___                   _   
//     __ _|_ _|_ __  _ __  _   _| |_ 
//    / _` || || '_ \| '_ \| | | | __|
//   | (_| || || | | | |_) | |_| | |_ 
//    \__,_|___|_| |_| .__/ \__,_|\__|
//                   |_|              
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Molecules
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * An Input Text allows users to enter information the site requires from them.
 * @param {String} edit.inputLabel The text that states the name of the information being entered.
 * @param {Boolean} edit.isMultiline If true, the element will change from an `<input type="text">` to a `<textarea>` enabiling the use of multiple lines.
 * @param {Boolean} edit.isRequired If true, will add a required mark (*) next to the label and will add the required attribute to the element.
 * @param {Boolean} edit.isIncorrect If true, will add the class .input-error stating a mistaken input.
 */
function aInputText(
  edit = {
    inputLabel: undefined,
    isMultiline: undefined,
    isRequired: undefined,
    isIncorrect: undefined,
  }
) {
  // Parameter Validation
  let attr = validateComponent(edit, {
    inputLabel: [TYPE.str],
    isMultiline: [TYPE.und, TYPE.boo],
    isRequired: [TYPE.und, TYPE.boo],
    isIncorrect: [TYPE.und, TYPE.boo],
  })
  // Class Substitution
  let classes = {
    default: edit.class
      ? edit.class
      : `a-input-text ${edit.isIncorrect ? 'input-error' : ''}`,
  }

  // Checks that type attribute is not present.
  if (!CHECK.undefined(edit.type)) {
    console.error(
      'Error, there cannot be a type attribute passed to an input component, this is implicit.'
    )
  }

  // a-input-text-label
  let inputLabel = aLabel(
    {
      class: edit.isRequired
        ? 'a-input-text-label input-required'
        : 'a-input-text-label',
    },
    edit.inputLabel
  )
  // a-input-text-element
  let inputElement = RR(edit.isMultiline ? 'textarea' : 'input', {
    class: 'a-input-text-element',
    ...(edit.isMultiline ? {} : { type: 'text' }),
    ...(edit.isRequired ? { required: true } : {}),
    ...attr,
  })

  return RR('div', { ...{ class: classes.default } }, inputLabel, inputElement)
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * An Input Select a.k.a. dropdown menu, is one of the label-box inputs, it allows users to select an option from a predefined list without the need for typing.
 * @param {string} edit.inputLabel The text that states the name of the information being selected.
 * @param {array} edit.menuOptions The list of <option>'s to be rendered.
 * @param {string} edit.inputPlaceholder A disabled, selected, and hidden <option> that represents the placeholder.
 * @param {boolean} edit.isRequired If true, will add a required mark (*) next to the label and will add the required attribute to the element.
 * @param {boolean} edit.isIncorrect If true, will add the class .input-error stating a mistaken input.
 */
function aInputSelect(
  edit = {
    inputLabel: undefined,
    menuOptions: undefined,
    inputPlaceholder: undefined,
    isRequired: undefined,
    isIncorrect: undefined,
  }
) {
  // Parameter Validation
  let attr = validateComponent(edit, {
    inputLabel: [TYPE.str],
    menuOptions: [TYPE.arr],
    inputPlaceholder: [TYPE.und, TYPE.str],
    isRequired: [TYPE.und, TYPE.boo],
    isIncorrect: [TYPE.und, TYPE.boo],
  })
  // Class Substitution
  let classes = {
    default: edit.class
      ? edit.class
      : `a-input-select ${edit.isIncorrect ? 'input-error' : ''}`,
  }

  // List of <option>'s inside the <select> element.
  let renderedMenuOptions = []

  // a-input-select-placeholder
  if (edit.inputPlaceholder) {
    renderedMenuOptions.push(
      RR(
        'option',
        {
          value: '',
          disabled: true,
          selected: true,
          hidden: true,
          class: 'a-input-select-placeholder',
        },
        edit.inputPlaceholder
      )
    )
  }

  // a-input-select-option
  edit.menuOptions.forEach((menuOption) => {
    renderedMenuOptions.push(
      RR(
        'option',
        { value: menuOption, class: 'a-input-select-option' },
        menuOption
      )
    )
  })

  // a-input-select-label
  let inputLabel = aLabel(
    {
      class: edit.isRequired
        ? 'a-input-select-label input-required'
        : 'a-input-select-label',
    },
    edit.inputLabel
  )
  // a-input-select-element
  let inputElement = RR(
    'select',
    { class: 'a-input-select-element', ...attr },
    ...renderedMenuOptions
  )
  // a-input-select-arrow
  let inputArrow = aIcon({
    class: 'a-input-select-arrow',
    iconName: 'expand_more',
  })

  return RR(
    'div',
    { class: classes.default },
    inputLabel,
    inputElement,
    inputArrow
  )
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * An Input Checkbox is a control that allows the user to select any number of choices from a list, including no option. Conventionally, checkboxes are part of a list, for a single and independent control, use the Switch.
 * @param {String} edit.inputLabel The text that states the name of the information being selected.
 * @param {Function} edit.activateEvent This is an aditional event function that will run every time the checkbox is interacted with. The functions parameters are: {Object} e - Event, checked {Boolean} - New state of the checkbox after interaction.
 */
function aInputCheckbox(
  edit = { inputLabel: undefined, activateEvent: undefined }
) {
  // Parameter Validation
  let attr = validateComponent(edit, {
    inputLabel: [TYPE.str],
    activateEvent: [TYPE.und, TYPE.fun],
  })
  // Class Substitution
  let classes = {
    default: edit.class
      ? edit.class
      : `a-input-checkbox ${attr.disabled ? 'input-disabled' : ''} ${
          attr.checked ? 'input-selected' : ''
        }`,
  }

  // Check if tabindex is present in attr, and apply it to parent.
  let parentTabindex = 0
  if (CHECK.number(attr.tabindex, true)) {
    parentTabindex = attr.tabindex
    delete attr.tabindex
  }

  // a-input-checkbox click
  let clickParent = function (e) {
    if (!this.children[0].disabled) {
      this.children[0].toggleAttribute('checked')
      this.classList.toggle('input-selected')
    }
    if(edit.activateEvent) {
      edit.activateEvent(e, this.children[0].checked)
    }
  }
  // a-input-checkbox-label
  let inputLabel = aLabel(
    {
      class: 'a-input-checkbox-label',
    },
    edit.inputLabel
  )
  // a-input-checkbox-element
  let inputElement = RR('input', {
    class: 'a-input-checkbox-element',
    type: 'checkbox',
    tabindex: -1,
    ...attr,
  })

  return RR(
    'div',
    {
      class: classes.default,
      activate: clickParent,
      tabindex: parentTabindex,
    },
    inputElement,
    inputLabel
  )
}