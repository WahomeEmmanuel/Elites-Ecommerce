import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

//Axios
import axios from 'axios'

Vue.prototype.$http = axios

//Import global styles
require ('./styles/main.scss')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
