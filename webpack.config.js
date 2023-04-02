module.exports = {
  entry: {
    background: "./src/chrome/background/background.ts",
    content: "./src/chrome/content/content.ts",
  },
  optimization: {
    minimize: false,
  },
  mode: "development",
  module: {
    // Use `ts-loader` on any file that ends in '.ts'
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: false,
  // Bundle '.ts'  files as well as '.js' files.
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/public",
  },
};
