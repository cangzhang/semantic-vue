<template>
  <div :class="[
      { 'ui': true },
      stackedClass,
      {
        vertical: !!vertical,
        piled: !!piled,
        raised: !!raised,
        'segment': true
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SvSegment',
    componentName: 'SvSegment',
    props: {
      vertical: Boolean,
      raised: Boolean,
      stacked: String,
      piled: Boolean,
    },
    computed: {
      stackedClass() {
        if (typeof this.stacked !== 'undefined') {
          if (this.stacked === 'tall') return 'tall stacked'
          return 'stacked'
        }
      }
    },
    methods: {}
  }
</script>

<style lang="" scoped></style>
