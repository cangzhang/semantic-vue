<template>
<div class="login-modal">
  <div class="ui modal s-modal" v-if="show" :class="{'isVisible': show}">
    <i class="close icon"></i>
    <div class="header">
      Profile
    </div>
    <div class="actions">
      <div class="ui black deny button" @click="cancel()">
        No
      </div>
      <div class="ui positive right labeled icon button" @click="confirm()">
        Yes
        <i class="checkmark icon"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'sModal',
  props: ['display'],
  data() {
    return {
      show: false,
      resolve: '',
      reject: '',
      promise: ''
    }
  },
  methods: {
    cancel() {
      this.show = false
    },
    confirm() {
      this.show = false
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      return this.promise;
    }
  },
  created() {
    console.log('init show', this.show)
  },
  watch: {
    display(newVal) {
      this.show = newVal
    },
    show(newVal, oldVal) {
      console.log('show before ', oldVal)
      console.log('show after ', newVal)
    }
  }
}
</script>

<style scoped>
.isVisible {
  display: block;
}
</style>
