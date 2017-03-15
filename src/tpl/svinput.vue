<template>
  <sv-grid stackable column="2">
    <sv-col width="16">
      <span>{{ svInput }}</span>
    </sv-col>
    <sv-col width="16">
      <sv-input loading icon-left
                with-icon="search"
                placeholder="Loading"
                v-model="svInput">
      </sv-input>
    </sv-col>
    <sv-col width="16">
      <sv-input fluid icon-left
                size="4"
                with-icon="search"
                placeholder="Search"
                v-model="svInput">
      </sv-input>
    </sv-col>
    <sv-col>
      <sv-input disabled
                with-icon="lock"
                placeholder="Disabled"
                v-model="svInput">
      </sv-input>
    </sv-col>
    <sv-col>
      <sv-input error fluid
                with-icon="unlock"
                placeholder="Error"
                v-model="svInput">
      </sv-input>
    </sv-col>

    <sv-col>
      <sv-input fluid
                with-icon="inverted circular search link icon"
                placeholder="Search"
                labeled="right"
                v-model="svInput">
      </sv-input>
    </sv-col>
  </sv-grid>

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
