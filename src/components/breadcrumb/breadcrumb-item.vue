<template>
  <div class="sv-breadcrumb-item">
    <a v-if="asLinkClass" :class="sectionClass" class="sv-breadcrumb-section">{{ section }}</a>
    <div v-else class="sectionClass">{{ section }}</div>
    
    <div v-if="!dividerIcon" class="divider sv-breadcrumb-divider">/</div>
    <i v-else :class="[dividerIconClass, { 'divider': true, }]" class="sv-breadcrumb-divider"></i>
  </div>
</template>

<script>
  export default {
    name: 'SvBreadcrumbItem',
    componentName: 'SvBreadcrumbItem',
    props: {
      section: [String, Number],
      dividerIcon: [String],
      active: [Boolean, String],
      asLink: [Boolean, String],
    },
    computed: {
      dividerIconClass() {
        return this.dividerIcon + ' icon'
      },
      sectionClass() {
        return {
          'active': !!this.active,
          'section': true
        }
      },
      asLinkClass() {
        if (typeof this.asLink !== 'undefined') {
          return !!this.asLink
        }
        return !!this.$parent.asLink
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  .sv-breadcrumb-item {
    display: flex;
    align-items: baseline;
  }
</style>
