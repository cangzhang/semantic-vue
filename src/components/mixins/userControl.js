import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  registerUser(userInfo) {
    return this.$http.post('/register', userInfo)
  },
  login(userInfo) {
    return this.$http.post('/login', userInfo)
  }
}
