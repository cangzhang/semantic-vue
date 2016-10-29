<template>
  <div class="modal">
    <div class="ui modal s-modal">
      <i class="close icon"></i>
      <div class="header">
        Profile Picture
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Nope
        </div>
        <div class="ui positive right labeled icon button">
          Yes
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['display'],
    data() {
      return {
        show: this.display
      }
    },
    mounted() {
      console.log('mounted ' + this.show)
      $(this.$el).find('.s-modal').modal()
    },
    methods: {
      toggleModal(show) {
        if (show) {
          $(this.$el).find('.s-modal').modal('show')
        } else {
          $(this.$el).find('.s-modal').modal('hide')
        }
      }
    },
    watch: {
      show: (val) => {
        console.log('watch ' + val)
        this.toggleModal(val)
      }
    }
  }
</script>

<style></style>
