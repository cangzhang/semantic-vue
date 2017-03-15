<template>
  <div :class="[wide, { column: true }]">
    <slot></slot>
  </div>
</template>

<script>
  import util from '../../utils/util'

  export default {
    name: 'SvCol',
    props: {
      width: [String, Number]
    },
    computed: {
      wide() {
        if (!!this.width) {
          return util.getWidthClass(this.width)
        }
      }
    }
  }
</script>

<style lang="" scoped></style>
