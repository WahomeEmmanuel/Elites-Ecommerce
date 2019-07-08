import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

//Axios
import axios from 'axios'

 
Vue.use(axios)

const base = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: false
})

Vue.prototype.$http = base


//Alerts

import VueSweetalert2 from 'vue-sweetalert2'

const options = {
  confirmButtonColor: '#49c7ed',
  cancelButtonColor: '#ff7674'
}

Vue.use(VueSweetalert2, options);


// Sessions
import VueSession from 'vue-session'
Vue.use(VueSession)


// Vuex
//Requires promise
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)


// Vuex store
import store from './store';


// Currency formatter
Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'Ksh',
      minimumFractionDigits: 0
  });
  return formatter.format(value);
});

//Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faShoppingCart, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//Import global styles
require ('./styles/main.scss')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
