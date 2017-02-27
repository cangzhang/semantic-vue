<template>
  <div v-if="right" class="ui right labeled button"
       @click="handleClick"
       :tabindex="tabindex">
    <div class="ui button">
      <i :class="icon" class="icon"></i>
      {{ labelText }}
    </div>
    <a class="ui"
       :class="[
         type,
         pointingTo,
         {
           pointing: pointingTo,
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
      icon     : String,
      right    : Boolean,
      type     : String,
      labelText: String,
      pointing : String
    },
    computed: {
      pointingTo: function () {
        console.log(this.pointing)
        const v = ['', 'below'], h = ['left', 'right']
        if (v.indexOf(this.pointing) >= 0) {
          return 'pointing ' + this.pointing
        } else if (h.indexOf(this.pointing) >= 0) {
          return this.pointing + ' pointing'
        } else {
          return ''
        }
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
