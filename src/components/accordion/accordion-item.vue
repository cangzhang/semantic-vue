<template>
  <div class="sv-accordion">
    <div class="title" @click="toggleAccordion" :class="activeClass">
      <i class="dropdown icon"></i>
      <slot name="title"></slot>
    </div>
    <div class="content sv-accordion-content active" :class="">
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
      // withIcon: {
      //   type: String,
      //   default: 'dropdown'
      // },
      active: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        showContent: false
      }
    },
    computed: {
      activeClass() {
        return this.showContent ? 'active' : ''
      }
    },
    methods: {
      toggleAccordion() {
        if (this.showContent) {
          this.showContent = false
        } else {
          this.showContent = true
        }
      }
    },
    mounted() {}
  }
</script>

<style lang="stylus" scoped>
  .ease-enter-active, .ease-leave-active
    transition: all 0.3s ease

  .ease-enter, .ease-leave-to
    opacity: 0

  .sv-accordion-content
    padding-bottom: 1em !important
</style>
