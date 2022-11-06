const HtmlWebpackPlugin = require("html-webpack-plugin");

const production =  process.env.NODE_ENV === 'production'

module.exports = {
    mode: production ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[hash].js'
    },
    devtool: production ? 'source-map' : 'inline-source-map',
    resolve: {
        extensions: ['ts', 'tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'swc-loader',
                    options: {
                        jsc: {
                            parser: {
                              syntax: "typescript"
                            },
                            transform: {
                                react: 'automatic'
                            }, 
                        },
                    },
                  },
                 
                ]
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localsConvention: 'camelCase',
                      sourceMap: true
                    }
                  }
                ]
            }
        ],
    },
    devServer: {
        host: 'localhost',
        port: 4000,
        historyApiFallback: true,
        open: false
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html'
        })
    ],
}