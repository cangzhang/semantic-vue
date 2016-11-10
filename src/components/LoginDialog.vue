<template>
  <div class="login-dialog">
    <el-button type="primary" @click.native="openDialog">{{ btnTitle }}</el-button>
    <el-dialog title="Rock 'n Roll" v-model="dialogFormVisible">
      <el-form v-model="form">
        <el-form-item class="loginSwitch" label="Click to change Login / Register">
          <el-switch v-model="login" on-text="" on-color="#324057" off-text="" off-color="#1D8CE0"></el-switch>
        </el-form-item>
        <el-form-item label="Username">
          <el-input placeholder="Username" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input placeholder="Password" v-model="form.password" type="password" required></el-input>
        </el-form-item>
        <el-form-item label="Remember Me" v-if="login">
          <el-switch v-model="form.rememberMe" on-color="#13ce66" off-color="#ff4949"></el-switch>
        </el-form-item>
        <el-form-item label="Email" v-else>
          <el-input v-model="form.email" placeholder="Email" on-color="#13ce66" off-color="#ff4949" required></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="cancelFormInput">Cancel</el-button>
        <el-button type="primary" @click.native="submit">{{ login ? 'Login' : 'Register' }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props   : {},
    data() {
      return {
        form             : {
          username  : '',
          password  : '',
          email     : '',
          rememberMe: false
        },
        btnTitle         : 'Open Dialog',
        dialogFormVisible: false,
        formLabelWidth   : '200',
        login            : true
      }
    },
    created : function () {},
    computed: {},
    watch   : {},
    methods : {
      openDialog () {
        this.dialogFormVisible = true
      },
      submit () {
        let loginUrl = 'http://v.dev/api/login'
        let regUrl = 'http://v.dev/api/register'
        let loginInfo = {
          username: this.form.username,
          password: this.form.password
        }
        let regInfo = {
          username: this.form.username,
          password: this.form.password,
          email   : this.form.email
        }
        if (this.login) {
          this.$http.post(loginUrl, loginInfo)
            .then((data) => {
              localStorage.setItem('Token', data.body.token)
            })
        } else {
          this.$http.post(regUrl, regInfo)
            .then((data) => {
              if (data.body.created) {
                alert('You have been registered successfully.')
              }
            })
        }
        this.dialogFormVisible = false
      },
      cancelFormInput () {
        this.dialogFormVisible = false
      }
    }
  }
</script>

<style>
  .loginSwitch {
    margin-bottom: 0;
  }
</style>
