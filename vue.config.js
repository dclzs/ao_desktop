module.exports = {
   
 
  /* 生产环境构建文件的目录 defalut: dist */

  outputDir: "dist",

  /* 放置生成的静态文件目录（js css img） */

  /* 指定生成的index.html 输出路径 相对 default: index.html */

  indexPath: "index.html",

  /* 指定生成文件名中包含hash default: true */

  filenameHashing: true,

  /* 是否保存时 lint 代码 */

  lintOnSave: process.env.NODE_ENV === "production",

  /* 是否使用编译器 default: false */

  runtimeCompiler: false,

  /* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */

  // transpileDependencies: [],

  /* 生产环境的source map */

  productionSourceMap: true,

  // crossorigin: "",

  integrity: false,
  
  configureWebpack: {
     resolve: {
      alias: {
        'assets': '@/assets',     
        'views': '@/views',
        'styles':"@/assets/styles",
        'applications':'@/components/applications',
        'common':'@/components/common'
      }
    }
  },
  // css相关配置

  css: {

    // 是否使用css分离插件 ExtractTextPlugin

    extract: true,

    // 开启 CSS source maps?

    sourceMap: false,

    // css预设器配置项

    loaderOptions: {},

    // 启用 CSS modules for all css / pre-processor files.

    modules: false

  },

  devServer: {
    port: 8080,
    host: "0.0.0.0",
    https: false,
    // 自动启动浏览器
    open: true,
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:8080',
                // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            changeOrigin: true, 
            pathRewrite: {
                // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
                 '^/api': '/' 
            }
        }
    }
}, // 第三方插件配置

  pluginOptions: {
    // ...
  } 
}