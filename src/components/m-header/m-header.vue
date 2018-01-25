<!--页头-->
<template>
  <el-row :gutter="20" class="m-header">
    <el-col :span="14">
      <div class="system-title">
        vue/element-ui/webpack
      </div>
    </el-col>
    <el-col :span="10">
      <el-row class="user-manage">
        <el-col :span="16">
          <el-row class="user-info"><span>张三</span><span>系统管理员</span></el-row>
          <el-row class="dispose">
            <el-badge :value="1" :max="10" class="item">
              <div class="detail-icon">
                <icon icon-style="icon" icon-class="tixing"/>
              </div>
            </el-badge>
            <el-badge :value="0" :max="10" class="item">
              <div class="detail-icon">
                <icon icon-style="icon" icon-class="youjian"/>
              </div>
            </el-badge>
            <el-badge :value="999" :max="10" class="item">
              <div class="detail-icon">
                <icon icon-style="icon" icon-class="zhuanxianjieru"/>
              </div>
            </el-badge>
            <el-badge :value="8" :max="10" class="item">
              <div class="detail-icon">
                <icon icon-style="icon" icon-class="shujudaochu-01"/>
              </div>
            </el-badge>
          </el-row>
        </el-col>
        <el-col :span="8" class="logout">
          <div class="detail-icon">
            <icon icon-style="icon" icon-class="kaiguan"/>
          </div>
          <span>退出</span>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  import icon from '../icon'

  export default {
    data () {
      return {}
    },
    computed: {},
    components: {
      icon
    },
    methods: {},
    mounted () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-header {
    height: 80px;
    background: #05618e;
  }

  .detail-icon {
    display: inline-block;
    cursor: pointer;
  }

  .detail-icon:hover {
    color: #ff2b00;
  }

  .system-title {
    color: #ffffff;
    font-size: 26px;
    line-height: 80px;
    margin: 0 20px;
  }
  .user-info {
    height: 35px;
    line-height: 40px;
    float: right;
  }
  .user-info span:nth-child(1){font-size: 20px;font-weight: bold;margin: 0 20px}
  .user-info span:nth-child(2){
    font-size: 18px;
    overflow: hidden;
    font-style: italic;
    color: #B6B0AB;}
  .dispose{
    padding: 5px 5px 0 0;
    float: right;
  }

  .dispose .icon{
    font-size: 27px;
  }

  .user-manage{
    color: #fff;
    float: right;
    min-width: 400px;
  }
  .item{
    margin: 5px;
  }
  .logout{
    padding: 30px 10px;
    font-size: 20px;
    text-align: center;
  }

</style>
