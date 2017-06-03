const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('sass', () => gulp.src('./theme/redbrick.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./dist/css')));

gulp.task('copy-css', () =>
  gulp.src([
    './node_modules/reveal.js/css/reveal.css',
    './node_modules/reveal.js/css/print/pdf.css',
    './node_modules/reveal.js/css/print/paper.css'
  ])
  .pipe(gulp.dest('dist/css'))
);

gulp.task('copy-js', () =>
  gulp.src([
    './node_modules/reveal.js/js/reveal.js',
    './node_modules/reveal.js/lib/js/head.min.js',
    './node_modules/reveal.js/lib/js/classList.js',
    './node_modules/reveal.js/plugin/notes/notes.js',
    './node_modules/reveal.js/plugin/notes/notes.html',
    './node_modules/reveal.js/plugin/print-pdf/print-pdf.js',
    './node_modules/reveal.js/plugin/zoom-js/zoom.js',
    './node_modules/reveal.js/plugin/highlight/highlight.js',
    './node_modules/reveal.js/plugin/markdown/markdown.js',
    './node_modules/reveal.js/plugin/markdown/marked.js',
  ])
  .pipe(gulp.dest('dist/js'))
);

gulp.task('serve', ['copy-js', 'copy-css', 'default'], () => {
  connect.server({
    port      : 8000,
    livereload: true,
  });
});

gulp.task('default', ['sass']);
