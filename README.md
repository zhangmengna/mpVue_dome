# mpvue_dome

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject
## 初始化时候出现问题时候
    1，检查node.js  npm是否安装或者版本太低
    2，是否需要切换到淘宝镜像
    $npm set registry https://registry.npm.taobao.org/
    3.是否全局安装了脚手架（官方要求是2.9的）
# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#src-dome为脚手架初始化创建的文件
##第一天 首页 用户的授权及信息的获取
1.每个vue页面必须配置一个js文件，将vue文件挂载
  import Vue from 'vue'
 import Index from './index.vue'

 const index = new Vue(Index)
 index.$mount()

 2.mpvue中及支持vue的生命周期也支持小程序的生命周期，但在项目中尽量使用vue的生命周期和方法

 ##原生小程序中
   bind + tap 冒泡事件
   catch + tap 非冒泡事件

#第二天：列表页面

##注意switchTab只能跳转到带有tab的页面，
  不能跳转到不带tab的页面,
 跳转不带tab的页面还是用redirectTo或者navigateTo
 
 作为组件时候需要学main.js 但不需要挂载


 
