// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import jquery from 'jquery'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
// import semantic from 'semantic-ui/dist/semantic.js'

import 'semantic-ui-css/semantic.css'

import App from './App'

window.$ = jquery
window.jQuery = jquery

let localToken = localStorage.getItem('localToken') ? localStorage.getItem('localToken') : '';

Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.devtools = false

Vue.http.options.xhr = {
  withCredentials: true
}
Vue.http.options.emulateJSON = true
Vue.http.options.root = '/api'
Vue.http.headers.common['Authorization'] = 'Bearer ' + localToken

const UserControlModule = {
  state: {
    loginModalStatus: false
  },
  mutations: {
    switchModalStatus: state => state.loginModalStatus = !state.loginModalStatus
  },
  actions: {
    registerUser({
      commit,
      state
    }, userInfo) {
      return Vue.http.post('register', userInfo)
        .then((response) => {
          console.log(response.body)
          commit('switchModalStatus')
        }, (response) => {})
    },
    login({
      commit,
      state
    }, userInfo) {
      return Vue.http.post('login', userInfo)
        .then((response) => {
          let localToken = response.body.token
          localStorage.setItem('VulaToken', localToken)
          commit('switchModalStatus')
        }, (response) => {
          console.log(response.body.errors.message)
        })
    }
  }
}

const store = new Vuex.Store({
  modules: {
    UserControl: UserControlModule
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
