<template>
  <div>
    <sv-segment basic>
      <p>Cats are thought of as being related to dogs, but only humans think this.</p>
    </sv-segment>
    <sv-segment>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget,
        tempor sit amet, ante.
      </p>
    </sv-segment>
    <sv-segment theme="red">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget,
        tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
    </sv-segment>
    <sv-segment raised theme="blue">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget,
        tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
    </sv-segment>

    <sv-segment stacked theme="green">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget,
        tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
    </sv-segment>

    <sv-segment stacked="tall" theme="yellow">
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

    <sv-segment-group>
      <sv-segment>
        <p>I'm here to tell you something, and you will probably read me first.</p>
      </sv-segment>
      <sv-segment secondary>
        <p>I am pretty noticeable but you might check out other content before you look at me.</p>
      </sv-segment>
      <sv-segment tertiary>
        <p>If you notice me you must be looking very hard.</p>
      </sv-segment>
    </sv-segment-group>
    <sv-segment-group>
      <sv-segment theme="red" inverted>
        <p>I'm here to tell you something, and you will probably read me first.</p>
      </sv-segment>
      <sv-segment theme="red" inverted secondary>
        <p>I am pretty noticeable but you might check out other content before you look at me.</p>
      </sv-segment>
      <sv-segment theme="red" inverted tertiary>
        <p>If you notice me you must be looking very hard.</p>
      </sv-segment>
    </sv-segment-group>

    <sv-segment-group>
      <sv-segment>
        <p>Top</p>
      </sv-segment>
      <sv-segment-group>
        <sv-segment>
          <p>Nested Top</p>
        </sv-segment>
        <sv-segment>
          <p>Nested Middle</p>
        </sv-segment>
        <sv-segment>
          <p>Nested Bottom</p>
        </sv-segment>
      </sv-segment-group>
      <sv-segment theme="red">
        <p>Middle</p>
      </sv-segment>
      <sv-segment-group horizontal>
        <sv-segment>
          <p>Top</p>
        </sv-segment>
        <sv-segment>
          <p>Middle</p>
        </sv-segment>
        <sv-segment>
          <p>Bottom</p>
        </sv-segment>
      </sv-segment-group>
      <sv-segment theme="yellow">
        <p>Bottom</p>
      </sv-segment>
    </sv-segment-group>

    <sv-segment-group raised>
      <sv-segment>
        <p>Top</p>
      </sv-segment>
      <sv-segment>
        <p>Middle</p>
      </sv-segment>
      <sv-segment>
        <p>Bottom</p>
      </sv-segment>
    </sv-segment-group>

    <sv-segment disabled inverted>
      <p>Valar Morghulis</p>
    </sv-segment>
    <sv-segment loading>
      <div class="loading-content"><p>Loading</p></div>
    </sv-segment>

    <sv-segment-group>
      <sv-segment attached="top">
        <p>Top</p>
      </sv-segment>
      <sv-segment attached>
        <p>Middle</p>
      </sv-segment>
      <sv-segment attached="bottom">
        <p>Bottom</p>
      </sv-segment>
    </sv-segment-group>

    <h5 class="ui top attached header">
      Dogs
    </h5>
    <sv-segment attached>
      <p>Dogs are one type of animal</p>
    </sv-segment>
    <h5 class="ui attached header">
      Cats
    </h5>
    <sv-segment attached>
      <p>Cats are thought of as being related to dogs, but only humans think this.</p>
    </sv-segment>
    <h5 class="ui attached header">
      Lions
    </h5>
    <sv-segment attached>
      <p>Humans don't think of lions as being like cats, but they are.</p>
    </sv-segment>
    <div class="ui bottom attached warning message">
      <i class="warning icon"></i>
      You've reached the end of this content segment!
    </div>

    <sv-segment padded>
      <p>Humans don't think of lions as being like cats, but they are.</p>
    </sv-segment>
    <sv-segment padded="very">
      <p>Humans don't think of lions as being like cats, but they are.</p>
    </sv-segment>

    <sv-segment compact>
      <p>Valar Morghulis</p>
    </sv-segment>

    <sv-segment-group>
      <sv-segment>
        <p>Valar Morghulis</p>
      </sv-segment>
      <sv-segment>
        <p>Valar Morghulis</p>
      </sv-segment>
    </sv-segment-group>

    <sv-segment inverted theme="green">
      <p>Valar Morghulis</p>
    </sv-segment>

    <sv-segment circular class="circular-seg">
      <h2 class="ui header">
        Buy Now
        <div class="sub header">$10.99</div>
      </h2>
    </sv-segment>
    <sv-segment circular inverted class="circular-seg">
      <h2 class="ui inverted header">
        Buy Now
        <div class="sub header">$10.99</div>
      </h2>
    </sv-segment>

    <sv-segment clearing>
      <sv-button floated="right">Right Floated</sv-button>
      <sv-button floated="left">Left Floated</sv-button>
    </sv-segment>

    <sv-segment aligned="lEft">Left</sv-segment>
    <sv-segment aligned="center">Center</sv-segment>
    <sv-segment aligned="right">Right</sv-segment>

    <sv-segment floated="left">This segment will appear to the left</sv-segment>
    <sv-segment floated="right">This segment will appear to the right</sv-segment>

    <sv-row class="bottom-row"></sv-row>
  </div>
</template>

<script>
  export default {
    name: 'segment',
    computed: {},
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .bottom-row
    margin-bottom: 50px

  .circular-seg, .loading-content
    height: 150px
</style>
