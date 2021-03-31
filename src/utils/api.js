import axios from "axios";
import { Message} from "element-ui";
import { getToken } from "@/utils/auth";
import router from "../router/index";
import { set } from "js-cookie";

// 创建axios实例
const service = axios.create({
  timeout: 150000 // 请求超时时间2
});

// request拦截器
service.interceptors.request.use(
  config => {
    //设置根URL
    config.url = process.env.IP_PORT + config.url;
    config.headers.Authorization = sessionStorage.getItem("token");
    // config.headers.Authorization = localStorage.getItem("token");
    var auth = true;
    for (let item of [
      "/login/auth",
      "/mailContent/verificationCode",
      "/user/updateRetrievePassword"
    ]) {
      if (config.url.indexOf(item) > -1) {
        auth = false;
        break;
      }
    }
    if (auth && !config.headers.Authorization) {
      Message( {
        showClose: true,
        message: "跳转登录页面",
        type: "error",
        duration: 3 * 1000,
        onClose: () => {
          // 跳转登录页
          router.push("/login");
        }
      });
      return config;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
// respone拦截器
service.interceptors.response.use(

  response => {
    const res = response.data;
    if (res.code === 200) {
      store.state.messageNotification=res.frontNoticeNum;//前台小红点
      store.state.noticeNum = res.noticeNum;  // 保存小红点
    }
    if (!res.code) {
      return res;
    }
    if (res.code === 10002 || res.code === 10000) {
      Message({
        showClose: true,
        message: res.msg,
        type: "error",
        duration: 3 * 1000,
        onClose: () => {
          // 跳转登录页
          router.push("/login");
        }
      });
      return Promise.reject(res.msg);
    } else {
      return res;
    }
  },
  error => {
    if(error.response.status !== 404){
      Message({
        message: error.message,
        type: "error",
        duration: 3 * 1000
      });
    }
    return Promise.reject(error);
  }
);
export default service;
