// next.config.js
const withAntdLess = require("next-plugin-antd-less");
const { color, font, grid, breakpoints } = require("./assets/design-tokens.json");
const { colors } = require("./assets/tokens.json");

const red = colors.red;
const blue = colors.blue;
const yellow = colors.yellow;
const green = colors.green;
const orange = colors.orange;
const purple = colors.purple;
// Example usage

module.exports = withAntdLess({
  // optional
  modifyVars: {
    "@font-family": "Merriweather, sans-serif",
    "@primary-color": red["700"].value,
    // "@btn-border-radius-base": "50px",

    "@blue-base": blue["600"].value,
    "@blue-01": blue["100"].value,
    "@blue-02": blue["200"].value,
    "@blue-03": blue["300"].value,
    "@blue-04": blue["400"].value,
    "@blue-05": blue["500"].value,
    "@blue-06": "@blue-base",
    "@blue-07": blue["700"].value,
    "@blue-08": blue["800"].value,
    "@blue-09": blue["900"].value,

    "@red-base": red["600"].value,
    "@red-01": red["100"].value,
    "@red-02": red["200"].value,
    "@red-03": red["300"].value,
    "@red-04": red["400"].value,
    "@red-05": red["500"].value,
    "@red-06": "@red-base",
    "@red-07": red["700"].value,
    "@red-08": red["800"].value,
    "@red-09": red["900"].value,

    // "@orange-base": orange["06"].value,
    // "@orange-01": orange["01"].value,
    // "@orange-02": orange["02"].value,
    // "@orange-03": orange["03"].value,
    // "@orange-04": orange["04"].value,
    // "@orange-05": orange["05"].value,
    // "@orange-06": "@orange-base",
    // "@orange-07": orange["07"].value,
    // "@orange-08": orange["08"].value,
    // "@orange-09": orange["09"].value,
    // "@orange-10": orange["10"].value,

    // "@yellow-base": yellow["06"].value,
    // "@yellow-": yellow["01"].value,
    // "@yellow-02": yellow["02"].value,
    // "@yellow-03": yellow["03"].value,
    // "@yellow-04": yellow["04"].value,
    // "@yellow-05": yellow["05"].value,
    // "@yellow-06": "@yellow-base",
    // "@yellow-07": yellow["07"].value,
    // "@yellow-08": yellow["08"].value,
    // "@yellow-09": yellow["09"].value,
    // "@yellow-10": yellow["10"].value,

    // "@green-base": green["06"].value,
    // "@green-01": green["01"].value,
    // "@green-02": green["02"].value,
    // "@green-03": green["03"].value,
    // "@green-04": green["04"].value,
    // "@green-05": green["05"].value,
    // "@green-06": "@green-base",
    // "@green-07": green["07"].value,
    // "@green-08": green["08"].value,
    // "@green-09": green["09"].value,
    // "@green-10": green["10"].value,


    // "@purple-base": purple["06"].value,
    // "@purple-01": purple["01"].value,
    // "@purple-02": purple["02"].value,
    // "@purple-03": purple["03"].value,
    // "@purple-04": purple["04"].value,
    // "@purple-05": purple["05"].value,
    // "@purple-06": "@purple-base",
    // "@purple-07": purple["07"].value,
    // "@purple-08": purple["08"].value,
    // "@purple-09": purple["09"].value,
    // "@purple-10": purple["10"].value,


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