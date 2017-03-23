<template>
  <div class="ui"
       :class="[
         colNum,
         {
           doubling: !!doubling,
           stackable: !!stackable
         },
         celledClass,
         dividedClass,
         {
           grid: true,
           container: !!gridContainer
         }]">
    <slot></slot>
  </div>
</template>

<script>
  //TODO: consecutive responsive
  import util from '../../utils/util'

  export default {
    name: 'SvGrid',
    componentName: 'SvGrid',
    props: {
      column: [Number, String],
      stackable: Boolean,
      doubling: Boolean,
      celled: Boolean,
      divided: String,
      gridContainer: Boolean
    },
    computed: {
      colNum() {
        if (!!this.column) {
          return util.getColClass(this.column)
        }
      },
      dividedClass() {
        if (!!this.gridContainer) {
          if (!!this.divided && this.divided.length && this.divided === 'v') {
            return 'vertically divided'
          } else if (!!this.divided) {
            return 'divided'
          }
        }
      },
      celledClass() {
        return !!this.gridContainer ? this.celled : ''
      }
    }
  }
</script>

<style lang="" scoped></style>
