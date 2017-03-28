<template>
  <div :class="[colClass, { row: true }]">
    <slot></slot>
  </div>
</template>

<script>
  import {getColClass} from '../../utils/util'

  export default {
    name: 'SvRow',
    componentName: 'SvRow',
    props: {
      column: [Number, String]
    },
    computed: {
      colClass() {
        if (!!this.column) {
          return getColClass(this.column)
        }
      }
    }
  }
</script>

<style lang="" scoped></style>
