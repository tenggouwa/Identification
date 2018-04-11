import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'views/index'
import Main from '../views/main.vue'
import Operation from '../views/operation.vue'
import Contract from '../views/contract.vue'
import Enterprise from '../views/enterprise.vue'
import Block from '../views/block.vue'

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index,
    },
    {
      path: '/main',
      component: Main,
      children:
      [
        {
          path:"operation",
          component: Operation
        },
        {
          path:"contract",
          component: Contract
        },
        {
          path:"enterprise",
          component: Enterprise
        },
        {
          path:"block",
          component: Block
        },
      ]
    },
  ]
})
