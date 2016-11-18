<template>
<div id="app">
  <img class="logo" src="./assets/logo.png">
  <hello></hello>
  <login-modal :display="display" ref="sModal"></login-modal>
  <button class="ui primary button" @click="openModal">
    OPEN Modal
  </button>
  <sem-overlay :showOverlay="overlayShow"></sem-overlay>
</div>
</template>

<script>
import Hello from './components/Hello'
import LoginModal from './components/LoginModal'
import SemOverlay from './components/overlay'

export default {
  components: {
    Hello,
    LoginModal,
    SemOverlay
    //      LoginDialog,
    //      SemanticComponent,
  },
  data() {
    return {
      display: false,
      overlayShow: false
    }
  },
  methods: {
    openModal() {
      this.display = !this.display
    }
  },
  events: {
    showOverlay() {
      console.log('showOverlay')
      this.overlayShow = true
    },
    hideOverlay(){
      console.log('hideOverlay')
      this.overlayShow = false
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
