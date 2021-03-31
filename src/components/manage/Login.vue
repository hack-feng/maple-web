<template>
  <div class="container">
    <div class="main">
      <div class="left">

      </div>
      <div class="right">
        <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px">
          <el-form-item label="用户名：" prop="userName">
            <el-input v-model.number="loginForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="passWord">
            <el-input type="password" v-model="loginForm.passWord" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",

    data() {
      return {
        loginForm: {
          userName: "",
          passWord: ""
        },
        loginRules: {
          userName: [
            {required: true, message: '请输入用户名称', trigger: 'blur'},
            {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
          ],
          passWord: [
            {required: true, message: '请输入用户密码', trigger: 'blur'},
            {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var data = JSON.parse(JSON.stringify(this.loginForm));
            this.api.post("/login/auth", data).then((response) => {
              if (response.code === 200) {
                this.$router.replace("/Manage");
              } else {
                this.$message({
                  message: response.msg,
                  type: "warning"
                })
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .container {
    background-image: url("./../../assets/bg1.jpg");
    background-size: 100%;
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  .main {
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
