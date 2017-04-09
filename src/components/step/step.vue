<template>
  <div v-else :class="[
    {
      completed: !!completed,
      active: !!active,
      disabled: !!disabled,
      link: !!link,
      'step': true
    }]">

    <slot name="icon"></slot>

    <slot v-if="!$slots.title && !$slots.desc"></slot>

    <div name="content">
      <div class="title" v-if="$slots.title">
          <slot name="title"></slot>
        </div>
      <div class="description" v-if="$slots.desc">
          <slot name="desc"></slot>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SvStep',
    componentName: 'SvStep',
    props: {
      completed: Boolean,
      active: Boolean,
      link: Boolean,
      disabled: Boolean,
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="" scoped></style>
