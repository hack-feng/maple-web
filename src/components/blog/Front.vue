<template>
  <el-container>
    <el-header>
      <NavMenu></NavMenu>
    </el-header>
    <el-main>
      <router-view></router-view> <!--路由出口 -->
    </el-main>
  </el-container>
</template>

<script>
  import NavMenu from "./base/NavMenu.vue";

  export default {
    name: "Front",
    components: {
      NavMenu
    }
  }
</script>

<style scoped>
  .el-main {
    background-color: #f4f5f5;
    padding: 0;
    height: calc(100vh - 60px);
  }

  .el-header {
    padding: 0 0 0 0;
    background-color: black;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
  }
</style>
