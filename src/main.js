// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import jquery from "jquery"
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
// import semantic from 'semantic-ui/dist/semantic.js'

import 'semantic-ui-css/semantic.css'

import App from './App'

window.$ = jquery
window.jQuery = jquery

Vue.use(VueResource)
Vue.use(Vuex)

Vue.http.options.xhr = {
  withCredentials: true
}
Vue.http.options.emulateJSON = true
Vue.config.devtools = false

const store = new Vuex.Store({
  state: {
    loginModalStatus: false
  },
  mutations: {
    switchModalStatus: state => state.loginModalStatus = !state.loginModalStatus
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
