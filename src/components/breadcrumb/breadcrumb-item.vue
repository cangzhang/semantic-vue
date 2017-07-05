<template>
  <div class="sv-breadcrumb-item">
    <a v-if="asLink" :class="sectionClass" class="sv-breadcrumb-section">{{ section }}</a>
    <div v-else :class="sectionClass">{{ section }}</div>
    
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
      dividerIcon: String,
      active: [Boolean, String],
      asLink: Boolean,
    },
    computed: {
      dividerIconClass() {
        if (typeof this.dividerIcon === 'undefined')
          return
        return this.dividerIcon + ' icon'
      },
      sectionClass() {
        return {
          'active': !!this.active,
          'section': true
        }
      },
    },
    methods: {},
    mounted() {
      console.log(this.asLink)
    }
  }
</script>

<style lang="scss" scoped>
  .sv-breadcrumb-item {
    display: flex;
    align-items: baseline;
  }
</style>
