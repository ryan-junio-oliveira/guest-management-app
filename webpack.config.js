const path = require('path');

module.exports = {
  entry: './index.js',  // O arquivo de entrada do seu código
  output: {
    path: path.resolve(__dirname, 'public'),  // O diretório de saída
    filename: 'bundle.js',  // O nome do arquivo de saída
  },
  resolve: {
    fallback: {
      "fs": false,  // O módulo fs não é necessário no navegador
      "path": require.resolve("path-browserify"),
      "util": require.resolve("util/"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "url": require.resolve("url/"),
      "assert": require.resolve("assert/"),
      "querystring": require.resolve("querystring-es3"),
      "http": require.resolve("stream-http"),
      "net": false,
      "zlib": require.resolve("browserify-zlib"),
      "async_hooks": false,
      "vm": require.resolve("vm-browserify"),
      "pg-hstore": false
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Aplica ao arquivos .js
        exclude: /node_modules/,  // Não aplicar ao node_modules
        use: {
          loader: 'babel-loader',  // Usando o babel-loader
          options: {
            presets: ['@babel/preset-env'],  // Usando o preset-env do Babel
          },
        },
      },
    ],
  },
  mode: 'development',  // Definindo o modo como 'development'
};
