const path = require("path");

const ENTRY_POINT = path.resolve(__dirname, "client/index.jsx");

const OUTPUT_PATH = path.resolve(__dirname, "public/dist/");

const LOADER_OBJECT = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    query: {
      presets: ["react", "env"]
    }
  },
  {
    test: /\.css$/,
    loader: "style-loader!css-loader"
  }
];

module.exports = {
  entry: ENTRY_POINT,
  output: {
    filename: "index.js",
    path: OUTPUT_PATH
  },
  devtool: "source-map",
  module: {
    rules: LOADER_OBJECT
  },
  resolve: { extensions: [".js", ".jsx"] }
};
