const path = require("path");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withPreact = require("next-plugin-preact");

const nextConfig = {
    future: {
        webpack5: true,
    },
};

module.exports = withPlugins(
    [
        withImages({
            exclude: path.resolve("public/images/icons"),
            webpack(config) {
                config.module.rules.push({
                    test: /\.svg$/,
                    use: ["svg-sprite-loader"],
                    exclude: [/node_modules/],
                });

                return config;
            },
        }),
        withFonts,
        withPreact,
    ],
    nextConfig
);
