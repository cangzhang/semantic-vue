<template>
  <div>
    <sv-grid grid-container>

      <sv-row>
        <sv-col>
          <sv-list horizontal>
            <sv-list-item>
              <sv-icon with-icon="users" slot="pre"></sv-icon>
              <span>Semantic UI</span>
            </sv-list-item>
            <sv-list-item>
              <sv-icon with-icon="marker"></sv-icon>
              <span>New York, NY</span>
            </sv-list-item>
            <sv-list-item>
              <sv-icon with-icon="mail"></sv-icon>
              <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
            </sv-list-item>
            <sv-list-item>
              <sv-icon with-icon="linkify"></sv-icon>
              <a href="http://www.semantic-ui.com">semantic-ui.com</a>
            </sv-list-item>
          </sv-list>
        </sv-col>
      </sv-row>

      <sv-row column="2">
        <sv-col>
          <sv-list bulleted class="inline-list">
            <sv-list-item>Gaining Access</sv-list-item>
            <sv-list-item>Inviting Friends</sv-list-item>
            <sv-list-item>
              Benefits
              <sv-list bulleted inline>
              <sv-list-item>
                <a class="item" href="#">Link to somewhere</a>
              </sv-list-item>
              <sv-list-item>Rebates</sv-list-item>
              <sv-list-item>Discounts</sv-list-item>
            </sv-list>
            </sv-list-item>
            <sv-list-item>Warranty</sv-list-item>
          </sv-list>
        </sv-col>
        <sv-col>
          <sv-list relaxed divided>
            <sv-list-item>
              <sv-icon with-icon="github" size="large" class="middle aligned" slot="pre"></sv-icon>
              <a class="header">Semantic-Org/Semantic-UI</a>
              <div class="description">Updated 10 mins ago</div>
            </sv-list-item>
            <sv-list-item>
              <sv-icon with-icon="github" size="large" class="middle aligned" slot="pre"></sv-icon>
              <a class="header">Semantic-Org/Semantic-UI-Docs</a>
              <div class="description">Updated 22 mins ago</div>
            </sv-list-item>
            <sv-list-item>
              <sv-icon with-icon="github" size="large" class="middle aligned" slot="pre"></sv-icon>
              <a class="header">Semantic-Org/Semantic-UI-Meteor</a>
              <div class="description">Updated 34 mins ago</div>
            </sv-list-item>
          </sv-list>
        </sv-col>
      </sv-row>

      <sv-row>
        <sv-col>
          <sv-list horizontal bulleted>
            <sv-list-item>About Us</sv-list-item>
            <sv-list-item>Sitemap</sv-list-item>
            <sv-list-item>Contact</sv-list-item>
          </sv-list>
        </sv-col>
      </sv-row>

    </sv-grid>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: {},
    computed: {},
    methods: {}
  }
</script>

<style lang="stylus">
  .inline-list
    text-align: left
</style>
