<template>
  <sv-grid stackable grid-container column="3">
    <sv-row>
      <sv-col>
        <sv-label point-to="right" type="basic" theme="red">Please enter a value</sv-label>
      </sv-col>
      <sv-col>
        <sv-label with-icon="mail" detail-text="Mail"></sv-label>
      </sv-col>
      <sv-col>
        <sv-label point-to="left">Please enter a value</sv-label>
      </sv-col>
    </sv-row>


    <sv-row>
      <sv-col>
        <div class="ui fluid image">
          <sv-label corner="left" with-icon="heart" theme="red"></sv-label>
          <img class="logo" src="../assets/logo.png">
          <sv-label corner="right" with-icon="save" theme="blue"></sv-label>
        </div>
      </sv-col>
      <sv-col>
        <sv-label tag theme="teal"></sv-label>
      </sv-col>
    </sv-row>
  </sv-grid>
</template>

<script>
  export default {
    name: 'label'
  }
</script>

<style lang="" scoped></style>
