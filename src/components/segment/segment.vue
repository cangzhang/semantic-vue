<template>
  <div :class="[
      { 'ui': true },
      theme,
      floatedClass,
      alignedClass,
      {
        basic: !!basic,
        clearing: !!clearing,
        loading: !!loading,
        disabled: !!disabled,
        secondary: !!secondary,
        tertiary: !!tertiary,
        padded: !!padded,
        compact: !!compact,
        inverted: !!inverted,
        circular: !!circular,
      },
      attachedClass,
      stackedClass,
      paddedClass,
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
  //  theme = Red Orange Yellow Olive Green Teal Blue Violet Purple Pink Brown Grey Black
  export default {
    name: 'SvSegment',
    componentName: 'SvSegment',
    props: {
      clearing: Boolean,
      basic: Boolean,
      inverted: Boolean,
      circular: Boolean,
      vertical: Boolean,
      raised: Boolean,
      stacked: String,
      theme: String,
      attached: String,
      piled: Boolean,
      secondary: Boolean,
      tertiary: Boolean,
      loading: Boolean,
      disabled: Boolean,
      compact: Boolean,
      padded: String,
      floated: String,
      aligned: String,
    },
    computed: {
      stackedClass() {
        if (typeof this.stacked !== 'undefined') {
          if ((this.stacked).toLowerCase() === 'tall') return 'tall stacked'
          return 'stacked'
        }
      },
      attachedClass() {
        if (typeof this.attached !== 'undefined') {
          if (['top', 'bottom'].indexOf((this.attached).toLowerCase()) >= 0) return this.attached + ' attached'
          return 'attached'
        }
      },
      paddedClass() {
        if (typeof this.padded !== 'undefined') {
          if ((this.padded).toLowerCase() === 'very') return 'very padded'
          return 'padded'
        }
      },
      floatedClass() {
        if (typeof this.floated !== 'undefined') {
          if ((this.floated).toLowerCase() === 'right') return 'right floated'
          return 'left floated'
        }
      },
      alignedClass() {
        if (typeof this.aligned !== 'undefined') {
          if (['left', 'center', 'right'].indexOf((this.aligned).toLowerCase()) >= 0)
            return (this.aligned).toLowerCase() + ' aligned'
          return 'center aligned'
        }
      }
    },
    methods: {}
  }
</script>

<style lang="" scoped></style>
