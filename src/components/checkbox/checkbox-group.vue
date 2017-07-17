<template>
  <div class="sv-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  import Emitter from './../../utils/emitter'
  
  export default {
    name: 'SvCheckboxGroup',
    componentName: 'SvCheckboxGroup',
    mixins: [Emitter],
    props: {
      value: {},
      min: Number,
      max: Number,
      size: String,
    },
    watch: {
      value(val) { //TODO
      }
    },
  }
</script>

<style lang="scss"></style>