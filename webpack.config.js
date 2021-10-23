const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const git = require('./plugins/webpack/git')
const pkg = require('./plugins/webpack/package');

const config = {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            _GIT_SHORT_COMMIT: JSON.stringify(git.commitHash.short),
            _GIT_LONG_COMMIT: JSON.stringify(git.commitHash.long),
            _GIT_BRANCH: JSON.stringify(git.branch),
            _GIT_REPO: JSON.stringify(git.repo)
        }),
        new webpack.DefinePlugin({
            _VERSION: JSON.stringify(pkg.version)
        }),
        new HtmlWebpackPlugin({
            appMountId: 'app',
            filename: 'index.html',
            template: './src/index.html',
            title: "Craftions Base App",

            meta: {
                viewport: {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                },
                robots: {
                    name: "robots",
                    content: "INDEX,FOLLOW"
                },
                description: "enter the description of this craftions app",
                keywords: "Craftions",
                author: "The Craftions Developers",
                publisher: "The Craftions Developers",
                copyright: "Copyright © 2021 The Craftions Developers.",
                expires: "",
                "revisit-after": "2 days"
            }
        }),
        new CopyPlugin({
            patterns: [
                {from: "public", to: "."}
            ]
        })
    ]
};

module.exports = config;
