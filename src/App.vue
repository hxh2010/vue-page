<template>
  <div id="app">
    <m-login v-if="!isLogin" @on-login="onLogin"/>
    <el-container v-show="isLogin">
      <el-header style="min-height: 80px;padding: 0">
        <m-header/>
      </el-header>
      <el-container style="min-height: 900px">
        <el-aside width="200px">
          <m-left/>
        </el-aside>
        <el-main style="background: #bcdaff;">
          <transition name="el-fade-in-linear">
            <!--<keep-alive>-->
              <router-view/>
            <!--</keep-alive>-->
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import MLogin from 'components/m-login/m-login'
  import MLeft from 'components/m-left/m-left'

  export default {
    name: 'app',
    data: function () {
      return {
        isLogin: false
      }
    },
    methods: {
      onLogin: function (item) {
        console.log(item)
        this.Util.getDarkRandomColor()
        this.isLogin = true
      }
    },
    components: {
      MHeader, MLogin, MLeft
    }
  }
</script>
<style>
  #app {
    width: 100%;
    height: auto;
    left: 0;
    top: 0;
    background-size: 100%;
    background: rgba(141, 188, 228, 0.52);
  }
  /*element重置样式*/
  .el-dialog__body,.el-dialog__footer{
    /*background: rgba(141, 188, 228, 0.52);*/
  }
  .el-select {
    width: 100%;
  }
  .el-dialog__header {
    padding: 13px 16px 13px;
    background: #54c8fd;
    color: #fff;
  }

  .el-badge__content {
    background-color: #44acf5;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 15px;
    line-height: 11px;
    padding: 0 2px;
    text-align: center;
    border: 1px solid #fff;
  }
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    /*background: rgb(188, 218, 255);*/
  }
  /*自定义通用样式*/

  .main-block {
    width: 100%;
    border-top: 2px solid rgba(81, 168, 249, 0.3);
  }

  .main-block-title {
    height: 35px;
    background: rgba(63, 174, 241, 0.85);
    width: 120px;
    position: relative;
    text-align: center;
    line-height: 33px;
    color: #fff;
    display: inline-block;
  }

  .main-block-title:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    border: 8px solid transparent;
    border-color: #389dd9 #bcdaff #bcdaff #389dd9;
    bottom: 0;
    right: 0;
    display: block;
  }

  .main-title-context {
    height: auto;
    padding: 20px 10px 10px 10px;
    margin: 15px 0 15px 0;
    position: relative;
    border: 2px solid #9c9c9c;
  }

  .main-title-context:after {
  content: '默认标题';
  position: absolute;
  font-size: 17px;
  font-weight: bold;
  color: #9c9c9c;
  width: 90px;
  height: 25px;
  overflow: hidden;
  top: -12px;
  text-align: center;
  left: 17px;
  display: block;
  background: #bcdaff;
  }

  .main-block-context {
    background: #4cc3fa2b;
    height: auto;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
  }

  .main-block-button {
    width: 90px;
    height: 33px;
    display: inline-block;
    float: right;
    border-radius: 5px;
    margin: 1px 10px 0 0;
    background: #026b93;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    color: #fff;
  }

  .main-block-button:hover {
    background: #02bcff;
  }

  .main-block-list{
    margin: 7px 0 10px 0;
    text-align: center;
    background: rgba(86, 170, 161, 0.52);
    border-radius: 5px;
    color: #fff;
  }

  .main-block-list .detail {
    padding: 10px 0;
  }

  .main-block-list .list-body .list-detail:nth-child(odd) {
    background: rgba(76, 126, 155, 0.52);
  }
</style>
