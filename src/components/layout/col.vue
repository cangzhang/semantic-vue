<template>
  <div :class="[wide, { column: true }]">
    <slot></slot>
  </div>
</template>

<script>
  import {getWidthClass} from '../../utils/util'

  export default {
    name: 'SvCol',
    componentName: 'SvCol',
    props: {
      width: [String, Number]
    },
    computed: {
      wide() {
        if (!!this.width) {
          return getWidthClass(this.width)
        }
      }
    }
  }
</script>

<style lang="" scoped></style>
