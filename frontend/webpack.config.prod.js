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

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(js|ts)$/,
                include: /node_modules\/bootstrap/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: './tsconfig.json', // Dodaj ścieżkę do pliku tsconfig.json Bootstrapa
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // aktualizacja
            filename: 'index.html',
            inject: 'body',
        }),
    ],
};
