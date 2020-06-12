const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);// function returns 'require' which returns a function that you can call

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    const presetConfig = require('./build-utils/loadPresets');
    return webpackMerge(
        {
            mode,
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: [{
                            loader: "url-loader", options: {
                                limit: 5000
                            }
                        }]
                    }
                ]
            },
            output: {
                filename: "bundle.js"
            },
            plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
        },
        modeConfig(mode),
        presetConfig({ mode, presets })
    );
};