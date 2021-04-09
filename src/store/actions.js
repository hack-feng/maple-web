export default {
  // 动态修改表格高度
  ["ROOT_UPDATE_TABLE_HEIGHT"]({ state }, { $, isTree }) {

    let mainContainer = $(".main-container").outerHeight() || 0;
    let navBar  = $(".navbar ").outerHeight() || 0;
    let listTemplateSearch = $(".listTemplateSearch").outerHeight() || 0;
    let listTemplateOperator = $(".listTemplateOperator").outerHeight() || 0;
    let elTabsHeader = $('.el-tabs').outerHeight() || 0;
    state.listTableHeight = (mainContainer - navBar - listTemplateSearch -listTemplateOperator- elTabsHeader-22 );
    if (!isTree) state.listTableHeight -= ($(".listTemplatePage").outerHeight() || 0);

  },
  // 提示语
  ["ROOT_CONFIRM"]({ }, { that, msg, cb ,hint="提示"}) {
    that.$confirm(msg, hint, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      cb();
    }).catch(() => {
      that.$message({
        type: 'info',
        message: '已取消操作'
      });
    });
  },
  // 单输入提示语
  ["ROOT_PROMPT"]({ }, { }) {
    that.$prompt(msg, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
    }).then(({ value }) => {
      cb(value);
    }).catch(() => {
      that.$message({
        type: 'info',
        message: '取消输入'
      });
    });
  },
  // 统一请求提示语
  ["ROOT_AXIOS_TIP"]({ }, { res, that, cb }) {
    if (res.code === 200) { that.$message.success(res.msg); cb(); }
    else { that.$message.error(res.msg); }
  },
  ["ROOT_GET_MENU"]({ state, commit }, { that, cb }) {
    that.api.get("/user/getUserByAccount").then((res) => {
      if (res.code === 200) { cb(res); }
      else { that.$message.error(res.msg); }
    })
  },
  // 登出操作
  ["ROOT_LOGOUT"]({ state, dispatch }, { that }) {
    dispatch("ROOT_CONFIRM", {
      that, msg: '确定登出系统？', cb: () => {
        that.api.post("/login/loginOut").then((res) => {
          if (res.code === 200) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("picUrl");
            sessionStorage.removeItem("viewList");
            sessionStorage.removeItem("authList");
            window.location.href = "/login" // 为了重新实例化vue-router对象 避免bug
            that.$message.success("登出成功");
          }
          else { that.$message.error(res.msg); }
        })
      }
    })
  },
  // 通用新增修改请求
  ["ROOT_ADD_OR_UPDATE"]({ state, dispatch }, { that, type, url, data, cb }) {
    that.api.put('/' + url + '/saveOrUpdate', data).then((res) => {
      dispatch("ROOT_AXIOS_TIP", {
        that, res, cb: () => {
          cb(); state.dialogBottomShake = false;
        }
      })
    })
  }
}
