module.exports = {
  mode: "development",
  
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