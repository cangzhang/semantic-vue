import Vue from 'vue'
import VueRouter from 'vue-router'
import components from './components/index'

components.map(component => {
  Vue.component(component.componentName, component)
})

Vue.use(VueRouter)

export {Vue, VueRouter}
