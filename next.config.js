const withTM = require("next-transpile-modules")([]);

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
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
};
