<template>
  <div id="app">
    <div></div>
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <button class="ui primary button" @click="openModal">OPEN</button>
    <modal :display="toggle"></modal>
    <!--<login-dialog></login-dialog>-->
    <!--<semantic-component></semantic-component>-->

  </div>
</template>

<script>
  import Hello from './components/Hello'
  import LoginDialog from './components/LoginDialog'
  import SemanticComponent from './components/SemanticComponent.vue'
  import Modal from './components/Modal.vue'

  export default {
    components: {
      Hello,
//      LoginDialog,
//      SemanticComponent,
      Modal
    },
    data() {
      return {
        show: false,
        toggle: ''
      }
    },
    methods: {
      openModal() {
        return this.toggle = !this.show
      }
    },
    watch: {
      toggle: (val)=> {
        console.log(val)
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
