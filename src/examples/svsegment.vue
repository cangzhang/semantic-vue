<template>
  <div>
    <sv-segment>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget,
        tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
    </sv-segment>
    <sv-segment raised>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget,
        tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
    </sv-segment>

    <sv-segment stacked>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget,
        tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
    </sv-segment>

    <sv-segment stacked="tall">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget,
        tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
    </sv-segment>

    <sv-segment piled>
      <h4 class="ui header">A header</h4>
      <p>Te eum doming eirmod,
      nominati pertinacia argumentum ad his.
      Ex eam alia facete scriptorem, est autem aliquip detraxit at.
      Usu ocurreret referrentur at, cu epicurei appellantur vix.
      Cum ea laoreet recteque electram, eos choro alterum definiebas in.
      Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    </sv-segment>

    <sv-segment vertical>
      <p>Valar Morghulis</p>
    </sv-segment>
    <sv-segment vertical>
      <p>Valar Morghulis</p>
    </sv-segment>
    <sv-segment vertical>
      <p>Valar Morghulis</p>
    </sv-segment>

    <sv-segment-group>
      <sv-segment>
        <p>Valar Morghulis</p>
      </sv-segment>
      <sv-segment>
        <p>Valar Morghulis</p>
      </sv-segment>
      <sv-segment>
        <p>Valar Morghulis</p>
      </sv-segment>
    </sv-segment-group>

    <sv-row class="bottom-row"></sv-row>
  </div>
</template>

<script>
  //TODO: segment group variations
  export default {
    name: 'segment',
    computed: {},
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .bottom-row
    margin-bottom: 50px
</style>
