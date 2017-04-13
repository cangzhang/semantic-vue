<template>
  <div :class="[
        { 'ui': true },
        numberClass,
        {'menu': true }]">
  </div>
</template>

<script>
  import { getSize, toWord } from '../../utils/util'

  export default {
    name         : 'SvMenu',
    componentName: 'SvMenu',
    props        : {
      items: [Number, String],
    },
    computed     : {
      numberClass() {
        return toWord(this.items) + ' item'
      }
    },
  }
</script>

<style lang=""></style>
