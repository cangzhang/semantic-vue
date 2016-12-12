<template>
<div class="sv-overlay" v-if="showOverlay">
</div>
</template>

<script>
export default {
  name: 'svOverlay',
  props: {
    showOverlay: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    // onClick: {
    //   type: Function
    // },
    opacity: {
      type: Number,
      default: 0.6
    },
    color: {
      type: String,
      default: '#000'
    },
    zIndex: {
      type: Number
    }
  },
  computed: {
    style() {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      }
    }
  },
  methods: {
    prevent(event) {
      event.preventDefault()
      event.stopPropagation()
    },
    handleClick() {
      if (this.onClick) {
        this.onClick()
      }
    }
  }
}
</script>

<style lang="css">
.sv-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: .4;
  z-index: 1000;
}
</style>
