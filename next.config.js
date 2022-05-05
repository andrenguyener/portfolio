const withTM = require("next-transpile-modules")([]);

module.exports = withTM({
    compiler: {
        styledComponents: true,
    },
});
