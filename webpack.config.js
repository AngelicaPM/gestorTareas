const path = require ('path');

module.exports = {
    entry: './src/index.js', // Punto de entrada de la aplicacion
    output:{ 
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname,'dist'), //Carpeta de salida
    },
    module: {
        rules:[
            {
            test:/\.css$/, //Regex para identificar archivos css
                use: ['style-loader','ccs-loader'], //Loaders para procesar archivos
            },
            {
                test:/\.js$/, //Regex para identificar archivos js
                exclude:/node_modules/, //Excluir  lacarpetademodules
                use: {
                    loader: 'babel-loader', // Loader para llevar a JS moderno a Js  antiguo para que sea compatible con todos los navedadores
                    options: {
                        presets:['@babel/preset-env'],
                    },
                },
            },
        ],
    },
devtool: 'source-map', //generar source maps para facilitar la depuración
devServer: {
    contentBase: path.resolve(__dirname, 'dist'), //Carpeta desde donde el servior agregara los archivos
    compress: true, //habilitar compresión gzip
    port: 9000, // Puerto del servidor de desarrollo
     },
};