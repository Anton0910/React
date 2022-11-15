const path = require ('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bindle.js'
    },

    devServer: {
        static:{
            directory: path.join(__dirname,'public')
        },
        
    },

    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                }
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader : 'style-loader'}, //Pega o css loader e injeta dentro html
                    {loader: 'css-loader'}, //le  o arquivos e importações(tipo importações de imagem) css
                ]
            },

            {
                test: /.*\.(gif|png|avif)$/i,
                use: {
                    loader: 'file-loader',
                }

            }
        ]
    },
};