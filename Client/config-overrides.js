const {override,fixBabelImports,addLessLoader,addWebpackModuleRule} =require('customize-cra');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = override(
  // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
  fixBabelImports('import',{
      libraryName:'antd',
      libraryDirectory:'es',
      style:true,//自动打包相关的样式 默认为 style:'css'
  }),
  // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars:{'@primary-color':'#1DA57A'},
    // modifyVars: getThemeVariables({
    //   dark: false, // 开启暗黑模式
    //   compact: false, // 开启紧凑模式
    // }),
  }),
  addWebpackModuleRule({test: /\.md$/, use: 'raw-loader'}),
);