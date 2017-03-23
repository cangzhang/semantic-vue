<template>
  <div class="ui"
       :class="[
         {
           horizontal : !!horizontal ,
           fitted: !!fitted,
           hidden: !!hidden,
           section: !!section,
           clearing: !!clearing,
           inverted: !!inverted,
           divider: true
         },
        ]">
    <slot v-if="!!horizontal"></slot>
  </div>
</template>

<script>
  //TODO: vertical, Inverted
  export default {
    name: 'SvDivider',
    componentName: 'SvDivider',
    props: {
      horizontal: {
        type: Boolean,
        default: false
      },
      inverted: Boolean,
      fitted: Boolean,
      hidden: Boolean,
      section: Boolean,
      clearing: Boolean,
    }
  }
</script>

<style lang="" scoped></style>
