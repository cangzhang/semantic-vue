<template>
  <div :class="[
    {'ui': true},
    sizeClass,
    {'active': !!active},
    inlineClass,
    {
      'inverted': !!inverted,
      'disabled': !!disabled,
      'indeterminate': !!indeterminate,
      'text': !!withText,
      'loader': true
    }]">
    {{ withText }}

  </div>
</template>

<script>
  //TODO: adjust size
  import util from '../../utils/util'

  export default {
    name: 'SvLoader',
    componentName: 'SvLoader',
    props: {
      withText: String,
      indeterminate: Boolean,
      active: Boolean,
      inverted: Boolean,
      disabled: Boolean,
      inline: String,
      size: String
    },
    computed: {
      inlineClass() {
        if (this.inline === 'centered') return 'centered inline'
        if (!!this.inline) return ' inline'
      },
      sizeClass() {
        return util.getSize(this.size)
      }
    },
    methods: {}
  }
</script>

<style lang="" scoped></style>
