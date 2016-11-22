<template>
<div class="login-modal">
  <div class="ui modal sv-modal" v-if="show" :class="{'isVisible': show}">
    <i class="close icon"></i>
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
            <input type="text" placeholder="username">
          </div>
          <div class="ui labeled input">
            <div class="ui teal label">
              PASSWORD
            </div>
            <input type="password" placeholder="password">
          </div>
        </div>
        <div class="signUpArea column" v-else>
          <div class="ui labeled input">
            <div class="ui teal label">
              USERNAME
            </div>
            <input type="text" placeholder="username">
          </div>
          <div class="ui labeled input">
            <div class="ui teal label">
              EMAIL
            </div>
            <input type="email" placeholder="email">
          </div>
          <div class="ui labeled input">
            <div class="ui teal label">
              PASSWORD
            </div>
            <input type="password" placeholder="password">
          </div>
        </div>
      </form>
    </div>
    <div class="actions">
      <div class="ui black deny button" @click="cancel()">
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
export default {
  name: 'sv-modal',
  mixins: [OverlayManager],
  props: ['display'],
  data() {
    return {
      show: false,
      resolve: '',
      reject: '',
      promise: '',
      status: 'login'
    }
  },
  methods: {
    changeStatus(param) {
      this.status = !!param ? 'signUp' : 'login'
    },
    cancel() {
      console.info('close')
      this.show = false
    },
    confirm() {
      this.show = false
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
      if (this.display) {
        OverlayManager.showOverlay()
        return this.display
      }
    }
  },
  watch: {
    // display() {
    //   this.show = true
    // },
    show(newVal, oldVal) {
      console.log('show before ', oldVal)
      console.log('show after ', newVal)
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
