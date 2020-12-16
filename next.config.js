const withTM = require("next-transpile-modules")([
    "gsap",
    "gsap/dist/DrawSVGPlugin",
    "gsap/DrawSVGPlugin",
]);

module.exports = withTM();
