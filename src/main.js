import Vue from 'vue'
import App from './app'

//生产环境提示
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
//挂载
app.$mount()
