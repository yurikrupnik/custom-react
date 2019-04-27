const path = require('path');
// const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const GenerateJsonPlugin = require('generate-json-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const json = require('./package');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css', '.scss']
    },
    devtool: 'eval-cheap-module-source-map',
    entry: './client.jsx',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
            {
                test: /\.ejs$/,
                use: 'raw-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.ejs',
            filename: 'index.html',
            meta: {
                charset: 'UTF-8',
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new BundleAnalyzerPlugin({}),
    ],
    devServer: {
        open: true,
        historyApiFallback: true
    }
};
