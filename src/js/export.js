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
    }
  } catch (error) {
    if (error.name === 'ReferenceError') {
      console.warn(
        'Testing Environment, remember to change MODE_UNIT_TESTING to false before deploying to production.'
      )
    }
  }
}
