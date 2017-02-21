<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="windowAlert()">Click Me</button>
      <sv-button></sv-button>
    </div>
  </div>
</template>
<script>
  import svButton from './components/button.vue'
  export default {
    name      : 'app',
    components: {
      svButton
    },
    methods   : {
      windowAlert() {
        alert('1')
      }
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20%;
  }
</style>
