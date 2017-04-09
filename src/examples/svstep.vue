<template>
  <div>
    <sv-row>
      <sv-step-group size="mini">
        <sv-step>Shipping</sv-step>
      </sv-step-group>
      <sv-step-group size="large">
        <sv-step>Shipping</sv-step>
      </sv-step-group>
    </sv-row>

    <sv-step-group>
      <sv-step>
        <sv-icon slot="icon" with-icon="truck"></sv-icon>
        <span slot="title">Shipping</span>
        <span slot="desc">Choose your shipping options</span>
      </sv-step>
      <sv-step>
        <sv-icon slot="icon" with-icon="payment"></sv-icon>
        <span slot="title">Billing</span>
        <span slot="desc">Enter billing information</span>
      </sv-step>
      <sv-step disabled>
        <sv-icon slot="icon" with-icon="info"></sv-icon>
        <span slot="title">Confirm Order</span>
      </sv-step>
    </sv-step-group>

    <sv-step-group ordered>
      <sv-step completed>
        <span slot="title">Shipping</span>
        <span slot="desc">Choose your shipping options</span>
      </sv-step>
      <sv-step completed>
        <span slot="title">Billing</span>
        <span slot="desc">Enter billing information</span>
      </sv-step>
      <sv-step active>
        <span slot="title">Confirm Order</span>
      </sv-step>
    </sv-step-group>

    <sv-step-group>
      <sv-step link active>
        <sv-icon slot="icon" with-icon="truck"></sv-icon>
        <span slot="title">Shipping</span>
        <span slot="desc">Choose your shipping options</span>
      </sv-step>
      <sv-step link>
        <sv-icon slot="icon" with-icon="payment"></sv-icon>
        <span slot="title">Billing</span>
        <span slot="desc">Enter billing information</span>
      </sv-step>
    </sv-step-group>

    <sv-row>
      <sv-step-group stackable>
        <sv-step>
          <sv-icon slot="icon" with-icon="plane"></sv-icon>
          <span slot="title">Shipping</span>
          <span slot="desc">Choose your shipping options</span>
        </sv-step>
        <sv-step>
          <sv-icon slot="icon" with-icon="dollar"></sv-icon>
          <span slot="title">Billing</span>
          <span slot="desc">Enter billing information</span>
        </sv-step>
        <sv-step disabled>
          <sv-icon slot="icon" with-icon="info"></sv-icon>
          <span slot="title">Confirm Order</span>
        </sv-step>
      </sv-step-group>
    </sv-row>

    <sv-container class="bordered-steps">
      <sv-step-group number="3" attached="top">
        <sv-step>
          <sv-icon slot="icon" with-icon="truck"></sv-icon>
          <span slot="title">Shipping</span>
          <span slot="desc">Choose your shipping options</span>
        </sv-step>
        <sv-step active>
          <sv-icon slot="icon" with-icon="payment"></sv-icon>
          <span slot="title">Billing</span>
          <span slot="desc">Enter billing information</span>
        </sv-step>
        <sv-step disabled>
          <sv-icon slot="icon" with-icon="info"></sv-icon>
          <span slot="title">Confirm Order</span>
        </sv-step>
      </sv-step-group>
      <sv-segment attached inverted>
        This is the content.
      </sv-segment>
      <sv-step-group number="3" attached="bottom">
        <sv-step>
          <sv-icon slot="icon" with-icon="truck"></sv-icon>
          <span slot="title">Shipping</span>
          <span slot="desc">Choose your shipping options</span>
        </sv-step>
        <sv-step active>
          <sv-icon slot="icon" with-icon="payment"></sv-icon>
          <span slot="title">Billing</span>
          <span slot="desc">Enter billing information</span>
        </sv-step>
        <sv-step disabled>
          <sv-icon slot="icon" with-icon="info"></sv-icon>
          <span slot="title">Confirm Order</span>
        </sv-step>
      </sv-step-group>
    </sv-container>

    <sv-grid column="2" class="bordered-steps">
      <sv-col>
        <sv-step-group vertical>
          <sv-step completed>
            <sv-icon slot="icon" with-icon="truck"></sv-icon>
            <span slot="title">Shipping</span>
            <span slot="desc">Choose your shipping options</span>
          </sv-step>
          <sv-step completed>
            <sv-icon slot="icon" with-icon="payment"></sv-icon>
            <span slot="title">Billing</span>
            <span slot="desc">Enter billing information</span>
          </sv-step>
          <sv-step active>
            <sv-icon slot="icon" with-icon="info"></sv-icon>
            <span slot="title">Confirm Order</span>
            <span slot="desc">Verify order details</span>
          </sv-step>
        </sv-step-group>
      </sv-col>

      <sv-col>
        <sv-step-group fluid vertical>
          <sv-step completed>
            <sv-icon slot="icon" with-icon="plane"></sv-icon>
            <span slot="title">Shipping</span>
            <span slot="desc">Choose your shipping options</span>
          </sv-step>
          <sv-step>
            <sv-icon slot="icon" with-icon="dollar"></sv-icon>
            <span slot="title">Billing</span>
            <span slot="desc">Enter billing information</span>
          </sv-step>
        </sv-step-group>
      </sv-col>
    </sv-grid>
  </div>
</template>

<script>
  export default {
    name: 'step',
    computed: {},
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .bordered-steps
    margin: 10px 0
    border: 1px solid #ccc
</style>
