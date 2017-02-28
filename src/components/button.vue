<template>
  <button class="ui"
          :class="[
            theme,
            right ? 'right' : 'left',
            {
              labeled: labeledIcon,
              button : 'button'
            },
            type,
          ]"
          :disabled="disabled"
          :type="type"
          :autofocus="autofocus"
          :tabindex="tabindex"
          @click="handleClick">
    <i :class="icon" class="icon" v-if="!!icon"></i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name   : 'sv-button',
    props  : {
      theme      : String,
      tabindex   : Number,
      type       : String,
      disabled   : Boolean,
      autofocus  : Boolean,
      icon       : String,
      labeledIcon: Boolean,
      right      : Boolean,
      animated   : String
    },
    methods: {
      handleClick(ev) {
        this.$emit('click', ev);
      }
    }
  }
</script>

<style lang="scss"></style>
