<template>
  <div v-else :class="[{
        completed: !!completed,
        active: !!active,
        disabled: !!disabled,
        link: !!link,
        'step': true
      }]">
    <sv-icon with-icon="withIcon" v-if="!!withIcon"></sv-icon>
    <div class="content" v-if="$slots.content || $slots.title || $slots.desc">
      <slot name="content">
        <div class="title" v-if="$slots.title">
          <slot name="title"></slot>
        </div>
        <div class="description" v-if="$slots.desc">
          <slot name="desc"></slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SvStep',
    componentName: 'SvStep',
    props: {
      withIcon: String,
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
