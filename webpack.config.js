const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const GenerateJsonPlugin = require('generate-json-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const json = require('./package');


module.exports = (env, args) => {
    const isProd = env ? !!env.prod : false;
    // console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    // console.log('env.NODE_ENV', env.NODE_ENV);
    const isDebug = env ? !!env.debug : false;
    return {
        context: path.resolve(__dirname, 'src'),
        // externals: {
        //     react: 'react',
        //     'react-dom': 'react-dom'
        // },
        optimization: {
            // runtimeChunk: 'single',
            // splitChunks: {
            //     cacheGroups: {
            //         vendor: {
            //             test: /[\\/]node_modules[\\/]/,
            //             name: 'vendors',
            //             chunks: 'all'
            //         }
            //     }
            // },
            minimizer: [
                // new TerserPlugin(),

                // new OptimizeCSSAssetsPlugin({})
            ]
        },
        // target: 'web',
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
                    use: ['babel-loader'],
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
            // new webpack.DefinePlugin({
            //     'process.env.PORT': JSON.stringify(process.env.PORT)
            // }),
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
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: !isProd ? '[name].css' : '[name].[hash].css',
                chunkFilename: !isProd ? '[id].css' : '[id].[hash].css',
            }),
            // new GenerateJsonPlugin('package.json', Object.assign({}, json, {
            //     // main: filename,
            //     scripts: {
            //         start: 'node main.js'
            //     },
            //     devDependencies: {}
            // })),
            // new BundleAnalyzerPlugin({
            // analyzerMode: 'static',
            // openAnalyzer: false,
            // reportFilename: 'bundles-report/index.ejs'
            // }),
            // process.env.NODE_ENV_DOCKER ? new BundleAnalyzerPlugin({
            //     analyzerMode: 'static',
            //     openAnalyzer: false
            // }) : new BundleAnalyzerPlugin({})
        ],
        devServer: { // when not prod - NODE_ENV_DOCKER taken from docker-compose env
            // port: config.port + 1,
            open: true,
            host: process.env.NODE_ENV_DOCKER ? '0.0.0.0' : 'localhost',
            index: 'index.html',
            historyApiFallback: true
        }
    };
};
