// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import './plugins'
import 'element-ui/lib/theme-chalk/index.css'

import {default as api} from './utils/api'
import store from "./store";
import plugins from "./utils/plugins";


Vue.config.productionTip = false

Vue.prototype.api = api;
Vue.prototype.plugins = plugins

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
