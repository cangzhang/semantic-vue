// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import jquery from "jquery"
import Vue from 'vue'
import VueResource from 'vue-resource'
// import Semantic from 'semantic-ui'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../node_modules/semantic-ui-css/semantic.css'
import App from './App'

Vue.use(VueResource)
Vue.use(Element)
// Vue.use(Semantic)

window.$ = jquery
window.jQuery = jquery

Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el    : '#app',
  render: h => h(App)
})
