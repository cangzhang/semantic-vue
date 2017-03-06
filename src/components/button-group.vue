<template>
  <div v-if="conditional" class="ui buttons">
    <slot name="left"></slot>
    <div class="or" :data-text="orText"></div>
    <slot></slot>
  </div>

  <div v-else class="ui" :class="[{ icon: icon, buttons: true }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name : 'svButtonGroup',
    props: {
      icon       : Boolean,
      conditional: {
        type   : Boolean,
        default: false
      },
      orText     : {
        type   : String,
        default: 'or'
      }
    }
  }
</script>

<style lang="" scoped></style>
