<!--Mod1-->
<template>
  <el-row>
    <el-row>
      <el-col :span="24">
        <div class="main-block">
          <div class="main-block-title">个人信息</div>
          <div class="main-block-context">
            <el-form ref="form" :model="form" label-width="60px">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="性别">
                    <el-select v-model="form.region" placeholder="性别">
                      <el-option label="男" value="1"></el-option>
                      <el-option label="女" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="性别">
                    <el-select v-model="form.region" placeholder="性别">
                      <el-option label="男" value="1"></el-option>
                      <el-option label="女" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="性别">
                    <el-select v-model="form.region" placeholder="性别">
                      <el-option label="男" value="1"></el-option>
                      <el-option label="女" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="性别">
                    <el-select v-model="form.region" placeholder="性别">
                      <el-option label="男" value="1"></el-option>
                      <el-option label="女" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="性别">
                    <el-select v-model="form.region" placeholder="性别">
                      <el-option label="男" value="1"></el-option>
                      <el-option label="女" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="性别">
                    <el-select v-model="form.region" placeholder="性别">
                      <el-option label="男" value="1"></el-option>
                      <el-option label="女" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="性别">
                    <el-select v-model="form.region" placeholder="性别">
                      <el-option label="男" value="1"></el-option>
                      <el-option label="女" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="性别">
                    <el-select v-model="form.region" placeholder="性别">
                      <el-option label="男" value="1"></el-option>
                      <el-option label="女" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="main-block">
          <div class="main-block-title">登录情况</div>
          <div class="main-block-context">
            <div id="user-login-line"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="main-block">
          <div class="main-block-title">登录详情</div>
          <div class="main-block-context">
            <el-row class="main-block-list">
              <el-row class="list-head">
                <el-col :span="8" class="detail">操作日志</el-col>
                <el-col :span="8" class="detail">操作模块</el-col>
                <el-col :span="8" class="detail">日志时间</el-col>
              </el-row>
              <el-row class="list-body">
                <el-row class="list-detail">
                  <el-col :span="8" class="detail">进入首页</el-col>
                  <el-col :span="8" class="detail">系统管理-用户管理</el-col>
                  <el-col :span="8" class="detail">1999-09-09 00:00:00</el-col>
                </el-row>
                <el-row class="list-detail">
                  <el-col :span="8" class="detail">进入首页</el-col>
                  <el-col :span="8" class="detail">系统管理-用户管理</el-col>
                  <el-col :span="8" class="detail">1999-09-09 00:00:00</el-col>
                </el-row>
                <el-row class="list-detail">
                  <el-col :span="8" class="detail">进入首页</el-col>
                  <el-col :span="8" class="detail">系统管理-用户管理</el-col>
                  <el-col :span="8" class="detail">1999-09-09 00:00:00</el-col>
                </el-row>
                <el-row class="list-detail">
                  <el-col :span="8" class="detail">进入首页</el-col>
                  <el-col :span="8" class="detail">系统管理-用户管理</el-col>
                  <el-col :span="8" class="detail">1999-09-09 00:00:00</el-col>
                </el-row>
                <el-row class="list-detail">
                  <el-col :span="8" class="detail">进入首页</el-col>
                  <el-col :span="8" class="detail">系统管理-用户管理</el-col>
                  <el-col :span="8" class="detail">1999-09-09 00:00:00</el-col>
                </el-row>
                <el-row class="list-detail">
                  <el-col :span="8" class="detail">进入首页</el-col>
                  <el-col :span="8" class="detail">系统管理-用户管理</el-col>
                  <el-col :span="8" class="detail">1999-09-09 00:00:00</el-col>
                </el-row>
                <el-row class="list-detail">
                  <el-col :span="8" class="detail">进入首页</el-col>
                  <el-col :span="8" class="detail">系统管理-用户管理</el-col>
                  <el-col :span="8" class="detail">1999-09-09 00:00:00</el-col>
                </el-row>
                <el-row class="list-detail">
                  <el-col :span="8" class="detail">进入首页</el-col>
                  <el-col :span="8" class="detail">系统管理-用户管理</el-col>
                  <el-col :span="8" class="detail">1999-09-09 00:00:00</el-col>
                </el-row>
              </el-row>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        form: {
          user: '',
          age: '',
          region: ''
        }
      }
    },
    computed: {},
    components: {},
    methods: {
      onSubmit () {
        console.log('submit!')
      },
    },
    mounted () {
      let myChart1 = this.Echarts.init(document.getElementById('user-login-line'))
      // 绘制图表
      myChart1.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #user-login-line {
    height: 300px;
    width: 1300px;
  }

</style>
