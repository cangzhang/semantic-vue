<template>
  <sv-grid grid-container stackable>
    <sv-row>
      <sv-col>
        <div class="ui compact menu">
          <a class="item">
            <sv-icon with-icon="mail"></sv-icon>
            Messages
            <sv-label floating as-link theme="red">22</sv-label>
          </a>
          <a class="item">
            <sv-icon with-icon="users" disabled></sv-icon>
            Friends
            <sv-label floating as-link theme="teal">23</sv-label>
          </a>
          <a class="item">
            <sv-icon with-icon="cloud" loading></sv-icon>
            Cloud
            <sv-label floating as-link theme="black">24</sv-label>
          </a>
        </div>
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

    <sv-row column="5">
      <sv-col>
        <sv-label point-to="right" type="basic" theme="red">Please enter a value</sv-label>
      </sv-col>

      <sv-col>
        <sv-label @click="showAlert" as-link>
          <sv-icon with-icon="mail"></sv-icon>
          Mail
        </sv-label>
      </sv-col>

      <sv-col>
        <sv-label @click="showAlert('clicked on label')" as-link>
          <sv-icon with-icon="mail"></sv-icon>
          Mail
          <sv-icon with-icon="delete" @click="showAlert('clicked on icon')"></sv-icon>
        </sv-label>
      </sv-col>

      <sv-col>
        <sv-label point-to="left" type="basic">Please enter a value</sv-label>
      </sv-col>

      <sv-col>
        <sv-label tag theme="teal">New Tag</sv-label>
      </sv-col>
    </sv-row>

    <sv-row>
      <sv-col width="4">
        <div class="ui image">
          <sv-label corner="left" theme="teal">
            <sv-icon with-icon="heart"></sv-icon>
          </sv-label>
          <img class="logo" src="../assets/img/square-image.png">
        </div>
      </sv-col>

      <sv-col width="4">
        <div class="ui image">
          <img class="logo" src="../assets/img/square-image.png">
          <sv-label corner="right" theme="red">
            <sv-icon with-icon="save"></sv-icon>
          </sv-label>
        </div>
      </sv-col>

      <sv-col width="4">
        <div class="ui image">
          <img class="logo" src="../assets/img/square-image.png">
          <sv-label ribbon theme="blue">
            <sv-icon with-icon="food" theme="white"></sv-icon>
          </sv-label>
        </div>
      </sv-col>

      <sv-col width="3">
        <sv-label attached="top right">ATTACHED</sv-label>
        <div class="ui image">
          <img class="logo" src="../assets/img/square-image.png">
        </div>
      </sv-col>
    </sv-row>
  </sv-grid>
</template>

<script>
  export default {
    name: 'label',
    methods: {
      showAlert(context) {
        if (typeof context === 'string') {
          alert(context)
          return true
        }
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
