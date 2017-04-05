<template>
  <sv-grid grid-container>
    <sv-row column="5">
      <sv-col>
        <sv-reveal fade>
          <img slot="visible" src="../assets/img/square-image.png" class="ui small image">
          <img src="../assets/img/ade.jpg" class="ui small image">
        </sv-reveal>
      </sv-col>

      <sv-col>
        <sv-reveal fade size="small" image>
          <img slot="visible" src="../assets/img/square-image.png" class="ui image">
          <img src="../assets/img/ade.jpg" class="ui image">
        </sv-reveal>
      </sv-col>
      <sv-col>
        <sv-reveal move>
          <img slot="visible" src="../assets/img/square-image.png" class="ui small image">
          <img src="../assets/img/chris.jpg" class="ui small image">
        </sv-reveal>
      </sv-col>

      <sv-col>
        <sv-reveal move="right">
          <img slot="visible" src="../assets/img/square-image.png" class="ui small image">
          <img src="../assets/img/chris.jpg" class="ui small image">
        </sv-reveal>
      </sv-col>
    </sv-row>
    <sv-row column="6">
      <sv-col>
        <sv-reveal rotate circular image size="small">
          <img slot="visible" src="../assets/img/square-image.png">
          <img src="../assets/img/chris.jpg">
        </sv-reveal>
      </sv-col>

      <sv-col>
        <sv-reveal rotate="left" circular image size="small">
          <img slot="visible" src="../assets/img/square-image.png">
          <img src="../assets/img/chris.jpg">
        </sv-reveal>
      </sv-col>

      <sv-col>
        <sv-reveal rotate="left" circular image active size="small">
          <img slot="visible" src="../assets/img/square-image.png">
          <img src="../assets/img/chris.jpg">
        </sv-reveal>
      </sv-col>

      <sv-col>
        <sv-reveal rotate="left" circular image instant size="small">
          <img slot="visible" src="../assets/img/square-image.png">
          <img src="../assets/img/chris.jpg">
        </sv-reveal>
      </sv-col>
    </sv-row>

    <sv-row>
      <sv-reveal move disabled>
        <img slot="visible" src="../assets/img/square-image.png" class="ui small image">
        <img src="../assets/img/chris.jpg" class="ui small image">
      </sv-reveal>

      <sv-reveal rotate="left" instant disabled class="disabled-reveal">
        <img src="../assets/img/square-image.png" class="ui small image">
        <img slot="visible" src="../assets/img/chris.jpg" class="ui small image">
      </sv-reveal>
    </sv-row>
  </sv-grid>
</template>

<script>
  export default {
    name: 'reveal',
    computed: {},
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .disabled-reveal
    margin-left: 20px
</style>
