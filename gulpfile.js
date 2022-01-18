// =====================================================================================================
//     ____       _          __ _ _
//    / ___|_   _| |_ __    / _(_) | ___
//   | |  _| | | | | '_ \  | |_| | |/ _ \
//   | |_| | |_| | | |_) | |  _| | |  __/
//    \____|\__,_|_| .__/  |_| |_|_|\___|
//                 |_|
// =====================================================================================================
/**
 * @module Gulp
 */
const { src, dest, series, parallel, watch } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sassdoc = require('sassdoc');
const jsdoc = require('gulp-jsdoc3');
const minify = require('gulp-minify');
const concat = require('gulp-concat');

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This object contains all the paths that reference a directory.
 * @type {Object}
 */
const dirPath = {
  publicCss: './public/css',
  publicJs: './public/js',
  publicSassdoc: './public/sassdoc',
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This object contains all the paths that reference a file or group of files.
 * @type {Object}
 */
const filePath = {
  stylesScss: './src/scss/style.scss',
  gulpfile: './gulpfile.js',
  jsdocGulpfile: './public/jsdoc/gulpfile.md',
  jsdocApp: './public/jsdoc/app.md',
  anyScss: './src/scss/**/*.scss',
  anyJs: './src/js/**/*.js',
  anyJsdoc: '.+\\.js(doc|x)?$',
  clientJs: './src/js/client/*.js',
  anaJs: './src/js/*.js',
  anaConst: './src/js/const.js',
  anaUtils: './src/js/utils.js',
  anaCheck: './src/js/check.js',
  anaMatch: './src/js/match.js',
  anaPrerender: './src/js/prerender.js',
  anaRender: './src/js/render.js',
  anaAtoms: './src/js/atoms/*.js',
  anaMolecules: './src/js/molecules/*.js',
  anaOrganisms: './src/js/organisms/*.js',
  anaExport: './src/js/export.js',
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Compiles all scss inside ./src/scss into expanded css code and sourcemap.
 * @param {Function} done Signal async completion.
 */
function buildCss(done) {
  src(filePath.stylesScss)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(sourcemaps.write('./'))
    .pipe(dest(dirPath.publicCss));
  done();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Compiles all scss inside ./src/scss into compressed css code.
 * @param {Function} done Signal async completion.
 */
function buildMinCss(done) {
  src(filePath.stylesScss)
    .pipe(
      sass({
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(dirPath.publicCss));
  done();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Compiles all js inside ./src/js into expanded and minified js code.
 * @param {Function} done Signal async completion.
 */
function buildJs(done) {
  src([
    filePath.anaConst,
    filePath.anaUtils,
    filePath.anaCheck,
    filePath.anaMatch,
    filePath.anaPrerender,
    filePath.anaRender,
    filePath.anaAtoms,
    filePath.anaMolecules,
    filePath.anaOrganisms,
    filePath.anaExport,
  ])
    .pipe(concat('ana.js'))
    .pipe(minify())
    .pipe(dest(dirPath.publicJs));
  done();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Watches for changes inside ./src/scss and executes buildScss() when a file is saved.
 * @param {Function} done Signal async completion.
 */
function watchSass(done) {
  watch(filePath.anyScss, series(buildCss, buildMinCss));
  done();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Watches for changes inside ./src/client/scss and executes buildScss() when a file is saved.
 * @param {Function} done Signal async completion.
 */
function watchJs(done) {
  watch(filePath.anyJs, series(buildJs));
  done();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Automitcally creates documentation for all scss files. The resulting document is created inside ./public/sassdoc.
 */
function documentSass() {
  var options = {
    dest: dirPath.publicSassdoc,
    verbose: true,
    groups: {
      // Utilities
      util_error: 'U/ Error Handling',
      util_helper: 'U/ Helper Functions',
      util_layouts: 'U/ Layouts',
      util_type: 'U/ Typography',
      // Components
      comp__song: 'C/ Song',
      // Pages
      page__playlist: 'P/ Playlist',
    },
  };

  return src(filePath.anyScss).pipe(sassdoc(options));
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Automitcally creates documentation for all js files. The resulting document is created inside ./public/jsdoc.
 * @param {Function} done Signal async completion.
 */
function documentJs(done) {
  const options = {
    plugins: ['plugins/markdown'],
    opts: {
      destination: './public/jsdoc',
    },
    source: {
      include: ['./gulpfile.js'],
      includePattern: filePath.anyJsdoc,
    },
  };

  src(filePath.anyJs).pipe(jsdoc(options));
  done();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
exports.watch = series(watchSass, watchJs)
exports.build = series(
  buildCss,
  buildMinCss,
  buildJs,
  documentSass,
  documentJs
)
