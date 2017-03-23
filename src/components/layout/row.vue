<template>
  <div :class="[colClass, { row: true }]">
    <slot></slot>
  </div>
</template>

<script>
  import util from '../../utils/util'

  export default {
    name: 'SvRow',
    componentName: 'SvRow',
    props: {
      column: [Number, String]
    },
    computed: {
      colClass() {
        if (!!this.column) {
          return util.getColClass(this.column)
        }
      }
    }
  }
</script>

<style lang="" scoped></style>
