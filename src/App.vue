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
    display:flex;
    flex-direction:column;
  }

  .el-main {
    background-color: #f4f5f5;
    padding: 0;
  }

  .el-header{
    padding: 0 0 0 0;
    background-color: black;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
  }
</style>
