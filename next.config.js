const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
    compiler: {
        styledComponents: true,
    },
});
