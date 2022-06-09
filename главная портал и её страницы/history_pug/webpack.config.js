const
    path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HtmlWebpackPugPlugin = require('html-webpack-pug-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts'
                    }
                },
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "general.html",
            template: './src/history-success.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: "sity.html",
            template: './src/perm.pug',
            inject: 'body'
        }),
        new HtmlWebpackPugPlugin()

    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: 'dist',
        hot: true,
        historyApiFallback: true,
    }
}