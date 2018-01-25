<!--系统主页-->
<template>
  <el-row :gutter="70" id="index">
    <el-col :span="7">
      <div class="main">实现功能</div>
      <div>element-ui组件的选用及样式的调整</div>
      <div>vue-router的使用</div>
      <div>vuex的使用</div>
      <div>echarts基本图表（形状、柱状、散点图）、词云图、地图的使用</div>
      <div>登录跳转</div>
    </el-col>
    <el-col :span="5">
      <div class="main">技术选型</div>
      <div>|--交互/组件化</div>
      <div class="list">|--vue2.0</div>
      <div class="list">|--vue-router:路由跳转</div>
      <div class="list">|--vuex：数据、状态管理</div>
      <div>|--前后端数据交互</div>
      <div class="list">|--data()中模拟JSON数据</div>
      <div>|--模块化</div>
      <div class="list">|--ES6</div>
      <div class="list">|--babel</div>
      <div>|--项目构建</div>
      <div class="list">|--vue-cli</div>
      <div class="list">|--webpack</div>
      <div>|--代码检查</div>
      <div class="list">|--eslint</div>
      <div>|--前端UI</div>
      <div class="list">|--element-ui</div>
      <div class="list">|--echarts</div>
    </el-col>
    <el-col :span="8">
      <div class="main">项目结构</div>
      <div>|-- build : webpack相关的配置文件夹(基本不需要修改)</div>
      <div class="list">|-- dev-server.js : 通过express启动后台服务器</div>
      <div>|-- config: webpack相关的配置文件夹(基本不需要修改)</div>
      <div class="list">|-- index.js: 指定的后台服务的端口号和静态资源文件夹</div>
      <div>|-- node_modules</div>
      <div>|-- src : 源码文件夹</div>
      <div class="list">|-- common:公共资源文件夹</div>
      <div class="list">|-- components: vue组件及其相关资源文件夹</div>
      <div class="list">|-- app.vue: 应用根主组件</div>
      <div class="list">|-- main.js: 应用入口js</div>
      <div>|-- static: 静态资源文件夹</div>
      <div>|-- .babelrc: babel的配置文件</div>
      <div>|-- .editorconfig: 通过编辑器的编码/格式进行一定的配置</div>
      <div>|-- .eslintignore: eslint检查忽略的配置</div>
      <div>|-- .eslintrc.js: eslint检查的配置</div>
      <div>|-- .gitignore: git版本管制忽略的配置</div>
      <div>|-- index.html: 主页面文件</div>
      <div>|-- package.json: 应用包配置文件</div>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  // let echarts = require('echarts');
  export default {
    data () {
      return {}
    },
    methods: {},
    computed: {},
    components: {},
    mounted () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #index {
    padding: 0 20px;
  }

  .main {
    font-size: 18px;
    border-bottom: 1px solid #4fabff;
    margin: 40px 0 0 0;
    padding-bottom: 5px;
    color: #f00;
  }

  .list {
    padding-left: 20px;
  }
</style>
