<template>
  <div class="item" v-if="!$parent.bulleted">
    <slot name="pre"></slot>
    <a class="content" v-if="asLink">
      <slot></slot>
    </a>
    <div class="content" v-else>
      <slot></slot>
    </div>
  </div>

  <a class="item" v-else-if="$parent.bulleted && $parent.horizontal">
    <slot></slot>
  </a>

  <!--for bulleted-->
  <div class="item" v-else>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SvListItem',
    props: {
      asLink: Boolean
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
