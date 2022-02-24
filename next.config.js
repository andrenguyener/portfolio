const withTM = require("next-transpile-modules")(["gsap"]);

const nextConfig = withTM({
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    webpack(config, options) {
        return config;
    },
});

module.exports = {
    ...nextConfig,
};
