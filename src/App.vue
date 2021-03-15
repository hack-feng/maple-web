<template>
  <div id="app">
    <el-container>
      <el-header>
        <NavMenu></NavMenu>
      </el-header>
      <el-main>
        <router-view></router-view> <!--路由出口 -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from "./components/base/NavMenu.vue";
  export default {
    name: 'App',
    components: {
      NavMenu
    }
  }
</script>

<style scoped>
  #app {
    background-image: url('assets/bg1.jpg');
    background-size: 100% 100%;
    position: fixed;
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
  }

  .el-main {
    color: #333;
    text-align: center;
  }
</style>