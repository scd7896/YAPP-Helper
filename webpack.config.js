const path = require('path')



module.exports = {
    mode: "development", devtool: "inline-source-map",
    entry: {
        index: './src/index.tsx'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts(x?)$/,
                exclude: "/node_modules/",
                use: [
                    "awesome-typescript-loader",
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",

                    },
                    {
                        loader: "sass-loader"
                    }     
                ]
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist',
    },
    
};
