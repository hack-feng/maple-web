import router from '../router/index'
const _import = require("../router/_import_" + process.env.NODE_ENV);
var authList, routers;
// 根据后台返回的菜单进行路由配置和权限设置
function menuToRouter(menu, parentUrl){
    if(!menu || menu.length==0) return [];
    if(menu[0].resType == 'button'){
        authList[parentUrl] = menu;
        return [];
    }
    for(var i=0;i<menu.length;i++){
        menu[i].component = (!['#', '/'].includes(menu[i].menuRoute)?_import(menu[i].menuRoute):_import("layout/Layout"));  //设置对应的资源路径
        menu[i].path = menu[i].url;
        menu[i].meta = {title: menu[i].name}; // 设置路由参数
        if(menu[i].children) {
            menu[i].children = menuToRouter(menu[i].children, menu[i].url)
        }
    }
    return menu;
}

export default {
    // 根据用户对应的视图权限保存本地路由和菜单
    ["ROOT_SET_MENU_ROUTER"](state, {menuList, that}){
        return new Promise((res,rej)=>{
            authList={};
            routers = menuToRouter(menuList, "");  //树形路由
            if(routers){
                router.addRoutes(routers);  //添加动态路由
                state.menuParent = routers;  //设置菜单
                that.$store.commit("ROOT_GET_BUTTON", {that, authList})
            }
            res();
         })
    },
    // 刷新页面后根据路由展开菜单
    ["ROOT_AUOT_SELECT_ROUTER"](state, {that}){
        var menuList = JSON.parse(sessionStorage.getItem("viewList"))
        that.$store.commit("ROOT_SET_MENU_ROUTER", {menuList,that});
    },
    // 获取操作权限
    ["ROOT_GET_BUTTON"](state, {that, authList}){
        state.buttonList = [];
        if(authList){ sessionStorage.setItem("authList", JSON.stringify(authList)); }
        else { authList = JSON.parse(sessionStorage.getItem("authList")); }
        var route = that.$route.path, buttonList = authList[route];
        if(!buttonList) return;
        for(var i=0;i<buttonList.length;++i){
            state.buttonList.push(buttonList[i].name);
        }
    }
}