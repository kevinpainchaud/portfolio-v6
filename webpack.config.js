const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: "./src/ui/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    resolve: {
        alias: {
            react: "preact/compat",
            "react-dom": "preact/compat",
            "create-react-class": "preact/compat/lib/create-react-class",
            "react-dom-factories": "preact/compat/lib/react-dom-factories"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            outputPath: "assets/images"
                        }
                    }
                ]
            },
            {
                test: /\.woff2$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/fonts"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()]
};

module.exports = config;
