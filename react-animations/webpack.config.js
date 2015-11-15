"use strict";

var path = require("path");
var getConfig = require("hjs-webpack");
var html = require("./themes/thinkful/html");

var webpackConfig = module.exports = getConfig({
  in: "./index.jsx",
  out: "dist",
  clearBeforeBuild: true,
  html: html
});

// Source maps mess up CSS in dev and the `data.css` thing is generally borked.
//
// See: https://github.com/FormidableLabs/spectacle/issues/50
webpackConfig.devtool = "source-map";

// Hack the JS loader at known zeroeth slot.
webpackConfig.module.loaders[0] = {
  test: /\.jsx?$/,
  include: [
    path.join(__dirname, "index.jsx"),
    path.join(__dirname, "presentation"),
    path.join(__dirname, "themes"),

    // Have to build spectacle as well.
    path.join(__dirname, "node_modules/spectacle/presentation"),
    path.join(__dirname, "node_modules/spectacle/src"),
    path.join(__dirname, "node_modules/spectacle/themes")
  ],
  loaders: [
    "babel-loader?stage=1"
  ]
};

// Remove hot loader unless _actually_ hot.
if (process.env.WEBPACK_ENV === "hot") {
  webpackConfig.module.loaders[0].loaders.unshift("react-hot");
} else {
  webpackConfig.entry = webpackConfig.entry.filter(function (entry) {
    return !/^webpack\/hot\//.test(entry) &&
           !/^webpack-dev-server\/client/.test(entry);
  });

  // Only available with NPM devDependencies.
  if (webpackConfig.devServer) {
    webpackConfig.devServer.hot = false;
  }
}
