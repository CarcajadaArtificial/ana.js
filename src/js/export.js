// =====================================================================================================
// UNIT TESTING EXPORT
// =====================================================================================================
/**
 * @todo Standard error handling
 */
 if (CLIENT_ENVIRONMENT.UNIT_TESTING) {
  try {
    module.exports = {
      R: _render,
      RR: RR,
      CLIENT_ENVIRONMENT: CLIENT_ENVIRONMENT,
      GLOBAL_ATTRIBUTES: GLOBAL_ATTRIBUTES,
      CHECK: CHECK,
      MATCH: MATCH,
      verifyRenderAttributes: _verifyRenderAttributes,
      verifyRenderChildren: _verifyRenderChildren,
      slug: slug,
      areEqualArrays: areEqualArrays,
      appendChildren: appendChildren,
      alarm: alarm,
      eID: eID,
      bring: bring,
      _writeDatatypeErrorMessage: _writeDatatypeErrorMessage,
      //Atoms
      aLabel: aLabel,
      aSmall: aSmall,
      aParagraph: aParagraph,
      aSubheading: aSubheading,
      aHeading: aHeading,
      aTitle: aTitle,
      aDisplay: aDisplay,
      aButton: aButton,
      aIcon: aIcon,
      aLink: aLink,
      aSeparator: aSeparator,
      aLayoutBlock: aLayoutBlock,
      aLayout: aLayout,
      //Molecules
      aInputText: aInputText,
      aInputSelect: aInputSelect,
      aInputCheckbox: aInputCheckbox,
      //Organisms
    }
  } catch (error) {
    if (error.name === 'ReferenceError') {
      console.warn(
        'Testing Environment, remember to change MODE_UNIT_TESTING to false before deploying to production.'
      )
    }
  }
}
