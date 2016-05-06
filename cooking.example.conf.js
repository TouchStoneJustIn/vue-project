var cooking = require('cooking');

cooking.set({
  entry: {
    build: './example/index.js'
  },
  dist: './example/dist',
  use: 'vue',
  publicPath: '/example/dist/',
  template: false,

  devServer: false,

  extends: ['vue', 'lint']
});

cooking.add('externals.vue', 'Vue');

module.exports = cooking.resolve();