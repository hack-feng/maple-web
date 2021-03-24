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
    padding: 0;
    margin-top: -60px;
  }

  .el-header{
    padding: 0 0 0 0;
    background-color: #00000078;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
</style>
