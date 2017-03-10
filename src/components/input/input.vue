<template>
  <div class="ui"
       :class="[
         !!size ? size : '',
         !!labeled ? labeled + ' labeled' : '',
         {
           transparent: !!transparent,
           left: !!iconLeft,
           icon: !!withIcon,
           disabled: !!disabled,
           input: true,
           loading: !!loading,
           error: !!error
         }]">
    <input type="text"
           :placeholder="placeholder"
           :value="currentVal"
           :autofocus="!!autofocus"
           @input="handleInput">
    <i :class="withIcon" class="icon"></i>
    <slot v-if="!!labeled"></slot>
  </div>
</template>

<script>
  //TODO: inverted fluid labeled autofocus
  export default {
    name: 'svInput',
    props: {
      value: [String, Number],
      disabled: Boolean,
      placeholder: String,
      loading: Boolean,
      withIcon: String,
      iconLeft: Boolean,
      error: Boolean,
      transparent: Boolean,
      size: String,
      readonly: Boolean,
      autofocus: Boolean,
      labeled: String,
      labelText: String
    },
    data() {
      return {
        currentVal: this.value
      }
    },
    watch: {
      'value'(newVal) {
        this.setCurrentValue(newVal);
      }
    },
    methods: {
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
      },
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
//        this.$emit('change', value);
      },
    }
  }
</script>

<style lang="" scoped></style>
