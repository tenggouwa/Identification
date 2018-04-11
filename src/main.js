import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import "./assets/css/base.css"
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"
import "./assets/css/base.css"
import Apiconfig from "./config/api-config.js"

Vue.use(ElementUI)
Vue.prototype.axios = axios;
Vue.prototype.extendApi = Apiconfig;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
