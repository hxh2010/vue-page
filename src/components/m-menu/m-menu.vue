<!--三级菜单-->
<template>
  <div class="m-menu">
    <ul>
      <li class="menu" v-for="item in menu.m" @click="selectMenu(item)">
        <span :class="{'active':item.show===true}">{{item.n}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        activeName: 'BaseChart',
        menu: {
          id: '1',
          n: '',
          m: [
            {
              id: '1',
              n: 'BaseChart',
              show: true
            },
            {
              id: '2',
              n: 'WordCloud',
              show: false
            },
            {
              id: '3',
              n: 'MapChart',
              show: false
            }
          ]
        }
      }
    },
    methods: {
      selectMenu: function (item) {
        for (let i of this.menu.m) {
          i.show = false
        }
        item.show = true
        debugger
        this.$router.push(`/chart/mod2/mod${item.id}`)
      },
      handleClick (tab, event) {
        debugger
        console.log(tab, event)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .m-menu{
    margin: 10px 0 20px 5px;
  }
  li {
    display: inline-block;
  }
  span{
    cursor: pointer;
    float: left;
    font-size: 14px;
    margin: 0 10px 0 0;
    display: inline-block;
    height: 30px;
    line-height: 28px;
    padding: 0 15px;
    background: #92a1a0;
    color: #fff;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    position: relative;
  }
  .active{
    background: #4fabff;
  }
  .active:after {
    position: absolute;
    bottom: -18px;
    right: 41%;
    width: 0;
    height: 0;
    content: "";
    border: 9px solid transparent;
    border-top-color: #4fabff;
  }
</style>
