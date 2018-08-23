const gulp = require('gulp');
const browserify = require('browserify');
const browserifyCss = require('browserify-css');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();

gulp.task('build', function () {
    return browserify({entries: './index.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .transform(browserifyCss)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('view'));
});

gulp.task('serve', [], function( cb ){

    browserSync.init({
        open:  true ,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['./index.js',
                './App.js',
                './components/**/*.js',
                './reducers/*.js',
                './actions/*.js',
                './**/*.css'], ['reload']);
});

gulp.task('default', ['serve']);

gulp.task('reload', ['build'], function(){
  browserSync.reload();
});
