// 全局注册主键，任何地方可用

import LayoutAside from './home/layout-aside'
import Header from './home/header'
export default {
  install: function (Vue) {
    Vue.component('layout-aside', LayoutAside)
    Vue.component('index-header', Header)
  }
}
