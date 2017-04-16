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
    name: 'SvAccordionGroup',
    componentName: 'SvAccordionGroup',
    props: {}
  }
</script>

<style lang=""></style>
