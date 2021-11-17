const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = 'development';
let target = 'web'

// set to 'production' via node script
if(process.env.NODE_ENV === 'production'){
    mode = 'production';
    // if in production, use browserslistrc as target. Otherwise, web.
    target = 'browserslist';
}

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                // last loader in list is first used
                use: [ 
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader']
            },
            {
                // regex
                test: /\.js$/i,
                // memory expensive to runa against all node files
                exclude: /node_modules/,
                // tell webpack to use .babel.rc file, with configs
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    // Normalizes webpack output file, "main.js", for inspection
    // devtool: false,
    devtool: 'source-map',
    devServer: {
        // In new Webpack Version, no longer "contentBase" config.
        // Needs relative path
        static: "./dist",
        // can add via script, though this method adds flag, adds module to plugin chain
        // injects styles, rather than rendering all CSS, which can speed up development
        hot: true,
    }
}