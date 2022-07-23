'use strict'

const { join, resolve } = require('path');

module.exports = {
    entry: join(__dirname, '..', 'src', 'index.ts'),

    mode: 'production',
    externals: {
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    resolve: {
        extensions: ['.ts']
    },

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, '..', 'dist'),
    },
};
