<template>
<div id="app">
  <!-- <img class="logo" src="./assets/logo.png"> -->
  <hello></hello>
  <login-modal :display="display" ref="semModal"></login-modal>
  <button class="ui primary button" @click="openModal">
    OPEN Modal
  </button>
</div>
</template>

<script>
import Hello from './components/Hello'
import LoginModal from './components/LoginModal'

export default {
  components: {
    Hello,
    LoginModal
  },
  computed: {
    display() {
      return this.$store.state.UserControl.loginModalStatus
    }
  },
  data() {
    return {}
  },
  methods: {
    openModal() {
      this.$store.commit('switchModalStatus')
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
