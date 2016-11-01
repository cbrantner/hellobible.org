'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var addStream = require('add-stream');
var gulpNgConfig = require('gulp-ng-config');


var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function() {
  browserSync.reload();
});

var travisBranch;
if (process.env.TRAVIS_BRANCH) {
  console.log(process.env.TRAVIS_BRANCH + ': using configuration');
	travisBranch = process.env.TRAVIS_BRANCH;
} else {
	travisBranch = 'development';
}

gulp.task('make-config', [], function() {
  return gulp.src('./hellobible-config.json')
    .pipe(gulpNgConfig('hellobible.config', {
      environment: travisBranch
    }))
    .pipe(gulp.dest(path.join(conf.paths.src, '/app/')));
});

gulp.task('inject', ['make-config', 'scripts', 'styles'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/app/**/*.module.js'),
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
  ])
  .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
