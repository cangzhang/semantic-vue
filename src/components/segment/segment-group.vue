<template>
  <div :class="[{
    'ui': true,
    horizontal: !!horizontal,
    raised: !!raised,
    stacked: !!stacked,
    compact: !!compact,
    piled: !!piled,
    'segments': true
  }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SvSegmentGroup',
    componentName: 'SvSegmentGroup',
    props: {
      horizontal: Boolean,
      raised: Boolean,
      stacked: Boolean,
      piled: Boolean,
      compact: Boolean
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="" scoped></style>
