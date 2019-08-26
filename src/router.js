import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      meta: { 
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆 
      },
      component: Home
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
