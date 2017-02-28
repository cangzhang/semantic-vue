<template>
  <div class="ui"
       :class="{ icon: icon, buttons: 'buttons' }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name : 'svButtonGroup',
    props: {
      icon: Boolean
    }
  }
</script>

<style lang="" scoped></style>
