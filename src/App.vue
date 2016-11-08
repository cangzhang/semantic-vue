<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <login-modal :display="show" ref="sModal"></login-modal>
    <button class="ui primary button" @click="openModal">OPEN Modal</button>
    <!--<login-dialog></login-dialog>-->
    <!--<semantic-component></semantic-component>-->
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import LoginModal from './components/LoginModal.vue'
  //  import LoginDialog from './components/LoginDialog'
  //  import SemanticComponent from './components/SemanticComponent.vue'

  export default {
    components: {
      Hello,
      LoginModal
//      LoginDialog,
//      SemanticComponent,
    },
    data() {
      return {
        show: false
      }
    },
    methods   : {
      openModal() {
        this.show = !this.show
      }
    },
    watch     : {
      show(val) {
        console.log('watch show', val)
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
