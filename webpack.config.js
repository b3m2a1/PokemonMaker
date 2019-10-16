module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|v0/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};