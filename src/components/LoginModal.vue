<template>
<div class="login-modal">
  <div class="ui modal s-modal" v-if="show" :class="{'isVisible': show}">
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
        No
      </div>
      <div class="ui positive right labeled icon button" @click="confirm()">
        Yes
        <i class="checkmark icon"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'sem-modal',
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
      this.show = false
      this.closeOverlay()
    },
    confirm() {
      this.closeOverlay()
      this.show = false
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      return this.promise;
    },
    isLogin() {
      return this.status === 'login'
    },
    closeOverlay() {
      this.$emit('hide-overlay')
    }
  },
  created() {
    console.log('init show', this.show)
  },
  watch: {
    display() {
      this.show = true
      this.$emit('showOverlay')
    },
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
}
</style>
