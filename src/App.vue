<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <sv-button type="icon" icon="cloud" @click="windowAlert('icon')"></sv-button>
      <sv-button type="primary" @click="windowAlert('primary')">{{ msg }}</sv-button>
      <sv-button type="secondary" @click="windowAlert('secondary')">{{ msg }}</sv-button>
      <sv-button @click="windowAlert('normal')">{{ msg }}</sv-button>
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
    data() {
      return {
        msg: 'Button Text'
      }
    },
    methods   : {
      windowAlert(text) {
        alert(text)
      }
    }
  }
</script>
<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10%;
  }
</style>
