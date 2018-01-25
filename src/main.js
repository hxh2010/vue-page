import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as Util from 'common/js/util.js'
import * as Model from 'common/js/model.js'
import Echarts from 'echarts'
import '../static/iconfont'
import '../node_modules/echarts/map/js/china'

// 引入全局样式
import 'common/css/base.css'

Vue.prototype.Util = Util
Vue.prototype.Model = Model
Vue.prototype.Echarts = Echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Echarts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
