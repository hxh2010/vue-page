<!--登录-->
<template>
  <div class="login">
    <canvas id="canvas"></canvas>
    <div class="login-div">
      <div class="title">vue/element-ui</div>
      <div class="login-div-son">
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-button type="primary" @click="Login()" style="width: 100%">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      Login: function () {
        this.$emit('on-login', this.username)
      }
    },
    mounted () {
      var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.lineWidth = .3
      ctx.strokeStyle = (new Color(150)).style

      var mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
      }

      var dots = {
        nb: 250,
        distance: 100,
        d_radius: 150,
        array: []
      }

      function colorValue (min) {
        return Math.floor(Math.random() * 255 + min)
      }

      function createColorStyle (r, g, b) {
        return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)'
      }

      function mixComponents (comp1, weight1, comp2, weight2) {
        return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2)
      }

      function averageColorStyles (dot1, dot2) {
        var color1 = dot1.color,
          color2 = dot2.color

        var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
          g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
          b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius)
        return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b))
      }

      function Color (min) {
        min = min || 0
        this.r = colorValue(min)
        this.g = colorValue(min)
        this.b = colorValue(min)
        this.style = createColorStyle(this.r, this.g, this.b)
      }

      function Dot () {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height

        this.vx = -.5 + Math.random()
        this.vy = -.5 + Math.random()

        this.radius = Math.random() * 2

        this.color = new Color()
        console.log(this)
      }

      Dot.prototype = {
        draw: function () {
          ctx.beginPath()
          ctx.fillStyle = this.color.style
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
          ctx.fill()
        }
      }

      function createDots () {
        for (let i = 0; i < dots.nb; i++) {
          dots.array.push(new Dot())
        }
      }

      function moveDots () {
        for (let i = 0; i < dots.nb; i++) {

          var dot = dots.array[i]

          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vx = dot.vx
            dot.vy = -dot.vy
          }
          else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx
            dot.vy = dot.vy
          }
          dot.x += dot.vx
          dot.y += dot.vy
        }
      }

      function connectDots () {
        for (let i = 0; i < dots.nb; i++) {
          for (let j = 0; j < dots.nb; j++) {
            let i_dot = dots.array[i]
            let j_dot = dots.array[j]

            if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
              if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
                ctx.beginPath()
                ctx.strokeStyle = averageColorStyles(i_dot, j_dot)
                ctx.moveTo(i_dot.x, i_dot.y)
                ctx.lineTo(j_dot.x, j_dot.y)
                ctx.stroke()
                ctx.closePath()
              }
            }
          }
        }
      }

      function drawDots () {
        for (let i = 0; i < dots.nb; i++) {
          var dot = dots.array[i]
          dot.draw()
        }
      }

      function animateDots () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        moveDots()
        connectDots()
        drawDots()

        requestAnimationFrame(animateDots)
      }

      document.getElementById('canvas').addEventListener('mousemove', function (e) {
        mousePosition.x = e.pageX
        mousePosition.y = e.pageY
      })

      document.getElementById('canvas').addEventListener('mouseleave', function (e) {
        mousePosition.x = canvas.width / 2
        mousePosition.y = canvas.height / 2
      })

      createDots()
      requestAnimationFrame(animateDots)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    width: 100%;
    text-align: center;
    position: relative;
    top: -80px;
    font-size: 45px;
    font-family: '华康简标题宋', serif;
    text-shadow: 7px 2px 8px #042270;
    color: #fff;
  }

  .login {
    width: 100%;
    height: 100%;
    position: fixed;
    background: url(bg.png) no-repeat;
    left: 0;
    top: 0;
  }

  .login-div {
    position: absolute;
    top: 60%;
    left: 50%;
    width: 482px;
    height: 310px;
    margin-left: -241px;
    margin-top: -155px;
    background: url(bg-logo.png) no-repeat;
  }

  .login-div-son {
    width: 300px;
    margin: 0 auto 0;
    text-align: center;
    line-height: 55px;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
