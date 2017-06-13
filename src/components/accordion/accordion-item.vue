<template>
  <div class="sv-accordion-item">
    <div class="title sv-accordion-title" @click="toggleAccordion" :class="{ 'active': isActive }">
      <i class="dropdown icon"></i>
      <slot name="title"></slot>
    </div>
    <div class="content sv-accordion-content" v-show="isActive" :class="{ 'active': isActive }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
//  import SvAccordionTransition from '../../utils/accordion-transition'
import Emitter from '../../../src/utils/emitter'

  export default {
    name: 'SvAccordionItem',
    componentName: 'SvAccordionItem',
    mixins: [Emitter],
//    components: {SvAccordionTransition},
    props: {
      active: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        default() {
          return this._uid
        }
      }
    },
    data() {
      return {
        showContent: false
      }
    },
    computed: {
      isActive() {
        return this.$parent.activeNames.indexOf(this.name) >= 0
      }
    },
    methods: {
      toggleAccordion() {
        this.showContent = !this.showContent
        this.dispatch('SvAccordion', 'accordion-item-click', this)
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
