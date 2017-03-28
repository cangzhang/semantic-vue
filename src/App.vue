<template>
  <div id="app">
    <sv-row class="topNav">
      <router-link to="/">
        <sv-button type="icon" icon="home" compact></sv-button>
      </router-link>
      <router-link to="/button">
        <sv-button compact>Button</sv-button>
      </router-link>
      <router-link to="/input">
        <sv-button compact>Input</sv-button>
      </router-link>
      <router-link to="/label">
        <sv-button compact>Label</sv-button>
      </router-link>
      <router-link to="/list">
        <sv-button compact>List</sv-button>
      </router-link>
      <router-link to="/loader">
        <sv-button compact>Loader</sv-button>
      </router-link>

      <sv-divider horizontal>Content</sv-divider>
    </sv-row>
    <br>

    <sv-container>
      <router-view></router-view>
    </sv-container>

  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data() {
      return {
        msg: 'Button',
        svInput: ''
      }
    },
    methods: {
      windowAlert(text) {
        alert(text)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    margin-left: 100px;
    margin-right: 100px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 50px;
    .topNav {
      text-align: center;
    }
  }
</style>
