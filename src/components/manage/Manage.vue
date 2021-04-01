<template>
  <el-container>
    <el-header class="flex">
      <div>
          <span class="systemName">
            管理后台
          </span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <NavMenu></NavMenu>
      </el-aside>
      <el-main>
        <router-view></router-view> <!--路由出口 -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import NavMenu from "./base/NavMenu.vue";

  export default {
    name: "Manage",
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

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .systemName {
    color: #fff;
    font-size: 25px;
  }
</style>
