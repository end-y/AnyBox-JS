const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: {
    anybox: './js/anybox/init.js',
    'anybox.min': './js/anybox/init.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: 'Anybox',
    libraryExport: 'default' ,
    libraryTarget: 'var',
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
  devServer: {
    inline: true,
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
