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

      <sv-row>
        <sv-col>
          <sv-list horizontal bulleted>
            <sv-list-item>About Us</sv-list-item>
            <sv-list-item>Sitemap</sv-list-item>
            <sv-list-item>Contact</sv-list-item>
          </sv-list>
        </sv-col>
      </sv-row>

      <sv-row>
        <sv-list relaxed horizontal>
          <sv-list-item>
            <img class="ui avatar image" src="../assets/img/helen.jpg" slot="pre">
            <a class="header">Daniel Louise</a>
          </sv-list-item>
          <sv-list-item>
            <img class="ui avatar image" src="../assets/img/christian.jpg" slot="pre">
            <a class="header">Stevie Feliciano</a>
          </sv-list-item>
          <sv-list-item>
            <img class="ui avatar image" src="../assets/img/daniel.jpg" slot="pre">
            <a class="header">Elliot Fu</a>
          </sv-list-item>
        </sv-list>
      </sv-row>

      <sv-row column="2">
        <sv-col>
          <sv-list bulleted class="left-aligned-list">
            <sv-list-item>Gaining Access</sv-list-item>
            <sv-list-item>Inviting Friends</sv-list-item>
            <sv-list-item>
              Benefits
              <sv-list bulleted inline>
                <sv-list-item>
                  <a class="item" href="#">Link to somewhere</a>
                </sv-list-item>
                <sv-list-item>
                  Rebates
                  <sv-list bulleted inline>
                    <sv-list-item>Rebates</sv-list-item>
                    <sv-list-item>Discounts</sv-list-item>
                </sv-list>
                </sv-list-item>
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
        <sv-col width="4">
          <sv-list ordered class="left-aligned-list">
            <sv-list-item>Getting Started</sv-list-item>
            <sv-list-item>Introduction</sv-list-item>
            <sv-list-item>
              Languages
              <sv-list inline ordered>
                <sv-list-item>HTML</sv-list-item>
                <sv-list-item>Javascript</sv-list-item>
                <sv-list-item>CSS</sv-list-item>
              </sv-list>
            </sv-list-item>
            <sv-list-item>Review</sv-list-item>
          </sv-list>
        </sv-col>

        <sv-col width="2">
          <sv-list link class="left-aligned-list">
            <sv-list-item>Home</sv-list-item>
            <sv-list-item>About</sv-list-item>
            <sv-list-item active>Jobs</sv-list-item>
            <sv-list-item>Team</sv-list-item>
          </sv-list>
        </sv-col>

        <sv-col width="2">
          <sv-list class="left-aligned-list">
            <sv-list-item as-link>Home</sv-list-item>
            <sv-list-item as-link>About</sv-list-item>
            <sv-list-item as-link active>Jobs</sv-list-item>
            <sv-list-item as-link>Team</sv-list-item>
          </sv-list>
        </sv-col>

        <sv-col width="4">
          <sv-list selection class="left-aligned-list middle aligned">
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/helen.jpg" slot="pre">
              <div class="header">Helen</div>
            </sv-list-item>
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/christian.jpg" slot="pre">
              <div class="header">Christian</div>
            </sv-list-item>
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/daniel.jpg" slot="pre">
              <div class="header">Daniel</div>
            </sv-list-item>
          </sv-list>
        </sv-col>

        <sv-col width="4">
          <sv-list animated class="left-aligned-list middle aligned">
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/helen.jpg" slot="pre">
              <div class="header">Helen</div>
            </sv-list-item>
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/christian.jpg" slot="pre">
              <div class="header">Christian</div>
            </sv-list-item>
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/daniel.jpg" slot="pre">
              <div class="header">Daniel</div>
            </sv-list-item>
          </sv-list>
        </sv-col>
      </sv-row>

      <sv-row>
        <sv-col width="8">
          <sv-list relaxed class="left-aligned-list">
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/helen.jpg" slot="pre">
              <a class="header">Daniel Louise</a>
              <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
            </sv-list-item>
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/christian.jpg" slot="pre">
              <a class="header">Stevie Feliciano</a>
              <div class="description">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>
            </sv-list-item>
            <sv-list-item>
              <a class="header">Elliot Fu</a>
              <div class="description">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>
              <img class="ui avatar image" src="../assets/img/daniel.jpg" slot="pre">
            </sv-list-item>
          </sv-list>
        </sv-col>

        <sv-col width="5">
          <sv-list divided class="middle aligned left-aligned-list">
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/helen.jpg" slot="pre">
              <a class="header">Daniel Louise</a>
            </sv-list-item>
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/christian.jpg" slot="pre">
              <a class="header">Stevie Feliciano</a>
            </sv-list-item>
            <sv-list-item>
              <img class="ui avatar image" src="../assets/img/daniel.jpg" slot="pre">
              <a class="header">Elliot Fu</a>
            </sv-list-item>
          </sv-list>
        </sv-col>

        <!--TODO: Celled-->
        <sv-col></sv-col>
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
  .left-aligned-list
    text-align: left
</style>
