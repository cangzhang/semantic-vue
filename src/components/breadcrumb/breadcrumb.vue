<template>
  <div class="ui breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name         : 'SvBreadcrumb',
    componentName: 'SvBreadcrumb',
    props        : {
      separator: {
        type   : String,
        default: '/'
      }
    }
  }
</script>

<style lang=""></style>
