module.exports = {
    entry: './client/app.jsx',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(css|less)$/,
                loaders: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js',
    },
};