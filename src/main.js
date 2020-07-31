import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'
import axios from '@/utils/request'
import Components from '@/components'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(Components)
new Vue({
  // 挂载
  router,
  render: h => h(App)
}).$mount('#app')
