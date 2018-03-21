
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import axios from 'axios'
import VueResources from 'vue-resource'
import 'vuetify/dist/vuetify.min.css'

import router from './router'
import store from './store'

var VueFire = require('vuefire')
var firebase = require('firebase')

// explicit installation required in module environments
Vue.use(Vuetify)
Vue.use(VueResources)
Vue.use(VueFire)

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDFULdMLBvglLWLD6m2sjyJ43g_rfjcBj4',
  authDomain: 'pic-a-pup.firebaseapp.com',
  databaseURL: 'https://pic-a-pup.firebaseio.com',
  projectId: 'pic-a-pup',
  storageBucket: 'pic-a-pup.appspot.com',
  messagingSenderId: '1063538754385'
}

let fbApp = firebase.initializeApp(config)
let fbStorage = fbApp.storage()

axios.defaults.baseURL = 'https://pic-a-pup.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

export { fbStorage }
