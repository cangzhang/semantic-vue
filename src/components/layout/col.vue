<template>
  <div :class="[wide]" class="column"></div>
</template>

<script>
  import util from '../../utils/util'
  export default {
    name: 'SvCol',
    props: {
      column: [Number, String],
      width: Number
    },
    computed: {
      wide() {
        return util.getWidthClass(this.width)
      }
    }
  }
</script>

<style lang="" scoped></style>
