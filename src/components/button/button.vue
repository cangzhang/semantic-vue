<template>
  <button :class="[
            {
              circular: !!circular,
              fluid: !!fluid,
              compact: !!compact,
            },
            realSize,
            {
              ui: true,
              toggle: !!toggle,
            },
            theme,
            verticallyAttached,
            right ? 'right' : 'left',
            {
              active: !!active,
              labeled: !!labeledIcon,
              button: 'button',
              disabled: !!disabled,
              loading: !!loading
            },
            type,
          ]"
          :autofocus="autofocus"
          :tabindex="tabindex"
          @click="handleClick">
    <i :class="icon" class="icon" v-if="!!icon"></i>
    <slot></slot>
  </button>
</template>

<script>
  import {getSize} from '../../utils/util'

  export default {
    name: 'SvButton',
    componentName: 'SvButton',
    props: {
      theme: String,
      tabindex: Number,
      type: String,
      disabled: Boolean,
      autofocus: Boolean,
      icon: String,
      labeledIcon: Boolean,
      right: Boolean,
      animated: String,
      loading: String,
      active: Boolean,
      fluid: Boolean,
      circular: Boolean,
      compact: Boolean,
      toggle: Boolean,
      size: [String, Number],
      attached: String,
    },
    computed: {
      verticallyAttached() {
        if (typeof this.attached !== 'undefined') {
          return this.attached + ' attached'
        }
      },
      realSize() {
        return getSize(this.size)
      }
    },
    methods: {
      handleClick(ev) {
        this.$emit('click', ev)
      }
    }
  }
</script>

<style lang="scss"></style>
