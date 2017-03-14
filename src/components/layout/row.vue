<template>
  <div :class="colClass" class="row"></div>
</template>

<script>
  import util from '../../utils/util'

  export default {
    name: 'SvRow',
    props: {
      column: [Number, String]
    },
    computed: {
      colClass() {
        return util.getColClass(this.column)
      }
    }
  }
</script>

<style lang="" scoped></style>
