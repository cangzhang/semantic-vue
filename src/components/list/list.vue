<template>
  <div :class="[
         !inline ? 'ui': '',
         sizeClass,
         {
           inverted: !!inverted,
           celled: !!celled,
           ordered: !!ordered,
           'very relaxed': !!veryRelaxed,
           relaxed: !!relaxed,
           horizontal: !!horizontal,
           bulleted: !!bulleted,
           divided: !!divided,
           selection: !!selection,
           animated: !!animated,
           link: !!link,
           list: true
       }]">
    <slot></slot>
  </div>
</template>

<script>
  import util from '../../utils/util'

  export default {
    name: 'SvList',
    props: {
      inline: Boolean,
      relaxed: Boolean,
      veryRelaxed: Boolean,
      divided: Boolean,
      bulleted: Boolean,
      ordered: Boolean,
      link: Boolean,
      asLink: Boolean,
      horizontal: Boolean,
      inverted: Boolean,
      selection: Boolean,
      celled: Boolean,
      animated: Boolean,
      size: String,
    },
    computed: {
      sizeClass() {
        return util.getSize(this.size)
      }
    },
    methods: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
