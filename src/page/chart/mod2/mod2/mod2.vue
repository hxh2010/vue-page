<!--Mod2-->
<template>
    <el-row>
      <el-col :span="24">
        <div class="main-block">
          <div class="main-block-title">词云图</div>
          <div class="main-block-context">
            <div id="echarts-wordCloud"></div>
          </div>
        </div>
      </el-col>
    </el-row>
</template>

<script type="text/ecmascript-6">
  let echarts = require('echarts');
  require('echarts-wordcloud');
  export default {
    mounted () {
      let myChart = echarts.init(document.getElementById('echarts-wordCloud'))
      // 绘制图表
      myChart.setOption({
        title:{
          text:"词云图"
        },
        tooltip: {},
        series: [{
          type: 'wordCloud',
          gridSize: 20,
          sizeRange: [12, 50],
          rotationRange: [0, 0],
          shape: 'circle',
          textStyle: {
            normal: {
              color: function() {
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: [{
            name: 'Sam S Club',
            value: 10000,
            textStyle: {
              normal: {
                color: 'black'
              },
              emphasis: {
                color: 'red'
              }
            }
          }, {
            name: 'Macys',
            value: 6181
          }, {
            name: 'Amy Schumer',
            value: 4386
          }, {
            name: 'Jurassic World',
            value: 4055
          }, {
            name: 'Charter Communications',
            value: 2467
          }, {
            name: 'Chick Fil A',
            value: 2244
          }, {
            name: 'Planet Fitness',
            value: 1898
          }, {
            name: 'Pitch Perfect',
            value: 1484
          }, {
            name: 'Express',
            value: 1112
          }, {
            name: 'Home',
            value: 965
          }, {
            name: 'Johnny Depp',
            value: 847
          }, {
            name: 'Lena Dunham',
            value: 582
          }, {
            name: 'Lewis Hamilton',
            value: 555
          }, {
            name: 'KXAN',
            value: 550
          }, {
            name: 'Mary Ellen Mark',
            value: 462
          }, {
            name: 'Farrah Abraham',
            value: 366
          }, {
            name: 'Rita Ora',
            value: 360
          }, {
            name: 'Serena Williams',
            value: 282
          }, {
            name: 'NCAA baseball tournament',
            value: 273
          }, {
            name: 'Point Break',
            value: 265
          }]
        }]
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-block-context {
    height: 600px;
  }

  #echarts-wordCloud {
    height: 100%;
    width: 100%;
  }

</style>
