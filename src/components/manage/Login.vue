<template>
  <el-row>
    只是一个垃圾的系统登录页
    <el-button type="primary" @click="doLogin">登录</el-button>
  </el-row>
</template>

<script>
    export default {
        name: "login",

        data:{

        },
        methods:{
          doLogin(){
            this.$router.replace("/Manage");
          }
        }

    }
</script>

<style scoped>

</style>
