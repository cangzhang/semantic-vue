// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import jquery from "jquery"
import Vue from 'vue'
import VueResource from 'vue-resource'
import semantic from 'semantic'
// import Element from 'element-ui'

// import 'element-ui/lib/theme-default/index.css'
import '../semantic/dist/semantic.css'

import App from './App'

Vue.use(VueResource)
// Vue.use(Element)

window.$ = jquery
window.jQuery = jquery

Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true
Vue.config.devtools = false

/* eslint-disable no-new */
const eventHub = new Vue({
  el    : '#app',
  render: h => h(App)
})
