<template>
  <div class="modal">
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
    props  : ['display'],
    methods: {
      showModal() {
        $(this.$el).find('.s-modal').modal('show')
      },
      close() {
        console.log('modeStatus before', this.modeStatus)
//        this.modeStatus = !this.modeStatus
//        console.log('modeStatus after', this.modeStatus)
      }
    },
    computed: {
      modeStatus() {
        return this.display
      }
    },
    watch  : {
      display (val) {
        if (val) {
          console.log('in', val)
          this.showModal()
        }
      }
    }
  }
</script>

<style></style>
