<template>
  <div class="modal">
    <div class="ui modal s-modal">
      <i class="close icon"></i>
      <div class="header">
        Profile
      </div>
      <div class="actions">
        <div class="ui black deny button" @click="notify()">
          No
        </div>
        <div class="ui positive right labeled icon button" @click="notify()">
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
    mounted () {
      $(this.$el).find('.s-modal').modal()
    },
    methods: {
      showModal: function () {
        $(this.$el).find('.s-modal').modal('show')
      },
      notify() {
        this.$dispatch('status-changed', this.show)
      }
    },
    watch  : {
      display: (val) => {
        if (val) {
          console.log('in', val)
          $('.s-modal').modal('show')
        }
      }
    }
  }
</script>

<style></style>
