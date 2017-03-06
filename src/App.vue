<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div>
      <div>
        <sv-button @click="windowAlert('normal')">{{ msg }}</sv-button>
        <sv-button theme="twitter">{{ msg }}</sv-button>
        <sv-button :active="true" @click="windowAlert('active')">{{ msg }}</sv-button>
        <sv-button :disabled="true" @click="windowAlert('active')">{{ msg }}</sv-button>
      </div>
      <br>
      <div>
        <sv-button type="primary" @click="windowAlert('primary')">{{ msg }}</sv-button>
        <sv-button type="secondary" @click="windowAlert('secondary')">{{ msg }}</sv-button>
        <sv-button type="positive" @click="windowAlert('secondary')">{{ msg }}</sv-button>
        <sv-button type="negative" @click="windowAlert('secondary')">{{ msg }}</sv-button>
      </div>
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
      <sv-labeled-button type="basic" icon="heart" theme="blue" label-text="Like" pointing="right">{{ msg }}
      </sv-labeled-button>
      <sv-labeled-button type="basic" icon="heart" theme="red" :right="true" label-text="Like" pointing="left">
        {{ msg }}
      </sv-labeled-button>
    </div>
    <br>
    <div>
      <sv-animated-button icon="shop" hidden-text="Cart" animate="">{{ msg }}</sv-animated-button>
      <sv-animated-button animate="vertical" icon="shop" hidden-text="Cart">{{ msg }}</sv-animated-button>
      <sv-animated-button animate="fade" icon="shop" hidden-text="Cart">{{ msg }}</sv-animated-button>
    </div>
    <br>
    <div>
      <div>
        <sv-button-group>
          <sv-button @click="windowAlert('normal')">{{ msg }}</sv-button>
          <sv-button type="primary" @click="windowAlert('primary')">{{ msg }}</sv-button>
          <sv-button type="secondary" @click="windowAlert('secondary')">{{ msg }}</sv-button>
          <sv-button type="positive" @click="windowAlert('secondary')">{{ msg }}</sv-button>
          <sv-button type="negative" @click="windowAlert('secondary')">{{ msg }}</sv-button>
        </sv-button-group>
      </div>
      <br>
      <div>
        <sv-button-group :icon="true">
          <sv-button type="icon" icon="cloud"></sv-button>
          <sv-button type="icon" icon="align left"></sv-button>
          <sv-button type="icon" icon="align center"></sv-button>
          <sv-button type="icon" icon="align right"></sv-button>
          <sv-button type="icon" icon="align justify"></sv-button>
        </sv-button-group>
      </div>
      <br>
      <div>
        <sv-button-group :conditional="true">
          <sv-button type="positive" slot="left" @click="windowAlert('left')">Left</sv-button>
          <sv-button @click="windowAlert('right')">Right</sv-button>
        </sv-button-group>
        <sv-button-group :conditional="true" orText="ou">
          <sv-button slot="left">left</sv-button>
          <sv-button type="positive">Right</sv-button>
        </sv-button-group>
      </div>
    </div>
  </div>
</template>

<script>
  import * as svButton from './components/button.vue'
  import * as svLabeledButton from './components/labeled-button.vue'
  import * as svAnimatedButton from './components/animated-button.vue'
  import * as svButtonGroup from './components/button-group.vue'

  export default {
    name      : 'app',
    components: {
      svButton,
      svLabeledButton,
      svAnimatedButton,
      svButtonGroup
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
