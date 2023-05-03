const withTM = require("next-transpile-modules")([]);
// "three", "react-three-fiber", "drei"
const nextConfig = withTM({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: "file-loader",
            },
        });
        // config.module.rules.push({
        //     test: /\.+(js|jsx|mjs|ts|tsx)$/,
        //     loader: "/Users/anguyen/workspace/voxel-blox/node_modules/next/dist/build/babel/loader/index.js",

        //     include: [/(three|drei)$/, /(three|drei)[\\/](?!.*node_modules)/],
        // }),
        // console.warn("config", config.module.rules);
        return config;
        // Target must be serverless
        // target: "serverless",
    },
    compiler: {
        styledComponents: true,
    },
});

module.exports = nextConfig;

// module.exports = {
//     compiler: {
//         styledComponents: true,
//     },
// };
