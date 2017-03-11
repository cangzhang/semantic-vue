<template>
  <div id="app">
    <div>
      <router-link to="/">
        <sv-button type="icon" icon="home"></sv-button>
      </router-link>
      <router-link to="/buttons">
        <sv-button><i class="tag icon"></i>Button Page</sv-button>
      </router-link>
      <sv-divider horizontal>Page Content</sv-divider>
    </div>
    <router-view></router-view>
    <div>
      <sv-input with-icon="circular search link"
                labeled="right"
                v-model="svInput" placeholder="Search"></sv-input>
      <span>{{ svInput }}</span>
    </div>
  </div>
</template>

<script type="text/babel">
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
    text-align: center;
    color: #2c3e50;
    margin-top: 10%;
  }
</style>
