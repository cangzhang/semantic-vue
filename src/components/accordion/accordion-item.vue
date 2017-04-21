<template>
  <div class="sv-accordion">
    <div class="title" @click="toggleAccordion" :class="activeClass">
      <sv-icon :with-icon="withIcon"></sv-icon>
      <slot name="title"></slot>
    </div>
    <div class="content sv-accordion-content" :class="activeClass">
      <transition name="ease">
        <slot name="content" v-if="showContent"></slot>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SvAccordionItem',
    componentName: 'SvAccordionItem',
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
    computed: {
      activeClass() {
        return this.showContent ? 'active' : ''
      }
    },
    methods: {
      toggleAccordion() {
        this.showContent = !this.showContent
      }
    },
    mounted() {
    }
  }
</script>

<style lang="stylus" scoped>
  .ease-enter-active, .ease-leave-active
    transition: all 0.3s ease

  .ease-enter, .fade-leave-to
    opacity: 0

  .sv-accordion-content
    padding-bottom: 1em !important
</style>
