const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const baseConfig = {
  entry: {
    anybox: './js/anybox/init.js',
    'anybox.min': './js/anybox/init.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)(test)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: false,
        terserOptions: {
          format: {
            comments: /^! anybox.js v.*/,
          },
          mangle: true,
        },
      }),
    ],
  },
}

module.exports = [
  // UMD build for npm (dist/)
  {
    ...baseConfig,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: 'Anybox',
      libraryExport: 'default',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
  },
  // Browser global build for demo page (test/dist/)
  {
    ...baseConfig,
    output: {
      path: path.resolve(__dirname, 'test/dist'),
      filename: '[name].js',
      library: 'Anybox',
      libraryExport: 'default',
      libraryTarget: 'var',
    },
    devServer: {},
  },
]
