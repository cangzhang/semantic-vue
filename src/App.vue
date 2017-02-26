<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <sv-button @click="windowAlert('normal')">{{ msg }}</sv-button>
      <sv-button type="primary" @click="windowAlert('primary')">{{ msg }}</sv-button>
      <sv-button type="secondary" @click="windowAlert('secondary')">{{ msg }}</sv-button>
      <sv-button type="positive" @click="windowAlert('secondary')">{{ msg }}</sv-button>
      <sv-button type="negative" @click="windowAlert('secondary')">{{ msg }}</sv-button>
    </div>
    <br>
    <div>
      <sv-button type="icon" icon="cloud" @click="windowAlert('icon')"></sv-button>
      <sv-button type="icon" :labeled="true" icon="arrow left">{{ msg }}</sv-button>
      <sv-button type="icon" :labeled="true" :right="true" icon="arrow right">{{ msg }}</sv-button>
    </div>
    <br>
    <div>
      <sv-button type="basic" icon="user" @click="windowAlert('basic')">{{ msg }}</sv-button>
      <sv-button type="basic" :tabindex="0">{{ msg }}</sv-button>
      <sv-button type="basic" theme="black">{{ msg }}</sv-button>
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
