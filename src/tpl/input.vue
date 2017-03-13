<template>
  <div>
    <span>{{ svInput }}</span>
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
      <sv-input error fluid
                with-icon="unlock"
                placeholder="Error"
                v-model="svInput">
      </sv-input>
      <br>
      <div>
        <sv-input fluid size="large"
                  with-icon="inverted circular search link icon"
                  placeholder="Search"
                  labeled="right"
                  v-model="svInput">
        </sv-input>
      </div>
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
