<template>
  <div :class="[{
      'ui': true,
      'accordion': true,
  }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SvAccordion',
    componentName: 'SvAccordion',
    props: {}
  }
</script>

<style lang=""></style>
