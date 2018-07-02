const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    // Each entry in here would declare a file that needs to be transpiled
    // and included in the extension source.
    // For example, you could add a background script like:
    // background: './src/background.js',
    popup: "./src/index.tsx"
  },
  output: {
    path: path.join(path.resolve(__dirname), "extension", "dist"),
    filename: "[name].js"
  },
  module: {
    // This transpiles all code (except for third party modules) using Babel.
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: ["ts-loader"]
      }
    ]
  },
  resolve: {
    // This allows you to import modules just like you would in a NodeJS app.
    extensions: [".ts", ".tsx"],
    modules: ["src", "node_modules"]
  },
  plugins: [
    // Since some NodeJS modules expect to be running in Node, it is helpful
    // to set this environment var to avoid reference errors.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  node: {
    global: true
  },
  // This will expose source map files so that errors will point to your
  // original source files instead of the transpiled files.
  devtool: "sourcemap"
};
