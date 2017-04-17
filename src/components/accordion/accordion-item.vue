<template>
  <div class="sv-accordion">
    <div class="title" @click="toggleAccordion" :class="{'active': showContent}">
      <sv-icon :with-icon="withIcon"></sv-icon>
      <slot name="title"></slot>
    </div>
    <div class="content" :class="{'active': showContent}">
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
    computed: {},
    methods: {
      toggleAccordion() {
        this.showContent = !this.showContent
      }
    }
  }
</script>

<style lang="stylus">
  .ease-enter-active
    transition: all 0.5s ease

  .ease-leave-active
    transition: all 0.5s ease

  .ease-enter, .ease-leave-to
    transition: all 0.5s ease
    opacity: 0

</style>
