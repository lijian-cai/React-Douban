const path = require('path');
//引入预览页面插件依赖
const HtmlWebpackPlugin = require('html-webpack-plugin')
//创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html', //指定用哪个模块文件
    filename: 'index.html' //指定生成的文件名称,存于内存中
})

// const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2} },
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          { loader: 'css-loader', options: { importLoaders: 2, modules: { localIdentName: '[path][name]__[local]--[hash:base64:5]' } } },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  devServer:{
    contentBase: 'dist'
  },
  plugins: [htmlPlugin]
};