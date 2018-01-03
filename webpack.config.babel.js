import path from 'path';

import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncWebpackPlugin from 'browser-sync-webpack-plugin';
import BitBarWebpackProgressPlugin from 'bitbar-webpack-progress-plugin';

import environment, { development, production, ci } from './environment.config.js';
import babelConfig from './babel.config.json';

const assetsFolder = path.join(__dirname, 'assets');
const sourceFolder = path.join(__dirname, 'source');
const libFolder = path.join(__dirname, 'lib');
const nodeModulesFolder = path.join(__dirname, 'node_modules');
const distributionFolder = path.join(__dirname, 'dist');

const isExternalModule = (module) => {

    let userRequest = module.userRequest;

    if (typeof userRequest !== 'string') {
        return false;
    }

    return userRequest.indexOf(nodeModulesFolder) >= 0 || userRequest.indexOf(libFolder) >= 0;
};

// Build plugins
let webpackPlugins = [
    new BitBarWebpackProgressPlugin(),
    new ProgressBarWebpackPlugin({ format: ' build [:bar] -> (:percent) - (:elapsed seconds)', clear: false }),
    new CleanWebpackPlugin(['dist'], { verbose: true }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', minChunks: module => isExternalModule(module) }),
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
        new webpack.optimize.UglifyJsPlugin({ mangle: false, warning: true, comments: false })
    ]);
};

const webpackConfig = {
    watch: development === true,
    devtool: development === true ? 'cheap-module-source-map' : 'source-map',
    context: sourceFolder,
    entry: {
        app: './app'
    },
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
        loaders: [
            { test: /\.js$/, include: /source/, loader: 'eslint-loader', enforce: 'pre' },
            { test: /\.jsx?$/, include: /source/, loader: 'babel-loader', query: babelConfig },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)$/, loader: 'url-loader?limit=10240' }
        ]
    },
    plugins: webpackPlugins
};

console.log('Starting Webpack \n environment = ', environment, '\n');

export default webpackConfig;
