<template>
<div class="login-modal">
  <div class="ui modal sv-modal" v-show="show" :class="{'isVisible': show}">
    <i class="close icon" @click="close()"></i>
    <div class="header centered ui grid three column">
      <div class="ui buttons centered column">
        <button class="ui button" @click="changeStatus()" :class="{ 'positive': isLogin() }">
          Login
        </button>
        <button class="ui button" @click="changeStatus(1)" :class="{ 'positive': !isLogin() }">
          Sign Up
        </button>
      </div>
    </div>
    <div class="content">
      <form class="loginForm ui grid three column centered">
        <div class="loginArea column" v-if="isLogin()">
          <div class="ui labeled input">
            <div class="ui teal label">
              USERNAME
            </div>
            <input type="text" placeholder="username" v-model="loginInfo.username">
          </div>
          <div class="ui labeled input">
            <div class="ui teal label">
              PASSWORD
            </div>
            <input type="password" placeholder="password" v-model="loginInfo.password">
          </div>
        </div>
        <div class="signUpArea column" v-else>
          <div class="ui labeled input">
            <div class="ui teal label">
              USERNAME
            </div>
            <input type="text" placeholder="username" v-model="regInfo.username">
          </div>
          <div class="ui labeled input">
            <div class="ui teal label">
              EMAIL
            </div>
            <input type="email" placeholder="email" v-model="regInfo.email">
          </div>
          <div class="ui labeled input">
            <div class="ui teal label">
              PASSWORD
            </div>
            <input type="password" placeholder="password" v-model="regInfo.password">
          </div>
        </div>
      </form>
    </div>
    <div class="actions">
      <div class="ui black deny button" @click="close()">
        <i class="remove icon"></i> Cancel
      </div>
      <div class="ui positive button" @click="confirm()">
        <i class="checkmark icon"></i> {{ isLogin() ? 'Login' : 'Sign Up' }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import OverlayManager from './mixins/manager'
import UserControl from './mixins/userControl'

export default {
  name: 'sv-modal',
  mixins: [OverlayManager, UserControl],
  props: ['display'],
  data() {
    return {
      show: false,
      resolve: '',
      reject: '',
      promise: '',
      status: 'login',
      loginInfo: {
        username: '',
        password: ''
      },
      regInfo: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    changeStatus(param) {
      this.status = !!param ? 'signUp' : 'login'
    },
    close() {
      this.$store.commit('switchModalStatus')
    //   OverlayManager.hideOverlay()
    },
    confirm() {
      UserControl.login(this.loginInfo)
      .then(response=>{
        console.log(response);
      })
      this.$store.commit('switchModalStatus')
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      return this.promise;
    },
    isLogin() {
      return this.status === 'login'
    }
  },
  computed: {
    show() {
      return this.display
    }
  }
}
</script>

<style scoped>
.isVisible {
  display: block;
  top: 35%
}
</style>
