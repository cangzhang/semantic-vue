<template>
  <div class="ui"
       :class="[
       {
         text: !!text,
         container: true
       }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SvContainer',
    componentName: 'SvContainer',
    props: {
      text: Boolean
    }
  }
</script>

<style lang="" scoped></style>
