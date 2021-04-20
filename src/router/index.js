import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/blogManage/home/index'
import Article from '@/views/blogManage/article/index'
import Login from '@/components/manage/Login'
import Manage from '@/components/manage/Manage'
import ManageUser from '@/views/systemManage/user'
import ManageIndex from '@/views/systemManage/index'

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
    },

    {
      path: '/manage/index',
      name: 'ManageIndex',
      component: ManageIndex,
      meta: {
        systemFlag: true
      }
    }, {
      path: '/manage/user',
      name: 'ManageUser',
      component: ManageUser,
      meta: {
        systemFlag: true
      }
    }, {
      path: '/manage/user/add',
      name: 'Home',
      component: Home,
      meta: {
        systemFlag: true
      }
    }
  ]
})
