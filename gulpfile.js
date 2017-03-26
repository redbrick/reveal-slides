const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('copy-images', () => gulp.src('./theme/images/*').pipe(gulp.dest('./dist/images/')));

gulp.task('sass', () => gulp.src('./theme/redbrick.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./dist/css')));

gulp.task('copy-css', () => gulp.src(['./node_modules/reveal.js/css/print/pdf.css', './node_modules/reveal.js/css/print/paper.css']).pipe(gulp.dest('dist/css')));

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

gulp.task('compress', () => gulp
  .src('./theme/*.js')
  .pipe(concat('main.js'))
  .pipe(babel())
  .pipe(
    minify({
      ext: {
        min: '.min.js',
      },
      exclude    : ['tasks'],
      noSource   : true,
      ignoreFiles: ['.combo.js', '*.min.js'],
    })
  )
  .pipe(gulp.dest('dist/js'))
);

gulp.task('serve', ['default'], () => {
  connect.server({
    port      : 8000,
    livereload: true,
  });
});

gulp.task('default', ['copy-images', 'copy-js', 'copy-css', 'compress', 'sass']);
