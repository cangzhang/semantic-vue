<template>
<div class="sv-toast" :class="{'show': show}">
  <transition name="toast-fade">
    <div class="ui inline cookie nag" :class="{'isVisible': show}" v-if="show">
      <span class="title">
    {{ content }}
  </span>
      <i class="close icon"></i>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'sv-taost',
  props: ['message', 'showToast'],
  computed: {
    content() {
      return this.message
    },
    show() {
      return this.showToast
    }
  }
}
</script>

<style lang="css">
.isVisible {
  z-index: 100;
  display: block !important
}
.show {
  position: absolute;
  top: 10px !important
}
</style>
