<!--Mod1-->
<template>
  <el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="main-block">
          <div class="main-block-title">基础线状图</div>
          <div class="main-block-context">
            <div id="echarts-line"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="main-block">
          <div class="main-block-title">基础柱状图</div>
          <div class="main-block-context">
            <div id="echarts-bar"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="main-block">
          <div class="main-block-title">基础散点图</div>
          <div class="main-block-context">
            <div id="echarts-scatter"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      let myChart1 = this.Echarts.init(document.getElementById('echarts-line'))
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
      let myChart2 = this.Echarts.init(document.getElementById('echarts-bar'))
      // 绘制图表
      myChart2.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      })
      let myChart3 = this.Echarts.init(document.getElementById('echarts-scatter'))
      // 绘制图表
      myChart3.setOption({
        xAxis: {},
        yAxis: {},
        series: [{
          symbolSize: 20,
          data: [
            [10.0, 8.04],[10.0, 8.04],[10.0, 8.04],[10.0, 8.04],[10.0, 8.04],[10.0, 8.04],
            [8.0, 6.95],[8.0, 6.95],[8.0, 6.95],[8.0, 6.95],[8.0, 6.95],
            [13.0, 7.58],[9.0, 8.81],[11.0, 8.33],
            [14.0, 9.96],[6.0, 7.24],[4.0, 4.26],[4.0, 4.26],[12.0, 10.84],[7.0, 4.82],[5.0, 5.68]
          ],
          type: 'scatter'
        }]
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-block-context {
    height: 400px;
  }

  #echarts-line,#echarts-bar,#echarts-scatter {
    height: 100%;
    width: 100%;
  }

</style>
