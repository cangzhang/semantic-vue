<template>
  <div id="app">
    <div>
      <router-link to="/">
        <sv-button type="icon" icon="home"></sv-button>
      </router-link>
      <router-link to="/buttons">
        <sv-button>
          <i class="tag icon"></i>
          Button Element
        </sv-button>
      </router-link>
      <router-link to="/input">
        <sv-button>
          <i class="tag icon"></i>
          Input Element
        </sv-button>
      </router-link>
      <sv-divider horizontal>Content</sv-divider>
    </div>

    <router-view></router-view>

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
    margin-top: 50px;
  }
</style>
