<template>
  <div class="container">
    <div class="main">
      <div class="left">

      </div>
      <div class="right">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名：" prop="name">
            <el-input v-model.number="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",

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
  .container{
    background-image: url("./../../assets/bg1.jpg");
    background-size: 100%;
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  .main{
    width: 450px;
    height: 300px;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

</style>
