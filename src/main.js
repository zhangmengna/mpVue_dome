import Vue from 'vue'
import store from './store/store'
import App from './app'


//生产环境提示
Vue.config.productionTip = false
App.mpType = 'app'

//将store 挂载到vue上
Vue.prototype.$store = store

const app = new Vue(App)
//挂载
app.$mount()
