// =====================================================================================================
//    _____         _     ____                            _                 _
//   |_   _|__  ___| |_  |  _ \  ___ _ __   ___ _ __   __| | ___ _ __   ___(_) ___  ___
//     | |/ _ \/ __| __| | | | |/ _ \ '_ \ / _ \ '_ \ / _` |/ _ \ '_ \ / __| |/ _ \/ __|
//     | |  __/\__ \ |_  | |_| |  __/ |_) |  __/ | | | (_| |  __/ | | | (__| |  __/\__ \
//     |_|\___||___/\__| |____/ \___| .__/ \___|_| |_|\__,_|\___|_| |_|\___|_|\___||___/
//                                  |_|
// =====================================================================================================
/**
 * @module Test/Dependencies
 */
'use strict'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: gulp is installed
 */
function isGulpInstalled() {
  let gulp = require('gulp')
  expect(gulp).toBeDefined()
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: gulp-jsdoc3 is installed
 */
function isGulpjsdocInstalled() {
  let jsdoc = require('gulp-jsdoc3')
  expect(jsdoc).toBeDefined()
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: gulp-rename is installed
 */
function isGulprenameInstalled() {
  let rename = require('gulp-rename')
  expect(rename).toBeDefined()
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: gulp-sass is installed
 */
function isGulpsassInstalled() {
  let sass = require('gulp-sass')
  expect(sass).toBeDefined()
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: gulp-sourcemaps is installed
 */
function isGulpsourcemapsInstalled() {
  let sourcemaps = require('gulp-sourcemaps')
  expect(sourcemaps).toBeDefined()
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: node-sass is installed
 */
function isNodesassInstalled() {
  let sass = require('node-sass')
  expect(sass).toBeDefined()
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: sassdoc is installed
 */
function isSassdocInstalled() {
  let sassdoc = require('sassdoc')
  expect(sassdoc).toBeDefined()
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: xml-js is installed
 */
function isXmljsInstalled() {
  let convert = require('xml-js')
  expect(convert).toBeDefined()
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: express is installed
 */
function isExpressInstalled() {
  let express = require('express')
  expect(express).toBeDefined()
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Dependancy testing: firebase is installed
 */
function isFirebaseInstalled() {
  let firebase = require('firebase')
  require('firebase/firestore')
  expect(firebase).toBeDefined()
}

// =====================================================================================================
describe('NPM Dependancy - Setup testing', () => {
  if (false) {
  }
  describe('Dependancy Installation', () => {
    test('gulp is installed', isGulpInstalled)
    test('gulp-jsdoc3 is installed', isGulpjsdocInstalled)
    test('gulp-rename is installed', isGulprenameInstalled)
    test('gulp-sass is installed', isGulpsassInstalled)
    test('gulp-sourcemaps is installed', isGulpsourcemapsInstalled)
    test('node-sass is installed', isNodesassInstalled)
    test('sassdoc is installed', isSassdocInstalled)
    test('xml-js is installed', isXmljsInstalled)
    test('express is installed', isExpressInstalled)
    test('express is installed', isFirebaseInstalled)
  })
})
