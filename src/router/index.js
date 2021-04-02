import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/blog_manage/home/index'
import Article from '@/pages/blog_manage/article/index'
import Login from '@/components/manage/Login'
import Manage from '@/components/manage/Manage'
import User from '@/pages/system_manage/user/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
    }, {
      path: '/article',
      name: 'Article',
      component: Article,
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isLoginPage: true
      }
    }, {
      path: '/manage',
      name: 'Manage',
      component: Manage,
      meta: {
        systemFlag: true
      }
    }, {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        systemFlag: true
      }
    }
  ]
})
