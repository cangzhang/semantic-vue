<template>
  <button class="ui button"
          :class="[
            type ? type : ''
          ]"
          :disabled="disabled"
          :type="type"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  import 'semantic-ui-css/components/button.css'

  export default {
    name    : 'sv-button',
    props   : {
      type    : {
        type   : String,
        default: ''
      },
      disabled: Boolean
    },
    data () {
      return {
        msg: 'semantic button'
      }
    },
    computed: {
      nativeBtnType() {
        console.log(this.type)
        return this.type
      },
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

<style scoped>

</style>
