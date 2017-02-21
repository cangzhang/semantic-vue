<template>
  <button :class="btnPreference">{{ msg }}</button>
</template>

<script>
  import 'semantic-ui-css/components/button.css'

  export default {
    name    : 'sv-button',
    data () {
      return {
        msg: 'semantic button'
      }
    },
    computed: {
      btnPreference() {
        return {
          ui     : true,
          button : true,
          primary: true
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
