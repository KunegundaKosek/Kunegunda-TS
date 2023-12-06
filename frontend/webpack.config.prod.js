// const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

// module.exports = {
//     mode: 'production',
//     // entry: './src/index.ts',
//     entry: './public/src/index.ts',

//     devServer: {
//         static: [
//             {
//                 directory: path.join(__dirname),
//             },
//         ],
//     },
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'public/dist'),
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.ts', '.js'],
//     },
//     plugins: [new CleanPlugin.CleanWebpackPlugin()],
// };

const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './public/src/index.ts', // Zaktualizowano ścieżkę do pliku wejściowego
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/src/index.html',
        })
    ],
};
