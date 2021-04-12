<template>
  <el-container>
    <el-aside width="auto" style="background-color: #000">
      <NavMenu></NavMenu>
    </el-aside>
    <el-container>
      <el-header>
        <NavBar></NavBar>
      </el-header>
      <el-main class="main">
        <router-view></router-view> <!--路由出口 -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import NavMenu from "./base/NavMenu";
  import NavBar from "./base/NavBar";

  export default {
    name: "Manage",
    components: {
      NavMenu, NavBar
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
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
  }
  .main{
    padding: 20px 20px 20px 20px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
