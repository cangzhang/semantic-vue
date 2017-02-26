<template>
  <button class="ui"
          :class="[
            theme ? theme : '',
            right ? 'right' : 'left',
            {
              labeled: labeled,
              button : button
            },
            type ? type : '',
          ]"
          :disabled="disabled"
          :type="type"
          :autofocus="autofocus"
          :tabindex="tabIndex"
          @click="handleClick">
    <i :class="icon" class="icon" v-if="!!icon"></i>
    <slot></slot>
  </button>
</template>

<script>
  //TODO: labeled button
  export default {
    name    : 'sv-button',
    props   : {
      button   : {
        type   : Boolean,
        default: true
      },
      theme    : String,
      tabIndex : Number,
      type     : {
        type   : String,
        default: ''
      },
      disabled : Boolean,
      autofocus: Boolean,
      icon     : {
        type   : String,
        default: ''
      },
      labeled  : {
        type   : Boolean,
        default: false
      },
      right    : {
        type   : Boolean,
        default: false
      }
    },
    methods : {
      handleClick(ev) {
        this.$emit('click', ev);
      }
    }
  }
</script>

<style lang="scss">
</style>
