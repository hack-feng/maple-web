<template>
  <div id="app">
    <el-container>
      <Front v-if="!$route.meta.systemFlag"></Front>
      <Manage v-if="$route.meta.systemFlag"></Manage>
    </el-container>
  </div>
</template>

<script>
  import Front from "./components/blog/Front.vue";
  import Manage from "./components/manage/Manage.vue";
  export default {
    name: 'App',
    components: {
      Front, Manage
    }
  }
</script>

<style scoped>
  #app {
    display:flex;
    flex-direction:column;
  }
</style>
