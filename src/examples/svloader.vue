<template>
  <sv-grid>
    <sv-row column="2">
      <sv-col width="8">
        <div class="ui segment">
          <br>
          <br>
          <div class="ui active dimmer">
            <sv-loader></sv-loader>
          </div>
        </div>
      </sv-col>
      <sv-col width="8">
        <div class="ui segment">
          <br>
          <br>
          <div class="ui active dimmer">
            <sv-loader with-text="Loading"></sv-loader>
          </div>
        </div>
      </sv-col>
    </sv-row>

    <sv-row column="2">
      <sv-col>
        <div class="ui segment">
          <div class="ui active inverted dimmer">
            <sv-loader with-text="Loading..."></sv-loader>
          </div>
          <br>
          <br>
        </div>
      </sv-col>

      <sv-col>
        <div class="ui segment">
          <div class="ui active inverted dimmer">
            <sv-loader indeterminate with-text="Loading..."></sv-loader>
          </div>
          <br>
          <br>
        </div>
      </sv-col>
    </sv-row>

    <sv-row column="2">
      <sv-col>
        <div class="ui inverted segment">
          <sv-loader disabled with-text="Loading..."></sv-loader>
          <br>
          <br>
        </div>
      </sv-col>

      <sv-col>
        <sv-loader active inline="center"></sv-loader>
      </sv-col>
    </sv-row>

    <sv-row column="1">
      <sv-col>
        <div class="ui segment">
          <div class="ui active dimmer">
            <sv-loader size="large" with-text="Loading..."></sv-loader>
          </div>
          <br>
          <br>
          <br>
          <br>
          <br>
        </div>
      </sv-col>
    </sv-row>
  </sv-grid>
</template>

<script>
  export default {
    name: 'loader'
  }
</script>

<style lang="" scoped></style>
