<template>
  <div :class="[
    {
      'ui': true,
      instant: !!instant,
      disabled: !!disabled,
      active: !!active,
      circular: !!circular
     },
    sizeClass,
    moveClass,
    rotateClass,
    {
      fade: !!fade,
      'reveal': true,
      image: !!image,
    }]">
    <div class="visible content">
      <slot name="visible"></slot>
    </div>
    <div class="hidden content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import {getSize} from '../../utils/util'
  const moveDirt = ['', 'right', 'up', 'down']
  const rotateDirt = ['', 'left', 'right']

  export default {
    name: 'SvReveal',
    componentName: 'SvReveal',
    props: {
      active: Boolean,
      disabled: Boolean,
      instant: Boolean,
      fade: Boolean,
      image: Boolean,
      circular: Boolean,
      move: String,
      rotate: String,
      size: String,
    },
    computed: {
      sizeClass() {
        return getSize(this.size)
      },
      moveClass() {
        if (typeof this.move !== 'undefined') {
          if (moveDirt.indexOf(this.move) >= 0) return 'move ' + this.move
          return 'move'
        }
      },
      rotateClass() {
        if (typeof this.rotate !== 'undefined') {
          if (rotateDirt.indexOf(this.rotate) >= 0 && this.rotate !== 'right') return 'rotate ' + this.rotate
          return 'rotate'
        }
      }
    },
    methods: {}
  }
</script>

<style lang="" scoped></style>
