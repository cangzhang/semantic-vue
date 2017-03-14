<template>
  <div class="ui"
       :class="[
         colNum,
         {
           doubling: !!doubling,
           stackable: !!stackable,
           celled: !!celled
         },
         dividedClass,
         {
           grid: true,
           container: !!gridContainer
         }]">
    <slot></slot>
  </div>
</template>

<script>
  //TODO: consecutive
  import util from '../../utils/util'
  export default {
    name: 'SvGrid',
    props: {
      column: [Number, String],
      stackable: Boolean,
      doubling: Boolean,
      celled: Boolean,
      gridContainer: Boolean,
      divided: String
    },
    computed: {
      colNum() {
        if (!!this.column) {
          return util.getColClass(this.column)
        }
      },
      dividedClass() {
        if (!!this.divided && this.divided.length && this.divided === 'v') {
          return 'vertically divided'
        } else {
          return 'divided'
        }
      }
    }
  }
</script>

<style lang="" scoped></style>
