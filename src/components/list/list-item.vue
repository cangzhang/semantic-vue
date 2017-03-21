<template>
  <div class="item" v-if="!$parent.bulleted && !$parent.ordered && !$parent.link">
    <slot name="pre"></slot>
    <a class="content" v-if="asLink">
      <slot></slot>
    </a>
    <div class="content" v-else>
      <slot></slot>
    </div>
  </div>

  <a :class="[{ 'active': !!active }]" class="item" v-else-if="$parent.ordered || $parent.bulleted && $parent.horizontal || $parent.link">
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
      asLink: Boolean,
      active: Boolean
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
