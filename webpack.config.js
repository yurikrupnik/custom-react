const path = require('path');
// const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const GenerateJsonPlugin = require('generate-json-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const json = require('./package');


module.exports = (env) => {
    const isProd = env ? !!env.prod : false;
    return {
        context: path.resolve(__dirname, 'src'),
        externals: isProd ? {
            react: 'react',
            'react-dom': 'react-dom',
            'prop-types': 'prop-types',
            'styled-components': 'styled-components',
            // 'react-loadable': 'react-loadable',
            '@material-ui/core': '@material-ui/core'
        } : {},
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss']
        },
        devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
        entry: isProd ? './index.js' : './client.jsx',
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            library: 'custom-react',
            libraryTarget: 'umd'
        },
        mode: isProd ? 'production' : 'development',
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
                        !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: isProd ? '[hash:base64]' : '[local]--[hash:base64:5]'
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
            !isProd ? new HtmlWebpackPlugin({
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
            }) : () => {},
            isProd ? new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false
            }) : new BundleAnalyzerPlugin({}),
            new MiniCssExtractPlugin({
                filename: !isProd ? '[name].css' : '[name].[hash].css',
                chunkFilename: !isProd ? '[id].css' : '[id].[hash].css',
            })
        ],
        devServer: {
            open: true,
            historyApiFallback: true
        }
    };
};
