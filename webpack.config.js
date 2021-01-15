// 環境変数をを設定することにより、開発モードと本番モードの切り替えができます。
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  
  devServer: {
    contentBase: "dist",
    open: true
  },
  
  entry: `./src/asset/js/index.js`,
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  },
  
  output: {
    filename: "bundle.js"
  },
};