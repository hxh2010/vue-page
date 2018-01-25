<!--左侧菜单-->
<template>
  <div class="m-left">
    <ul>
      <li v-for="item in allPermission" :title="item.n">
        <div class="mod" :class="[item.s ,item.show?'active':'']" @click="selectItem(item)">
          <div class="mod-menu-icon">
            <icon icon-style="icon" :icon-class="item.i"/>
          </div>
          <span class="mod-menu">{{item.n}}</span>
        </div>
        <!--<router-link tag="p" v-for="itemSon in item.m" :to="'/'+item.s+'/mod'+itemSon.id" :key="itemSon.id">-->
        <el-collapse-transition>
          <div v-if="item.show">
            <div class="list"
                 v-for="itemSon in item.m"
                 :class="{'active-list':itemSon.show}"
                 @click="selectItemSon(item.s,itemSon,item.m)" :key="itemSon.id">
              <a>
                <div class="mod-list-icon">
                  <icon icon-style="icon" :icon-class="itemSon.i"/>
                </div>
                <span class="mod-list" :title="itemSon.n">{{itemSon.n}}</span>
              </a>
            </div>
          </div>
        </el-collapse-transition>
      </li>
    </ul>
  </div>
</template>
<script>
  // this.$router.push('/home/first')// 字符串
  // this.$router.push({ path: '/home/first' })// 对象
  // this.$router.push({ name: 'home', params: { userId: wise }})// 命名的路由

  import icon from '../icon'

  export default {
    data: function () {
      return {
        allPermission: [
          {
            s: 'index',
            i: 'shouye',
            n: '首页',
            show: true,
            m: []
          },
          {
            show: false,
            s: 'manage',
            i: 'mokuai',
            n: '系统管理',
            m: [
              {
                id: '2',
                n: '用户管理',
                i: 'yonghu',
                m: [],
                show: false
              },
              {
                id: '3',
                n: '部门管理',
                i: 'yonghu-yuan',
                m: [],
                show: false
              }
            ]
          },
          {
            s: 'chart',
            i: 'wangluoxitong',
            show: false,
            n: '数据分析',
            m: [
              {
                id: '1',
                n: '列表展示',
                i: 'liebiao',
                m: [],
                show: true
              },
              {
                id: '2',
                n: '图表分析',
                i: 'yingyongzhongxin',
                m: [],
                show: false
              }
            ]
          },
          {
            s: 'event',
            i: 'renwu',
            show: false,
            n: '专题分析',
            m: [
              {
                id: '2',
                n: '项目分析',
                i: 'chakan',
                m: [],
                show: true
              },
              {
                id: '3',
                n: '项目配置',
                i: 'shujubiangeng',
                m: [],
                show: false
              }
            ]
          }
        ]
      }
    },
    components: {
      icon
    },
    methods: {
      selectItem: function (item) {
        for (let i of this.allPermission) {
          i.show = false
        }
        item.show = true
        if (item.m.length > 0) {
          for (let i of item.m) {
            i.show = false
          }
        }
        this.$router.push(`/${item.s}`)
      },
      selectItemSon: function (name, item, all) {
        for (let i of all) {
          i.show = false
        }
        debugger
        item.show = true
        this.$router.push(`/${name}/mod${item.id}`)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .mod, .list {
    cursor: pointer;
  }

  .mod {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid rgb(253, 253, 255);
  }

  .mod-menu {
    line-height: 80px;
    font-size: 18px;
  }

  .mod-menu-icon, .mod-list-icon {
    display: inline;
    margin-left: 30px;
    margin-right: 5px;
  }

  .mod-list-icon .icon {
    font-size: 19px;
  }

  .list {
    height: 60px;
    background: #b4cde3;
  }

  .mod-list {
    line-height: 60px;
    font-size: 16px;
  }

  .active, .mod:hover {
    background-color: rgba(76, 176, 253, 0.4);
    color: #fff;
  }

  .active-list, .list:hover {
    background-color: rgba(37, 86, 124, 0.4);
    color: #fff;
  }

</style>
