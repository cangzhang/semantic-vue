<template>
  <div class="ui breadcrumb sv-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SvBreadcrumb',
    componentName: 'SvBreadcrumb',
    props: {
      separator: {
        type: String,
        default: '/'
      },
      asLink: [Boolean, String],
    }
  }
</script>

<style lang="scss">
  .sv-breadcrumb {
    display: flex !important;
    flex-direction: row;
    .sv-breadcrumb-item:last-child {
      .sv-breadcrumb-divider {
        display: none;
      }
    }
  }
</style>
