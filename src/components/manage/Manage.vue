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
        <div class="main-container">
          <router-view></router-view> <!--路由出口 -->
        </div>
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
    border-radius:5px;
  }
  .main{
    padding: 20px 20px 20px 20px;
    box-shadow: 1px 1px 4px #888888;
  }
  .main-container{
    padding: 20px 20px 20px 20px;
    background-color: #fff;
    border-radius:5px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
