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
      <sv-button type="icon" :labeled-icon="true" icon="arrow left">{{ msg }}</sv-button>
      <sv-button type="icon" :labeled-icon="true" :right="true" icon="arrow right">{{ msg }}</sv-button>
    </div>
    <br>
    <div>
      <sv-button type="basic" icon="user" @click="windowAlert('basic')">{{ msg }}</sv-button>
      <sv-button type="basic" theme="teal" :tabindex="0" @click="windowAlert('tab-index')">{{ msg }}</sv-button>
      <sv-button type="basic" theme="black">{{ msg }}</sv-button>
    </div>
    <br>
    <div>
      <sv-labeled-button type="basic" icon="heart" label-text="Like">{{ msg }}</sv-labeled-button>
      <sv-labeled-button type="basic" icon="heart" label-text="Like" pointing="right">{{ msg }}</sv-labeled-button>
      <sv-labeled-button type="basic" icon="heart" :right="true" label-text="Like" pointing="left">{{ msg }}
      </sv-labeled-button>
    </div>
  </div>
</template>

<script>
  import svButton from './components/button.vue'
  import svLabeledButton from './components/labeled-button.vue'
  export default {
    name      : 'app',
    components: {
      svButton,
      svLabeledButton
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
