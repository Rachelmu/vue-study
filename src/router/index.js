import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 其余代码可以保持不变，仍然可以实现同样的功能。如果你想给拆分出的文件命名，可以尝试一下 webpack 提供的 Magic Comments（魔法注释）：
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { 
    path: '/VModel', 
    name: 'VModel',
    component: () => import('../views/VModel.vue') 
  },
  {
    path: '/Tab',
    name: 'Tab',
    component: () => import('../views/TabTest.vue')
  },
  {
    path:'/Toolipt',
    name: 'Toolipt',
    component: () => import('../views/Toolipt')
  },
  {
    path:'/Mixin',
    name: 'Mixin',
    component: () => import('../views/Mixin')
  },
  {
    path:'/TodoList',
    name: 'TodoList',
    component: () => import('../views/TodoList')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
