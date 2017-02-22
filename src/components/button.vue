<template>
  <button class="ui button"
          :class="[
            type ? type : ''
          ]"
          :disabled="disabled"
          :type="type"
          :autofocus="autofocus"
          @click="handleClick">
    <i class="icon" :class="icon" v-if="!!icon"></i>
    <slot></slot>
  </button>
</template>

<script>
  import 'semantic-ui-css/components/button.css'

  export default {
    name    : 'sv-button',
    props   : {
      type     : {
        type   : String,
        default: ''
      },
      disabled : Boolean,
      autofocus: Boolean,
      icon     : {
        type   : String,
        default: ''
      }
    },
    data () {
      return {
        msg: 'semantic button'
      }
    },
    computed: {
      btnClass() {
        return {
          ui    : true,
          button: true
        }
      }
    },
    methods : {
      handleClick(ev) {
        this.$emit('click', ev);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'node_modules/semantic-ui-sass/app/assets/stylesheets/semantic-ui/elements/_icon';
</style>
