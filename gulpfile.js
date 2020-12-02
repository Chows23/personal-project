const {src, dest, series, parallel} = require('gulp');

function htmlTask() {
  return src('src/*.html')
    .pipe(dest('dist'))
}

function styleTask() {
  return src('src/styles/*.css')
    .pipe(dest('dist/css'))
}

function scriptTask() {
  return src('src/scripts/*.js')
    .pipe(dest('dist/js'))
}

function imageTask() {
  return src('src/images/*png')
    .pipe(dest('dist/img'))
}

exports.default = series(htmlTask, imageTask, styleTask, scriptTask);