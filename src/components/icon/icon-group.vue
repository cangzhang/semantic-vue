<template>
  <i :class="[size]" class="icons">
    <slot></slot>
  </i>
</template>

<script>
  export default {
    name: 'SvIconGroup',
    props: {
      size: String
    }
  }
</script>

<style lang="" scoped></style>
