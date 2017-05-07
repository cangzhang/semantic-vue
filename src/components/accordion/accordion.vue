<template>
  <div class="ui accordion">
    <div class="title">
      <i class="dropdown icon"></i>
      <slot name="title"></slot>
    </div>
    <div class="content sv-accordion-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SvAccordion',
  componentName: 'SvAccordion',
  props: {},
  computed: {},
  mounted() {}
}
</script>

<style lang="stylus"></style>