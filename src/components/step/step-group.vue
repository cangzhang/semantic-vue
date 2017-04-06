<template>
  <div :class="[
    { 'ui': true },
    numClass,
    sizeClass,
    attachedClass,
    {
      fluid: !!fluid,
      ordered: !!ordered,
      stackable: !!stackable,
      vertical: !!vertical,
      'steps': true
    }]">
    <slot></slot>
  </div>
</template>

<script>
  import {getAttachedClass, toWord, getSize} from '../../utils/util'
  export default {
    name: 'SvStepGroup',
    componentName: 'SvStepGroup',
    props: {
      ordered: Boolean,
      vertical: Boolean,
      stackable: Boolean,
      fluid: Boolean,
      attached: String,
      size: String,
      number: [String, Number],
    },
    computed: {
      attachedClass() {
        return getAttachedClass(this.attached)
      },
      numClass() {
        return toWord(this.number)
      },
      sizeClass() {
        return getSize(this.size)
      }
    },
    methods: {}
  }
</script>

<style lang="" scoped></style>
