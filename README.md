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


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#src-dome为脚手架初始化创建的文件
# 一 首页 用户的授权及信息的获取
1.每个vue页面必须配置一个js文件，将vue文件挂载
  import Vue from 'vue'
 import Index from './index.vue'

 const index = new Vue(Index)
 index.$mount()

 2.mpvue中及支持vue的生命周期也支持小程序的生命周期，但在项目中尽量使用vue的生命周期和方法

 ##原生小程序中
   bind + tap 冒泡事件
   catch + tap 非冒泡事件

#二：列表页面

##注意switchTab只能跳转到带有tab的页面，
  不能跳转到不带tab的页面,
 跳转不带tab的页面还是用redirectTo或者navigateTo
 
 作为组件时候需要学main.js 但不需要挂载

#三：动态获取列表数据

#四：列表页面详情的显示，收藏，音乐的播放
 ##问题：目前音乐还未播放，音乐连接未下载（之后完善）

#五：配导航图标，电影列表页面动态展示
 ##问题总结：1小程序不支持xhr请求，这里使用了fylio发送请求
 ##2小程序对http请求会报异常，支持使用https请求

#六：电影详情页面，展示及整体调试

#总结
##实例声明周期
  1. beforeCreate 实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  2. created  实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
  3. beforeMount  在挂载开始之前被调用：相关的 render 函数首次被调用。
  4. mounted  el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  5. beforeUpdate  数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  6. updated  由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  7. beforeDestroy  实例销毁之前调用。在这一步，实例仍然完全可用。
  8.destroyed  Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
##小程序应用App实例声明周期
1.  onLaunch: 小程序应用初始化
2.  onShow: 小程序启动获取后台进入前台
3.  onHide: 小程序应用从前台进入后台

##小程序页面Page实例生命周期
1. onLoad 监听页面加载
2. onShow: 页面显示
3. onReady: 监听页面初始化渲染完成
4. onHide: 监听页面隐藏，注意当前页面实例依然存活
5. onUnload: 监听页面卸载
6. onPullDownRefresh: 监听用户下载动作
7. onReachBottom: 监听用户上拉触底操作
8. onShareAppMessage: 用户点击右上角分享功能
9. onPageScroll: 页面滚动
10. onTabItemTap： 当前是 tab 页时，点击 tab 时触发

#axios 
1.  小程序中不支持使用axios，会报错： XMLHttpRequest is not a constructor
2.	原因: 小程序的环境和浏览器的环境不一样
3.   解决方法: 使用其他库: flyio
地址：https://github.com/wendux/fly

#mpvue VS 小程序 状态管理
##原生小程序
1)	在data中初始化状态数据
2)	修改状态: this.setData({key: value})
3)	页面公共状态： 
a.	App程序实例的data中定义
b.	获取状态数据: let datas = getApp()
c.	修改状态数据: datas.data.xxx = value
4)	或者利用storage本地存储
##Mpvue
1)	在组件中通过getApp无法拿到对应的数据
2)	mpvue中支持vuex，所以可以使用vuex集中管理状态
3)	vuex几个重要的概念:
  a.	store对象
  b.	dispatch() 分发状态
  c.	actions	携带参与修改状态的数据，并触发mutations
  d.	mutations用于修改状态，并将状态交给store对象
  e.	getter 用于动态计算状态

# 原生小程序 VS mpvue 对比总结
1)	原生小程序运行更稳定些, 兼容性好，mpvue可能在某些方面存在兼容性问题（vue-router）
2)	mpvue支持vue组件化开发. 效率更高，功能更强大(双向数据绑定, vuex)
3)	mpvue可基于webpack组件化, 工程化开发
4)	原生不支持npm安装包，不支持css预处理
5)	支持 computed 计算属性和 watcher 监听器；模板语法中只支持简单的 js 表达式。可以直接写 div 、span 等标签 
computed 的写法
6)	之前会vue的工程师上手mpvue框架的成本较低









 
