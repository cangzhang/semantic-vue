<template>
  <div :class="[{ui: true}, sizeClass, {breadcrumb: true}]" class="sv-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
  import {getSize} from '../../utils/util'
  export default {
    name: 'SvBreadcrumb',
    componentName: 'SvBreadcrumb',
    props: {
      separator: {
        type: String,
        default: '/'
      },
      size: String,
    },
    computed: {
      sizeClass() {
        return getSize(this.size)
      }
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
