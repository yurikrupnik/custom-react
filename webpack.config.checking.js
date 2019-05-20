const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => {
    const isProd = env ? !!env.prod : false;
    return {
        context: path.resolve(__dirname, 'src'),
        externals: isProd ? {
            react: 'react',
            '@material-ui/core/Button': '@material-ui/core/Button',
            'prop-types': 'prop-types',
            'styled-components': 'styled-components',
        } : {},
        optimization: {
            usedExports: true,
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss']
        },
        devtool: isProd ? '' : 'eval-cheap-module-source-map',
        // entry: isProd ? './index.js' : './client.jsx',
        // entry: [
        //     './BaseButton/index.js',
        //     './PillButton/index.js',
        // ],
        entry: {
            // 'BaseButton/index': './BaseButton/index.js',
            // 'PillButton/inedx': './PillButton/index.js',
            // 'ButtonGroup/index': './ButtonGroup/index.js'
            // 'module/b/index': 'module/b/index.js',
        },
        output: {
            filename: '[name].js',
            // chunkFilename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            library: 'custom-react/[name]',
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
            // !isProd ? () => {} : new BundleAnalyzerPlugin({}),
            new webpack.optimize.ModuleConcatenationPlugin(),
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