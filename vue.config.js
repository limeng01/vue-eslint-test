module.exports = {
  // 关闭ESLint，如果你需要使用ESLint，把lintOnSave设为true即可
  lintOnSave: false,
  devServer: {
    open: true, // 是否自动打开浏览器页面
  },

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
/*
*
**/
// 项目中的配置
// vue.config.js
// const path = require("path");
// const webpack = require("webpack")
// const CompressionWebpackPlugin = require("compression-webpack-plugin");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
// module.exports = {
//   publicPath: "/web/",
//   // 使用运行时编译器的 Vue 构建版本
//   runtimeCompiler: true,

//   // 开启生产环境SourceMap，设为false打包时不生成.map文件
//   productionSourceMap: false,

//   // 关闭ESLint，如果你需要使用ESLint，把lintOnSave设为true即可
//   lintOnSave: false,

//   devServer: {
//     open: false, // 是否自动打开浏览器页面
//     host: "0.0.0.0", //"127.0.0.1", // 指定使用一个 host，默认是 localhost
//     port: 8080, // 端口地址
//     https: process.env.NODE_ENV === "release", // 使用https提供服务
//     // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
//     disableHostCheck: process.env.NODE_ENV === "development", // 开发环境关闭webpackhost检测
//     proxy:
//       process.env.NODE_ENV === "development"
//         ? "http://test.eduxdesign.com"
//         : "http://wx.eduxdesign.com"
//   },

//   chainWebpack: config => {
//     //移除 prefetch 插件
//     // 作用：首屏加载的时候，不加载用不到的路由文件
//     // config.plugins.delete('prefetch');

//     //配置目录别名
//     config.resolve.alias
//       .set("@", resolve("src"))
//       .set("assets", resolve("src/assets"))
//       .set("components", resolve("src/components"));

//     //本地开发，测试，生产 在同一个环境
//     config.when(process.env.NODE_ENV, config => {
//       //注意main-prod.js是已经存在的文件
//       config
//         .entry("app")
//         .clear()
//         .add("./src/main-prod.js");
//       config.set("externals", {
//         vue: "Vue",
//         "vue-router": "VueRouter",
//         axios: "axios",
//         vuex: "Vuex",
//         echarts: "echarts",
//         "element-ui": "ELEMENT",
//         "ali-oss": "OSS",
//         // 注释的 免费CDN上找不到
//         // VideoPlayer: 'vue-video-player',
//         // 'vue-quill-editor': 'VueQuillEditor',
//         // 'vue-infinite-scroll': 'infiniteScroll',
//         // 'vue-cropper': 'VueCropper',
//         html2canvas: "html2canvas",
//         jspdf: "jsPDF",
//         wangeditor: "E",
//         "vue-video-player": "VideoPlayer",
//         plupload: "plupload",
//         introJs: "introJs",

//       });
//     });

//   },

//   configureWebpack: {
//     module: {
//       rules: [
//         {
//           test: /\.(pdf)(\?.*)?$/,
//           use: [
//             {
//               loader: "url-loader",
//               options: {
//                 name: "files/[name].[hash:8].[ext]"
//               }
//             }
//           ]
//         },
//         {
//           test: /\.tsx?$/,
//           loader: "ts-loader"
//         }
//       ]
//     },
//     plugins: [
//       new CompressionWebpackPlugin({
//         filename:
//           "[name]." + Math.floor(Math.random() * 1000) + ".js.gz[query]", // 生产的gzip资源名
//         algorithm: "gzip", // 压缩算法
//         test: new RegExp("\\.(" + ["js", "css", "png"].join("|") + ")$"), // 匹配文件名 匹配到的会进行压缩
//         threshold: 102, // 对0.1K以上的数据进行压缩
//         minRatio: 0.8, // 压缩率
//         deleteOriginalAssets: false // 是否删除源文件 */
//       })
//     ],
//     externals: {
//       AMap: "AMap"
//     },

//     resolve: {
//       extensions: [".ts", ".js", ".vue", ".json"] // 可以省略后缀名
//     }
//   }
// };
