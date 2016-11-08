<template>
  <div class="login-modal">
    <div class="ui modal s-modal">
      <i class="close icon"></i>
      <div class="header">
        Profile
      </div>
      <div class="actions">
        <div class="ui black deny button" @click="close()">
          No
        </div>
        <div class="ui positive right labeled icon button" @click="close()">
          Yes
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name   : 's-modal',
    props  : ['display'],
    methods: {
      showModal() {
        $('.s-modal').modal('show')
      },
      close() {
        this.modeStatus = false
      }
    },
    watch  : {
      display (newVal) {
        this.showModal()
      }
    }
  }
</script>

<style></style>
