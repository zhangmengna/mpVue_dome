import Vue from 'vue'
import store from './store/store'
import Fly from 'flyio/dist/npm/wx'
import App from './app'


//生产环境提示
Vue.config.productionTip = false
App.mpType = 'app'

//将store 挂载到vue上
Vue.prototype.$store = store

let fly = new Fly
Vue.prototype.$fly = fly

const app = new Vue(App)
//挂载
app.$mount()
