<template>
  <div class="sv-accordion" :class="[{ 'ui': true, 'accordion': true }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SvAccordion',
    componentName: 'SvAccordion',
    props: {
      value: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        activeNames: [].concat(this.value)
      };
    },
    watch: {
      value(value) {
        this.activeNames = [].concat(value);
      }
    },
    methods: {
      setActiveNames(activeNames) {
        activeNames = [].concat(activeNames);
        let value = this.accordion ? activeNames[0] : activeNames;
        this.activeNames = activeNames;
        this.$emit('input', value);
        this.$emit('change', value);
      },
      handleItemClick(item) {
        if (this.accordion) {
          this.setActiveNames(
            (this.activeNames[0] || this.activeNames[0] === 0) &&
            this.activeNames[0] === item.name
              ? '' : item.name
          );
        } else {
          let activeNames = this.activeNames.slice(0);
          let index = activeNames.indexOf(item.name);

          if (index > -1) {
            activeNames.splice(index, 1);
          } else {
            activeNames.push(item.name);
          }
          this.setActiveNames(activeNames);
        }
      }
    },
    mounted() {
      this.$on('accordion-item-click', this.handleItemClick);
    }
  }
</script>

<style lang="stylus" scoped>
  .sv-accordion.sv-accordion-item:last-child.sv-accordion-content
    padding-bottom: 0
</style>