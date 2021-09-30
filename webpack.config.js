/**
 * @desc Dependencias
 */
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const Path              = require("path");

module.exports = ( env, argv ) => {

    // Alias de los argumentos
    const { mode } = argv;

    // Modo de compilación
    const isProduction = mode === "production";

    return {

        /**
         * @desc Sourcemap
         */
        "devtool": isProduction ? false : "source-map",

        /**
         * @desc Modulos
         */
        "module":{
    
            "rules": [{
                "test": /\.js$/,
                "loader": "babel-loader",
                "options":{
                    "presets": [
    
                        [ "@babel/preset-react", {
                            "runtime": "automatic"
                        }]
    
                    ],
    
                }
            }]
    
        },

        /**
         * @desc Alias
         */
        "resolve": {

            "alias": {

                "Actions": Path.resolve( __dirname, 'src/Actions' ),
                "Components": Path.resolve( __dirname, 'src/Components' ),
                "Reducers": Path.resolve( __dirname, 'src/Reducers' ),
                "Services": Path.resolve( __dirname, 'src/Services' ),
                "Views": Path.resolve( __dirname, 'src/Views' ),

            }

        },
    
        /**
         * @desc Servidor de desarrollo
         */
        "output":{
    
            /**
             * @desc Archivo de salida
             */
            "filename": isProduction ? "[name].[contenthash].js" : "main.js",
    
        },
    
        /**
         * @desc Servidor de desarrollo
         */
        "devServer":{
    
            /**
             * @desc Apertura del servidor en el navegador
             */
            "open": true,
    
            /**
             * @desc Puerto
             */
            "port": "3003",
    
        },
    
        /**
         * @desc Plugin's
         */
        "plugins": [
    
            /**
             * @desc Template del html
             */
            new HtmlWebpackPlugin({
                "template": 'template/index.html'
            })
    
        ]
 
    }

}