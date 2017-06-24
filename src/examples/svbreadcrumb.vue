<template>
  <div>
    <sv-breadcrumb :as-link="pLink">
      <sv-breadcrumb-item section="Home" divider-icon="right chevron">
      </sv-breadcrumb-item>
      <sv-breadcrumb-item section="Store" divider-icon="right arrow">
      </sv-breadcrumb-item>
      <sv-breadcrumb-item section="Clothes" :as-link="link">
      </sv-breadcrumb-item>
      <sv-breadcrumb-item section="T-shirt" active="true">
      </sv-breadcrumb-item>
    </sv-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    props: {},
    data() {
      return {
        link: false,
        pLink: true
      }
    }
  }
</script>

<style lang=""></style>
