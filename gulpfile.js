const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('copy-images', () => {
  return gulp.src('./theme/images/*')
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('sass', () => {
  return gulp.src('./theme/redbrick.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-css', () => {
  return gulp.src([
    './node_modules/reveal.js/css/print/pdf.css',
    './node_modules/reveal.js/css/print/paper.css'
    ])
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-js', () => {
  return gulp.src([
    './node_modules/reveal.js/js/reveal.js',
    './node_modules/reveal.js/lib/js/head.min.js',
    './node_modules/reveal.js/lib/js/classList.js',
    './node_modules/reveal.js/plugin/notes/notes.js',
    './node_modules/reveal.js/plugin/notes/notes.html',
    './node_modules/reveal.js/plugin/zoom-js/zoom.js',
    './node_modules/reveal.js/plugin/highlight/highlight.js',
    './node_modules/reveal.js/plugin/markdown/markdown.js',
    './node_modules/reveal.js/plugin/markdown/marked.js'
    ])
    .pipe(gulp.dest('dist/js'));
});

gulp.task('serve', ['default'], () => {
  connect.server({
    port      : 8000,
    root      : '.',
    livereload: true,
  });
});

gulp.task('default', ['copy-images', 'copy-js', 'copy-css', 'sass']);
