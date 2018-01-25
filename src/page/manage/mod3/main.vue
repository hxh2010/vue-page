<!--Mod3-->
<template>
  <el-row>
    <div class="main-title-context">
      <el-form ref="form" :model="form" label-width="60px">
        <el-row>
          <el-col :span="5">
            <el-form-item label="性别">
              <el-select v-model="formInline.region" placeholder="性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="性别">
              <el-select v-model="formInline.region" placeholder="性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="main-title-context">
      <div class="main-block-button" @click="dialogVisible = true">添加部门</div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        dialogVisible: false,
        formInline: {
          user: '',
          age: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      handleClose (done) {
        this.dialogVisible = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .main-title-context:nth-child(1):after {
    content: '部门筛选';
  }

  .main-title-context:nth-child(2):after {
    content: '部门列表';
  }

  .main-title-context:nth-child(2) {
    height: 450px;
  }
</style>
