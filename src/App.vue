<template>
  <div id="app">
    <el-container>
      <Front v-if="!$route.meta.systemFlag && !$route.meta.isLoginPage"></Front>
      <Manage v-if="$route.meta.systemFlag && !$route.meta.isLoginPage"></Manage>
      <Login v-if="!$route.meta.systemFlag && $route.meta.isLoginPage"></Login>
    </el-container>
  </div>
</template>

<script>
  import Front from "./components/blog/Front.vue";
  import Manage from "./components/manage/Manage.vue";
  import Login from "./components/manage/Login";
  export default {
    name: 'App',
    components: {
      Front, Manage, Login
    }
  }
</script>

<style scoped>
  #app {
    display:flex;
    flex-direction:column;
  }
</style>
