const gulp = require('gulp');
const postcss = require('gulp-postcss');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const atImport = require("postcss-import");
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const csso = require('gulp-csso');

function css() {
  const postcssPlugins = [
    atImport(),
    autoprefixer(), // TODO can we save bytes with optimized browser list?
    customProperties({preserve: false}) // Saving as many bytes as possible
  ];

  return gulp.src('src/m-all.css')
    .pipe(concat('min.css'))
    .pipe(postcss(postcssPlugins))
    .pipe(csso())
    .pipe(gulp.dest('dist'))
}

function customPropsCopy() {
  return gulp.src('src/custom-props.css')
    .pipe(gulp.dest('dist'))
}

function styles(cb) {
  gulp.parallel(css, customPropsCopy);
  cb();
}


function buildComponentsFile() {
  return gulp.src('src/*.js')
    .pipe(concat('min.js'))
    .pipe(terser())
    .pipe(gulp.dest('dist'))
}

function copyToDocs() {
  return gulp.src('dist/**/*').pipe(gulp.dest('docs/public'));
}

function fonts() {
  return gulp.src('src/**/*.woff2').pipe(gulp.dest('dist'));
}

function watch(cb) {
  gulp.series(css, customPropsCopy, fonts, buildComponentsFile, copyToDocs);
  gulp.watch('src', gulp.series(css, customPropsCopy, fonts, buildComponentsFile, copyToDocs));
  cb();
}

exports.styles = styles;
exports.fonts = fonts;
exports.buildComponentsFile = buildComponentsFile;
exports.build = gulp.series(css, customPropsCopy, fonts, buildComponentsFile, copyToDocs);
exports.watch = watch;