<template>
    <div id="app">
        <img class="logo" src="./assets/logo.png">
        <hello></hello>
        <el-button type="primary" @click.native="openDialog">{{ btnTitle }}</el-button>
        <div class="LoginDialog">
            <el-dialog title="收货地址" v-model="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click.native="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click.native="dialogFormVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <!-- <p>
            Welcome to your Vue.js app!
        </p>
        <p>
            To get a better understanding of how this boilerplate works, check out
            <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>. It is also recommended to go through the docs for
            <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
            <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>. If you have any issues with the setup, please file an issue at this boilerplate's
            <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
        </p>
        <p>
            You may also want to checkout
            <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
            <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
        </p> -->
    </div>
</template>
<script>
import Hello from './components/Hello'
// import LoginDialog from './components/LoginDialog'

export default {
    components: {
        Hello,
        // LoginDialog
    },
    data: () => {
        return {
            form: {},
            btnTitle: 'Open Dialog',
            dialogFormVisible: false,
            formLabelWidth: '200'
        }
    },
    methods: {
        openDialog: function() {
            this.dialogFormVisible = true;
        }
    }
}
</script>
<style>
html {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

#app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
}

#app a {
    color: #42b983;
    text-decoration: none;
}

.logo {
    width: 100px;
    height: 100px
}
</style>
