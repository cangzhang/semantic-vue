<template>
  <div v-if="!!conditional" class="ui buttons">
    <slot name="left"></slot>
    <div class="or" :data-text="orText"></div>
    <slot></slot>
  </div>
  <div v-else :class="[
          { basic: basic },
          size,
          { ui: true },
          theme,
          {
            icon: iconButtonGroup,
            buttons: true
          }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SvButtonGroup',
    props: {
      basic: Boolean,
      iconButtonGroup: Boolean,
      size: String,
      theme: String,
      conditional: {
        type: Boolean,
        default: false
      },
      orText: {
        type: String,
        default: 'or'
      }
    }
  }
</script>

<style lang="" scoped></style>
