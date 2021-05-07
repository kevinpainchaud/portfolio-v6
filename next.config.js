/* eslint-disable no-undef */
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withPreact = require("next-plugin-preact");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {};

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
        withBundleAnalyzer,
    ],
    nextConfig
);
