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

// ESM config — no Babel transpile, preserves import/export
const esmConfig = {
  entry: {
    anybox: './js/anybox/init.js',
  },
  module: {
    rules: [],
  },
  plugins: [],
  experiments: {
    outputModule: true,
  },
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].mjs',
    library: { type: 'module' },
    module: true,
    environment: {
      module: true,
    },
  },
};

const esmMinConfig = {
  ...esmConfig,
  entry: {
    'anybox.min': './js/anybox/init.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: { comments: false },
          mangle: true,
          module: true,
        },
      }),
    ],
  },
  output: {
    ...esmConfig.output,
    filename: '[name].mjs',
  },
};

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
  // ESM build for import support (dist/)
  esmConfig,
  esmMinConfig,
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
