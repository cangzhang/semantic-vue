<template>
  <i :class="[
       sizeClass,
       theme,
       {
         corner: !!corner,
         disabled: !!disabled,
         bordered: !!bordered,
         circular: !!circular,
         fitted: !!fitted,
         loading: !!loading,
         link: !!link,
         flipped: !!flipped,
         rotated: !!rotated,
       }]"
     class="icon">
  </i>
</template>

<script>
  //TODO: inverted
  import util from '../../utils/util'

  export default {
    name: 'SvIcon',
    props: {
      size: String,
      withIcon: String,
      disabled: Boolean,
      loading: Boolean,
      fitted: Boolean,
      link: Boolean,
      flipped: Boolean,
      rotated: Boolean,
      circular: Boolean,
      bordered: Boolean,
      inverted: Boolean,
      corner: Boolean, // only makes sense in icon group
      theme: String
    },
    computed: {
      sizeClass() {
        return util.getSize(this.size)
      }
    }
  }
</script>

<style lang="" scoped></style>
