const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('copy-images', function () {
  return gulp.src('./theme/images/*')
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('sass', function () {
  return gulp.src('./theme/redbrick.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-css', function() {
  return gulp.src([
    './node_modules/reveal.js/css/print/pdf.css',
    './node_modules/reveal.js/css/print/paper.css'
    ])
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-js', function() {
  return gulp.src([
    './node_modules/reveal.js/js/reveal.js',
    './node_modules/reveal.js/lib/js/head.min.js',
    './node_modules/reveal.js/lib/js/classList.js',
    './node_modules/reveal.js/plugin/notes/notes.js',
    './node_modules/reveal.js/plugin/zoom-js/zoom.js',
    './node_modules/reveal.js/plugin/highlight/highlight.js',
    './node_modules/reveal.js/plugin/markdown/markdown.js',
    './node_modules/reveal.js/plugin/markdown/marked.js'
    ])
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['copy-images', 'copy-js', 'copy-css', 'sass']);
