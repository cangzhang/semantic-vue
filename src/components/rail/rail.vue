<template>
  <div :class="[
    { 'ui': true },
    sizeClass,
    !!close ? close + ' close' : '',
    {
      internal: !!internal,
      dividing: !!dividing,
      attached: !!attached,
      'rail': true
    }
  ]">
    <slot></slot>
  </div>
</template>

<script>
  import {getSize} from '../../utils/util'
  export default {
    name: 'SvRail',
    componentName: 'SvRail',
    props: {
      position: {
        type: String,
        default: 'left',
        validator: function (val) {
          return ['left', 'right'].indexOf(val) >= 0
        }
      },
      internal: Boolean,
      dividing: Boolean,
      attached: Boolean,
      size: String,
      close: {
        type: String,
        validator: function (val) {
          return ['', 'very'].indexOf(val)
        }
      }
    },
    computed: {
      sizeClass() {
        return getSize(this.size);
      }
    },
    methods: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
