<template>
  <div class="sv-accordion-item">
    <div class="title sv-accordion-title" @click="toggleAccordion" :class="activeClass">
      <i class="dropdown icon"></i>
      <slot name="title"></slot>
    </div>
    <div class="content sv-accordion-content" v-show="activeClass" :class="activeClass">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
//  import SvAccordionTransition from '../../utils/accordion-transition'

  export default {
    name: 'SvAccordionItem',
    componentName: 'SvAccordionItem',
//    components: {SvAccordionTransition},
    props: {
      /*withIcon: {
       type: String,
       default: 'dropdown'
       },*/
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
      toggleAccordion(ev) {
        this.showContent = !this.showContent
        this.$emit('click', ev)
        this.$emit('change', ev)
      }
    },
    mounted() {
    }
  }
</script>

<style lang="stylus" scoped>
  .accordion-transition
    transition:
      0.3s height ease-in-out,
      0.3s padding-top ease-in-out,
      0.3s padding-bottom ease-in-out;
</style>
