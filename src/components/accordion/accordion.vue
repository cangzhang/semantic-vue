<template>
  <div class="sv-accordion">
    <div class="title" @click="toggleAccordion">
      <sv-icon :with-icon="withIcon"></sv-icon>
      <slot name="title"></slot>
    </div>
    <div class="content" :class="{'active': showContent}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SvAccordion',
    componentName: 'SvAccordion',
    props: {
      withIcon: {
        type: String,
        default: 'dropdown'
      }
    },
    data() {
      return {
        showContent: false,
      }
    },
    methods: {
      toggleAccordion() {
        this.showContent = !this.showContent
      }
    }
  }
</script>

<style lang=""></style>
