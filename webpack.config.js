var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        entry: './client/index.js',
        output: {
            path: './public',
            filename: 'bundle.js'
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
        entry: './client/stylesheets/main.scss',
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
