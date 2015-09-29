// [gulpjs](https://github.com/gulpjs/gulp)
// [gulpjs-docs](https://github.com/gulpjs/gulp/blob/master/docs/README.md)
// [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.js)
// [building-with-gulp](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/)

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md
// http://makina-corpus.com/blog/metier/2015/make-your-gulp-modular
var requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});
