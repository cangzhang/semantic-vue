<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view></router-view> -->
    <button @click="windowAlert()">Click Me</button>
  </div>
</template>
<script>
  export default {
    name   : 'app',
    methods: {
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
