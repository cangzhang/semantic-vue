<template>
  <div class="item"
       v-if="!$parent.bulleted && !$parent.ordered && !$parent.link || ($parent.horizontal && $parent.ordered)">

    <div :class="[floatedClass, {'content' : true }]" v-if="!!floated">
      <slot name="float"></slot>
    </div>

    <slot name="pre"></slot>
    <a class="content" v-if="asLink">
      <slot></slot>
    </a>
    <div v-else
         :class="alignedClass"
         class="content">
      <slot></slot>
    </div>
  </div>

  <a :class="[{ 'active': !!active }]" class="item"
     v-else-if="$parent.ordered || $parent.bulleted && $parent.horizontal || $parent.link">
    <slot></slot>
  </a>

  <!--for bulleted-->
  <div class="item" v-else>
    <slot></slot>
  </div>
</template>

<script>
  //TODO: get rid of attributes of inline list; situations

  const ALIGNDIRT = ['', 'top', 'middle', 'bottom']
  export default {
    name: 'SvListItem',
    props: {
      asLink: Boolean,
      active: Boolean,
      aligned: String,
      floated: String
    },
    computed: {
      alignedClass() {
        if (!!this.aligned) {
          let index = ALIGNDIRT.indexOf(this.aligned)
          return index >= 0 ? ALIGNDIRT[index] + ' aligned' : ''
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
