<template>
  <div class="login-dialog">
    <el-button type="primary" @click.native="dialogFormVisible = true">{{ btnTitle }}</el-button>
    <el-dialog title="收货地址" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option :label="region.name" :value="region.code" v-for="region in allRegions"></el-option>
          </el-select>
        </el-form-item>
        <!--<select name="region" v-model="form.region">
          <option v-for="region in allRegions" :value="region.code">{{ region.name }}</option>
        </select>-->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="cancelFormInput">取 消</el-button>
        <el-button type="primary" @click.native="saveFormData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      regions: {
        type: Array,
        required: false
      },
      formName: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        form: {
          name: this.formName,
          region: ''
        },
        allRegions: this.regions,
        btnTitle: 'Open Dialog',
        dialogFormVisible: false,
        formLabelWidth: '200'
      }
    },
    created: function () {
      console.log(this.regions)
      console.log(this.formName)
    },
    computed: {},
    watch: {},
    methods: {
      saveFormData: function () {
        this.dialogFormVisible = false
        console.log(this.form)
      },
      cancelFormInput: function () {
        this.dialogFormVisible = false
        this.form = {
          name: '',
          region: ''
        }
        console.log(this.form)
      }
    }
  }
</script>
