import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/blog_manage/home/index'
import Article from '@/pages/blog_manage/article/index'
import Login from '@/components/manage/Login'
import Manage from '@/components/manage/Manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },{
      path: '/home',
      name: 'Home',
      component: Home,
    },{
      path: '/article',
      name: 'Article',
      component: Article,
    },{
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isLoginPage: true
      }
    },{
      path: '/Manage',
      name: 'Manage',
      component: Manage,
      meta: {
        systemFlag: true
      }
    }
  ]
})
