import path from 'path';

import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncWebpackPlugin from 'browser-sync-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import environment, { development, production, ci } from './environment.config.js';
import babelConfig from './babel.config.json';

const assetsFolder = path.join(__dirname, 'assets');
const sourceFolder = path.join(__dirname, 'source');
const libFolder = path.join(__dirname, 'lib');
const nodeModulesFolder = path.join(__dirname, 'node_modules');
const distributionFolder = path.join(__dirname, 'dist');

// Build plugins
let webpackPlugins = [
    new ProgressBarWebpackPlugin({ format: ' build [:bar] -> (:percent) - (:elapsed seconds)', clear: false }),
    new CleanWebpackPlugin(['dist'], { verbose: true }),
    new CopyWebpackPlugin([{ from: assetsFolder, to: distributionFolder }]),
    new HtmlWebpackPlugin({
        template: path.resolve(sourceFolder, 'index.html'),
        inject: true,
        hash: true,
        minify: development === true ? null : {
            collapseWhitespace: true,
            removeTagWhitespace: true,
            collapseInlineTagWhitespace: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    }),
    new MiniCssExtractPlugin({
        filename: "styles.bundle.css"
    })
];

if (development === true) {
    // Development plugins
    webpackPlugins.push(...[
        new BrowserSyncWebpackPlugin({ host: 'localhost', port: 9000, server: { baseDir: ['dist/'] } }),
        new webpack.HotModuleReplacementPlugin()
    ]);
}

if (production === true || ci === true) {
    // Production plugins
    webpackPlugins.push(...[
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    inline: false
                }
            }
        })
    ]);
};

const webpackConfig = {
    mode: development === true ? 'development' : 'production',
    watch: development === true,
    devtool: development === true ? 'cheap-module-source-map' : 'source-map',
    context: sourceFolder,
    entry: './index',
    output: {
        filename: '[name].bundle.js',
        path: distributionFolder,
        libraryTarget: 'umd',
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            { test: /\.js$/, include: /source/, loader: 'eslint-loader', enforce: 'pre' },
            { test: /\.jsx?$/, include: /source/, loader: 'babel-loader', options: babelConfig },
            // { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            },
            { test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)$/, loader: 'url-loader?limit=10240' }
        ]
    },
    plugins: webpackPlugins
};

export default webpackConfig;
