<template>
<div class="login-modal">
  <div class="ui modal sv-modal" v-if="switchF" :class="{'isVisible': show}">
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
      status: 'login',
      closeDialog: false
    }
  },
  methods: {
    changeStatus(param) {
      this.status = !!param ? 'signUp' : 'login'
    },
    close() {
      OverlayManager.hideOverlay()
      this.closeDialog = true
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
        return true
      }
    },
    switchF() {
      if (this.closeDialog) {
        this.closeDialog = false
        return false
      } else {
        if (this.show) {
          this.closeDialog = false
          OverlayManager.showOverlay()
          return true
        }
      }
    }
  },
  watch: {
    closeDialog(newVal, oldVal) {
      console.log('close old ', oldVal)
      console.log('close new ', newVal)
    },
    show(n, o) {
      console.log('show new ', n)
      console.log('show old ', o)
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
