// next.config.js
const withAntdLess = require("next-plugin-antd-less");
const { gray } = require("./assets/design-tokens.json");

module.exports = withAntdLess({
  // optional
  modifyVars: {
    "@font-family": "Merriweather, sans-serif",
    "@blue-base": "rgba(15, 121, 250, 1)",
    "@blue-01": "rgba(235, 244, 255, 1)",
    "@blue-02": "rgba(204, 227, 255, 1)",
    "@blue-03": "rgba(163, 205, 255, 1)",
    "@blue-04": "rgba(125, 182, 253, 1)",
    "@blue-05": "rgba(85, 160, 252, 1)",
    "@blue-06": "@blue-base",
    "@blue-07": "rgba(5, 102, 221, 1)",
    "@blue-08": "rgba(0, 83, 184, 1)",
    "@blue-09": "rgba(0, 64, 143, 1)",
    "@blue-10": "rgba(0, 46, 102, 1)",
    "@primary-color": "@blue-10",
    "@btn-border-radius-base": "50px",
    "@gold-06": "rgba(255, 197, 83, 1)",
    "@red-06": "rgba(252, 84, 93, 1)",
    "@green-06": "rgba(66, 200, 0, 1)",
    "@border-color-base": "@blue-03",
    "@info-color": "@blue-01",
    "@alert-info-border-color": "@blue-03",
    "@input-color": gray["gray-7"].value
  },
  // optional
  // lessVarsFilePath: "./assets/antd-custom.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  }
});
