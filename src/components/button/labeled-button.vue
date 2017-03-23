<template>
  <div v-if="!!right" :class="realSize" class="ui right labeled button"
       @click="handleClick"
       :tabindex="tabindex">
    <div class="ui" :class="[type, theme, { button : true }]">
      <i :class="icon" class="icon"></i>
      {{ labelText }}
    </div>
    <a class="ui"
       :class="[
         type,
         pointingTo,
         { label: true },
         theme]">
      <slot></slot>
    </a>
  </div>
  <div v-else :class="realSize" class="ui left labeled button"
       :tabindex="tabindex"
       @click="handleClick">
    <a class="ui"
       :class="[
         type,
         pointingTo,
         { label: true },
         theme]">
      <slot></slot>
    </a>
    <div class="ui" :class="[theme, { button : true }]">
      <i :class="icon" class="icon"></i>
      {{ labelText }}
    </div>
  </div>
</template>

<script>
  import util from '../../utils/util'

  export default {
    name: 'SvLabeledButton',
    componentName: 'SvLabeledButton',
    props: {
      tabindex: Number,
      theme: String,
      icon: String,
      right: Boolean,
      type: String,
      labelText: String,
      pointing: String
    },
    computed: {
      pointingTo: function () {
        const direction = ['left', 'right']
        if (direction.indexOf(this.pointing) >= 0) {
          return this.pointing + ' pointing'
        }
        return ''
      },
      realSize() {
        return util.getSize(this.size)
      }
    },
    methods: {
      handleClick(ev) {
        this.$emit('click', ev)
      }
    }
  }
</script>

<style scoped></style>
