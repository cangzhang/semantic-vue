<template>
  <div>
    <sv-breadcrumb>
      <sv-breadcrumb-item section="Home" divider-icon="right chevron">
      </sv-breadcrumb-item>
      <sv-breadcrumb-item section="Store" divider-icon="right arrow">
      </sv-breadcrumb-item>
      <sv-breadcrumb-item section="Clothes" :as-link="cLink">
      </sv-breadcrumb-item>
      <sv-breadcrumb-item section="T-shirt" :active="active">
      </sv-breadcrumb-item>
    </sv-breadcrumb>
    <sv-divider></sv-divider>
    <sv-breadcrumb size="huge">
      <sv-breadcrumb-item section="Home" divider-icon="right chevron">
      </sv-breadcrumb-item>
      <sv-breadcrumb-item section="Store" divider-icon="right arrow">
      </sv-breadcrumb-item>
      <sv-breadcrumb-item section="Clothes" :as-link="cLink">
      </sv-breadcrumb-item>
      <sv-breadcrumb-item section="T-shirt" :active="active">
      </sv-breadcrumb-item>
    </sv-breadcrumb>
    
    <sv-divider></sv-divider>
    
    <sv-checkbox :label="'aaa'"></sv-checkbox>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    props: {},
    data() {
      return {
        cLink: true,
        active: true,
      }
    }
  }
</script>

<style lang=""></style>
