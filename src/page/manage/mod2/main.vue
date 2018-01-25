<!--Mod2-->
<template>
  <el-row>
    <div class="main-title-context">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="form.user" placeholder="姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="form.user" placeholder="姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年龄">
              <el-input v-model="form.age" placeholder="年龄"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年龄">
              <el-input v-model="form.age" placeholder="年龄"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="性别">
              <el-select v-model="form.region" placeholder="性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="性别">
              <el-select v-model="form.region" placeholder="性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="性别">
              <el-select v-model="form.region" placeholder="性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="main-title-context">
      <div class="main-block-button" @click="dialogVisible = true">添加用户</div>
      <el-row class="user-list">
        <el-row class="list-head">
          <el-col :span="2" class="detail">用户名</el-col>
          <el-col :span="3" class="detail">真实姓名</el-col>
          <el-col :span="3" class="detail">用户角色</el-col>
          <el-col :span="2" class="detail">所属部门</el-col>
          <el-col :span="3" class="detail">所属单位</el-col>
          <el-col :span="4" class="detail">失效时间</el-col>
          <el-col :span="4" class="detail">创建时间</el-col>
          <el-col :span="3" class="detail">操作</el-col>
        </el-row>
        <el-row class="list-body">
          <el-row class="list-detail">
            <el-col :span="2" class="detail">szuser</el-col>
            <el-col :span="3" class="detail">张三</el-col>
            <el-col :span="3" class="detail">系统管理员</el-col>
            <el-col :span="2" class="detail">采购部</el-col>
            <el-col :span="3" class="detail">食堂</el-col>
            <el-col :span="4" class="detail">1900-01-01 00:00:00</el-col>
            <el-col :span="4" class="detail">1900-01-01 00:00:00</el-col>
            <el-col :span="3" class="detail">
              <div class="detail-icon">
                <icon icon-style="icon" icon-class="bianji"/>
              </div>
              <div class="detail-icon">
                <icon icon-style="icon" icon-class="shanchu"/>
              </div>
            </el-col>
          </el-row>
          <el-row class="list-detail" v-for="(item,index) in showList" :key="index">
            <el-col :span="2" class="detail">{{item.a}}</el-col>
            <el-col :span="3" class="detail">{{item.b}}</el-col>
            <el-col :span="3" class="detail">{{item.c}}</el-col>
            <el-col :span="2" class="detail">{{item.d}}</el-col>
            <el-col :span="3" class="detail">{{item.e}}</el-col>
            <el-col :span="4" class="detail">{{item.f}}</el-col>
            <el-col :span="4" class="detail">{{item.g}}</el-col>
            <el-col :span="3" class="detail">
              <div class="detail-icon">
                <icon icon-style="icon" icon-class="bianji"/>
              </div>
              <div class="detail-icon">
                <icon icon-style="icon" icon-class="shanchu"/>
              </div>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row style="float: right;">
        <el-pagination background
                       @current-change="change"
                       :page-size=pageSize
                       layout="total,prev,pager,next,jumper"
                       :total=data.length><!--:page-sizes="[7]"-->
        </el-pagination>
      </el-row>
    </div>
    <el-dialog title="添加用户" top="2vh" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
      <!--添加用户弹窗-->
      <!-- style="height: 400px;overflow-y: auto"-->
        <el-row class="my-dialog">
          <el-col :span="24">
            <div class="main-block">
              <div class="main-block-title">基本信息</div>
              <div class="main-block-context">
                <el-row style="margin: 0 60px">
                  <el-button>管理员</el-button>
                  <el-button>普通用户</el-button>
                </el-row>
                <el-row class="user-form">
                  <el-form ref="form" :model="form" label-width="60px">
                    <el-row>
                      <el-col :span="6">
                        <el-form-item label="姓名">
                          <el-input v-model="form.user" placeholder="姓名"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="姓名">
                          <el-input v-model="form.user" placeholder="姓名"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="年龄">
                          <el-input v-model="form.age" placeholder="年龄"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="年龄">
                          <el-input v-model="form.age" placeholder="年龄"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6">
                        <el-form-item label="性别">
                          <el-select v-model="form.region" placeholder="性别">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="性别">
                          <el-select v-model="form.region" placeholder="性别">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="性别">
                          <el-select v-model="form.region" placeholder="性别">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="main-block">
              <div class="main-block-title" style="width: 150px">选择开通权限模块</div>
              <div class="main-block-context">
                <el-row>
                  <el-col :span="12">
                    <el-tree
                      :data="data2"
                      show-checkbox
                      node-key="id"
                      :default-expanded-keys="[2, 3]"
                      :default-checked-keys="[5]"
                      :props="defaultProps">
                    </el-tree>
                  </el-col>
                  <el-col :span="12">
                    <el-tree
                      :data="data2"
                      show-checkbox
                      node-key="id"
                      :default-expanded-keys="[2, 3]"
                      :default-checked-keys="[5]"
                      :props="defaultProps">
                    </el-tree>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script type="text/ecmascript-6">
  import icon from 'components/icon'

  export default {
    data () {
      return {
        dialogVisible: false,
        showList: [],
        pageSize: 7,
        pageNum: 1,
        form: {
          user: '',
          age: '',
          region: ''
        },
        data: [
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
          {
            a: 'szuser',
            b: '张三',
            c: '系统管理员',
            d: '采购部',
            e: '单位食堂',
            f: '1900-01-01 00:00:00',
            g: '1900-01-01 00:00:00',
          },
        ],
        data2: [
          {
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          },
          {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    components: {
      icon
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      handleClose (done) {
        this.dialogVisible = false
      },
      change (currentPage) {
        // 分页
        this.showList = []
        debugger
        for (let i = (currentPage - 1) * this.pageSize; i < currentPage * this.pageSize; i++) {
          if (this.data[i]) {this.showList.push(this.data[i])}
        }
        this.pageNum = currentPage
        this.$message({
          showClose: true,
          message: `跳转至第${currentPage}页`,
          type: 'success',
          duration: 3000
        })
      }
    },
    mounted () {
      for (let i = 0; i < 7; i++) {
        this.showList.push(this.data[i])
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-form {
    margin: 10px 0;
  }

  .detail-icon {
    display: inline-block;
    cursor: pointer;
  }

  .detail-icon:hover {
    color: #0079ff;
  }

  .user-list {
    margin: 7px 0 10px 0;
    text-align: center;
    background: rgba(86, 170, 161, 0.52);
    border-radius: 5px;
    color: #fff;
  }

  .detail {
    padding: 10px 0;
  }

  .list-body .list-detail:nth-child(odd) {
    background: rgba(76, 126, 155, 0.52);
  }

  .main-block-button {
    margin: -30px 15px 0 0;
  }

  .main-title-context:nth-child(1):after {
    content: '信息筛选';
  }

  .main-title-context:nth-child(2):after {
    content: '用户列表';
  }

  .main-title-context:nth-child(2) {
    height: auto;
    padding-bottom: 40px;
  }
</style>
