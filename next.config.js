const withTM = require("next-transpile-modules")([
  "gsap"
]);

module.exports = withTM({
  // Target must be serverless
  target: 'serverless'
});