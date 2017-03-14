<template>
  <div class="ui"
       :class="[
         animate ? 'animated ' + animate : 'animated ',
         { button: true }
       ]"
       @click="handleClick"
       :tabindex="tabindex">
    <div class="visible content">
      <slot></slot>
    </div>
    <div class="hidden content">
      <i v-if="!!icon" :class="icon" class="icon"></i>
      {{ hiddenText }}
    </div>
  </div>
</template>

<script>
  //TODO
  export default {
    name: 'SvAnimatedButton',
    props: {
      tabindex: Number,
      hiddenText: String,
      icon: String,
      animate: String
    },
    methods: {
      handleClick(ev) {
        this.$emit('click', ev);
      }
    }
  }
</script>

<style lang="" scoped></style>
