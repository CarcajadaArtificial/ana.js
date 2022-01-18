//          ____        _   _              
//     __ _| __ ) _   _| |_| |_ ___  _ __  
//    / _` |  _ \| | | | __| __/ _ \| '_ \ 
//   | (_| | |_) | |_| | |_| || (_) | | | |
//    \__,_|____/ \__,_|\__|\__\___/|_| |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module Ana/Atoms
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * A Button is a very abstract and generalist component, the user should see it as a call to action to the next wanted step. Buttons work by performing a particular action and shouldn't be used when navigating to another page, for that use a link instead.
 * @param {String} edit.text The textual content of the button
 */
function aButton(
  edit = {
    text: '',
  }
) {
  // Parameter Validation
  let attr = validateComponent(edit, { text: [TYPE.str] })
  // Class Substitution
  let classes = {
    default: edit.class ? edit.class : 'a-button',
  }

  return RR('button', { class: classes.default, ...attr }, edit.text)
}
