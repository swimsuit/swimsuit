require('babel/register')

var gulp = require('gulp')
var istanbul = require('gulp-istanbul')
var isparta = require('isparta')
var mocha = require('gulp-mocha')
var codecov = require('gulp-codecov.io')
var babel = require('gulp-babel')

gulp.task('istanbul', function (cb) {
  gulp.src(['./src/**/*.js'])
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter,
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', cb)
})

gulp.task('test', ['istanbul'], function (cb) {
  return gulp.src('./test/**/*.js')
    .pipe(mocha({
      reporter: 'spec'
    }))
    .pipe(istanbul.writeReports({
      dir: './coverage',
      reportOpts: {dir: './coverage'},
      reporters: ['lcovonly']
    }))
})

gulp.task('coverage', function () {
  return gulp.src('./coverage/lcov.info')
    .pipe(codecov())
})

gulp.task('build', function () {
  return gulp.src('src/speedo.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['test', 'coverage'])
