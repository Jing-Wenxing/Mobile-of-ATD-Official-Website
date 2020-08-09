module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 80,
    disableHostCheck: true,
    open: process.platform === 'darwin',
    proxy: {
      '/api': {
        target: 'http://api.harson.co/', // 接口对接
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
}

