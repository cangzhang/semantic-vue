<template>
  <sv-grid grid-container stackable>
    <sv-row column="4">
      <sv-col>
        <div class="ui image">
          <sv-label corner="left" with-icon="heart" theme="teal"></sv-label>
          <img class="logo" src="../assets/logo.png">
        </div>
      </sv-col>

      <sv-col>
        <div class="ui image">
          <img class="logo" src="../assets/logo.png">
          <sv-label corner="right" with-icon="save" theme="red"></sv-label>
        </div>
      </sv-col>

      <sv-col>
        <div class="ui image">
          <img class="logo" src="../assets/logo.png">
          <sv-label ribbon with-icon="food" theme="blue"></sv-label>
        </div>
      </sv-col>
      <sv-col>
        <sv-label attached="top right">ATTACHED</sv-label>
        <div class="ui image">
          <img class="logo" src="../assets/logo.png">
        </div>
      </sv-col>
    </sv-row>

    <sv-row column="4">
      <sv-col>
        <sv-label point-to="right" type="basic" theme="red">Please enter a value</sv-label>
      </sv-col>
      <sv-col>
        <sv-label with-icon="mail" @click="showAlert">
          <sv-icon class="mail"></sv-icon>
          Mail
        </sv-label>
      </sv-col>
      <sv-col>
        <sv-label point-to="left">Please enter a value</sv-label>
      </sv-col>
      <sv-col>
        <sv-label tag theme="teal">New Tag</sv-label>
      </sv-col>
    </sv-row>
    <sv-row>
      <sv-col>
        <sv-label horizontal theme="blue">Fruit</sv-label>
        Kumquats

        <sv-label horizontal theme="red">Candy</sv-label>
        Ice Cream

      </sv-col>
    </sv-row>
  </sv-grid>
</template>

<script>
  export default {
    name: 'label',
    methods: {
      showAlert() {
        alert('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  img.logo {
    height: 150px;
  }
</style>
