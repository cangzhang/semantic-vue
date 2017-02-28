<template>
  <div v-if="right" class="ui right labeled button"
       @click="handleClick"
       :tabindex="tabindex">
    <div class="ui" :class="[theme, {button : 'button'}]">
      <i :class="icon" class="icon"></i>
      {{ labelText }}
    </div>
    <a class="ui"
       :class="[
         type,
         pointingTo,
         {
           label: 'label'
         }
       ]">
      <slot></slot>
    </a>
  </div>
  <div v-else class="ui left labeled button"
       :tabindex="tabindex"
       @click="handleClick">
    <a class="ui"
       :class="[
         type,
         pointingTo,
         {
           label: 'label'
         }
       ]">
      <slot></slot>
    </a>
    <div class="ui button">
      <i :class="icon" class="icon"></i>
      {{ labelText }}
    </div>
  </div>
</template>

<script>
  export default {
    name    : 'sv-labeled-button',
    props   : {
      tabindex : {
        type   : Number,
        default: 0
      },
      theme    : String,
      icon     : String,
      right    : Boolean,
      type     : String,
      labelText: String,
      pointing : String
    },
    computed: {
      pointingTo: function () {
        const direction = ['left', 'right']
        if (direction.indexOf(this.pointing) >= 0) {
          return this.pointing + ' pointing'
        }
        return ''
      }
    },
    methods : {
      handleClick(ev) {
        this.$emit('click', ev);
      }
    }
  }
</script>

<style scoped></style>
