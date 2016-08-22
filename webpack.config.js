var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        entry: './index.js'
        output: {
            path: './public',
            filename: 'build.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/, "./server.js"],
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
    },
    {
        entry: './stylesheets/main.scss',
        output: {
            path: './public',
            filename: 'main.css'
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract("css!sass")
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("main.css")
        ]
    }
]
