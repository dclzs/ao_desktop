import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import axios from 'axios'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
 

import 'vx-easyui/dist/themes/default/easyui.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'
import EasyUI from 'vx-easyui'
Vue.use(EasyUI)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {  
  alert(1)
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆 
      if (sessionStorage.getItem('token')) {   // 查询本地存储信息是否已经登陆 
        next(); 
      } else { 
        next({ 
        path: '/login', // 未登录则跳转至login页面 
        query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面 
        }); 
      } 
  } else { 
   next(); 
  } 
 });