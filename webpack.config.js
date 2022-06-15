const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  target: "node",
  plugins: [new VanillaExtractPlugin()],
  resolve: {},
};
