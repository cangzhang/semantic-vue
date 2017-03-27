<template>
  <a :class="[{ 'active': !!active, 'item': true }]"
     v-if="$parent.asLink || $parent.link">
    <slot></slot>
  </a>

  <div class="item" v-else-if="bare">
    <slot></slot>
  </div>

  <div class="item" v-else>
    <!--float-->
    <div :class="[floatedClass, {'content' : true }]" v-if="!!floated">
      <slot name="float"></slot>
    </div>

    <!--for icon/img-->
    <slot name="pre"></slot>

    <!--as <a> element-->
    <a class="content" v-if="asLink">
      <slot></slot>
    </a>

    <!--with complete structure-->
    <div v-else :class="[alignedClass, { 'content': true }]">
      <slot></slot>
      <div class="description" v-if="$slots.desc">
        <slot name="desc"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  const ALIGN_DIRECTIONS = ['', 'top', 'middle', 'bottom']
  export default {
    name: 'SvListItem',
    componentName: 'SvListItem',
    props: {
      bare: Boolean,
      asLink: Boolean,
      active: Boolean,
      aligned: String,
      floated: String
    },
    computed: {
      alignedClass() {
        if (!!this.aligned) {
          let index = ALIGN_DIRECTIONS.indexOf(this.aligned)
          if (index === 0) return 'middle aligned'
          return index >= 0 ? ALIGN_DIRECTIONS[index] + ' aligned' : ''
        }
      },
      floatedClass() {
        if (this.floated) {
          return this.floated + ' floated'
        }
      }
    },
    methods: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
