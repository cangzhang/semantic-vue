<template>
  <div>
    <span>{{ svInput }}</span>
    <div>
      <sv-input with-icon="circular search link"
                placeholder="Search"
                labeled="right"
                v-model="svInput">
      </sv-input>
    </div>
    <br>
    <div>
      <sv-input loading icon-left
                with-icon="search"
                placeholder="Loading"
                v-model="svInput">
      </sv-input>
      <sv-input disabled
                with-icon="lock"
                placeholder="Disabled"
                v-model="svInput">
      </sv-input>
      <br>
      <br>
      <sv-input error
                with-icon="lock"
                placeholder="Disabled"
                v-model="svInput">
      </sv-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    data() {
      return {
        svInput: ''
      }
    }
  }
</script>

<style lang="" scoped></style>
