/*
 * @Author: chengYuanXiang
 * @Date: 2020-09-09 12:49:53
 */
import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/systemManage/user'
import actions from "./actions"
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      name: "未登录",
    }, //用户信息
    menuParent: [], // 菜单信息
    menuChildren: [],
    buttonList: [],
    current: 1,  // 分页信息
    size: 20,
    total: 0,
    listTableHeight: 200,  // 表格动态高度
    dialogBottomShake: false,  //按钮去抖动

  },
  getters,
  modules: {
     User
  },
  actions
})

export default store
