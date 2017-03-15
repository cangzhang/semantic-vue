<template>
  <div class="ui"
       :class="[
         realSize,
         !!labeled ? labeled + ' labeled' : '',
         {
           fluid: !!fluid,
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
  //TODO: inverted labeled autofocus
  import util from '../../utils/util'

  export default {
    name: 'SvInput',
    props: {
      value: [String, Number],
      disabled: Boolean,
      placeholder: String,
      loading: Boolean,
      withIcon: String,
      iconLeft: Boolean,
      error: Boolean,
      transparent: Boolean,
      size: [String, Number],
      readonly: Boolean,
      autofocus: Boolean,
      labeled: String,
      labelText: String,
      fluid: Boolean
    },
    computed: {
      realSize() {
        return util.getSize(this.size)
      }
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
        this.$emit('change', value);
      },
    }
  }
</script>

<style lang="" scoped></style>
