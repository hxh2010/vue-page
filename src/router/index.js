import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import ChartDisplay from '../page/chart/chart-display'
import Manage from '../page/manage/manage'
import Event from '../page/event/event'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/chart',
      name: 'ChartDisplay',
      component: ChartDisplay,
      redirect: '/chart/mod3',
      children: [
        {
          path: 'mod1',
          component: resolve => require(['../page/chart/mod1/main'], resolve)
        },
        {
          path: 'mod3',
          component: resolve => require(['../page/chart/mod3/main'], resolve)
        },
        {
          path: 'mod2',
          component: resolve => require(['../page/chart/mod2/main'], resolve),
          redirect: '/chart/mod2/mod1',
          children: [
            {
              path: 'mod1',
              component: resolve => require(['../page/chart/mod2/mod1/mod1'], resolve)
            },
            {
              path: 'mod2',
              component: resolve => require(['../page/chart/mod2/mod2/mod2'], resolve)
            },
            {
              path: 'mod3',
              component: resolve => require(['../page/chart/mod2/mod3/mod3'], resolve)
            }
          ]
        }
      ]
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage,
      redirect: '/manage/mod1',
      children: [
        {
          path: 'mod1',
          component: resolve => require(['../page/manage/mod1/main'], resolve)
        },
        {
          path: 'mod2',
          component: resolve => require(['../page/manage/mod2/main'], resolve)
        },
        {
          path: 'mod3',
          component: resolve => require(['../page/manage/mod3/main'], resolve)
        }
      ]
    },
    {
      path: '/event',
      name: 'Event',
      component: Event,
      redirect: '/event/mod1',
      children: [
        {
          path: 'mod1',
          component: resolve => require(['../page/event/mod1/main'], resolve)
        },
        {
          path: 'mod2',
          component: resolve => require(['../page/event/mod2/main'], resolve)
        },
        {
          path: 'mod3',
          component: resolve => require(['../page/event/mod3/main'], resolve)
        }
      ]
    }
  ]
})
