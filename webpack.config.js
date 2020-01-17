const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
    entry: "./src/ui/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: "/"
    },
    stats: {
        source: false
    },
    devServer: {
        historyApiFallback: true
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
                test: /\.(gif|png|jpe?g|ico)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/images"
                        }
                    },
                    {
                        loader: "image-webpack-loader"
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.svg$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets/images"
                },
                include: [/node_modules/]
            },
            {
                test: /\.(woff2|woff)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/fonts"
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new CopyPlugin([
            {
                from: "./src/statics/documents/cv-kevin-painchaud.pdf",
                to: "."
            },
            {
                from: "./src/statics/images/og-image.jpg",
                to: "assets/images"
            }
        ])
    ]
};

module.exports = config;
