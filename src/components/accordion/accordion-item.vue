<template>
  <div class="sv-accordion">
    <div class="title" @click="toggleAccordion" :class="{'active': showContent}">
      <sv-icon :with-icon="withIcon"></sv-icon>
      <slot name="title"></slot>
    </div>
    <div class="content" :class="{'active': showContent}">
      <transition name="accordion">
        <slot name="content" v-if="showContent"></slot>
      </transition>
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
      },
      active: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        showContent: false,
      }
    },
    computed: {},
    methods: {
      toggleAccordion() {
        this.showContent = !this.showContent
      }
    }
  }
</script>

<style lang="stylus"></style>
