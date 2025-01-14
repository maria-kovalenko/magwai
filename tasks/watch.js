const {
  watch,
  parallel,
  series
} = require('gulp');

module.exports = function watching() {
  watch('src/**/*.html', parallel('html'));
  // watch('src/**/*.php', parallel('php'));
  watch('src/**/*.scss', parallel('style'));
  watch('src/**/*.js', parallel('dev_js'));
  watch('src/img/**/*.+(png|jpg|jpeg|gif)', series('rastr', 'webp'));
  watch('src/svg/css/**/*.svg', series('svg_css', 'style'));
  watch('src/fonts/**/*.ttf', series('ttf', 'ttf2', 'fonts'));
}