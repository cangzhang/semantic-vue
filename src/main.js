// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from "jquery"
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
