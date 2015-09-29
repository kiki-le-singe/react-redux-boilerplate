'use strict';

// https://www.npmjs.com/package/gulp-load-plugins
// https://github.com/gavro/gulp-iconify

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var iconify = require('gulp-iconify');
var config = require('./config').iconify;

gulp.task('iconify', function(){
  iconify({
    src: config.src,
    cssOutput: false,
    scssOutput: config.scssOutput
  });
});
