<template>
  <button :class="[
            {
              circular: !!circular,
              fluid: !!fluid,
              compact: !!compact,
            },
            size,
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
  export default {
    name    : 'svButton',
    props   : {
      theme      : String,
      tabindex   : Number,
      type       : String,
      disabled   : Boolean,
      autofocus  : Boolean,
      icon       : String,
      labeledIcon: Boolean,
      right      : Boolean,
      animated   : String,
      loading    : String,
      active     : Boolean,
      fluid      : Boolean,
      circular   : Boolean,
      compact    : Boolean,
      toggle     : Boolean,
      size       : String,
      attached   : String,
    },
    computed: {
      verticallyAttached() {
        if (typeof this.attached !== 'undefined') {
          return this.attached + ' attached'
        }
      }
    },
    methods : {
      handleClick(ev) {
        this.$emit('click', ev);
      }
    }
  }
</script>

<style lang="scss"></style>
