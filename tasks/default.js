import gulp from 'gulp'

const browserSync = require('browser-sync').create()

gulp.task('default', ['templates', 'styles', 'scripts'], () => {
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['examples']
    }
  })
})
