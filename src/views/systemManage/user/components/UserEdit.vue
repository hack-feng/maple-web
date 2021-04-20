<template>
  <div class="listTemplateDialog">
    <el-dialog
      :title="userState.dialogType"
      :visible.sync="userState.dialogShow"
      :close-on-click-modal="false"
      width="568px"
      height="500px"
      :before-close="close"
      @open="_open"
      @close="_close"
      right>
      <el-form
        ref="form"
        :rules="rules"
        :model="userState.dialogData"
        label-width="100px">
        <el-row>
          <el-col :span="24">
            <el-form-item label="账号" prop="account">
              <el-input v-model.trim="userState.dialogData.account"  maxlength="15" placeholder="请输入账户"></el-input>
            </el-form-item>
            <el-form-item label="用户姓名" prop="name">
              <el-input v-model.trim="userState.dialogData.name" maxlength="6"  placeholder="请输入用户姓名"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码" prop="idcardNumber">
              <el-input v-model.trim="userState.dialogData.idcardNumber"  placeholder="请输入身份证号码"></el-input>
            </el-form-item>
            <el-form-item label="用户角色" prop="roleIds" v-if="userState.activeName!='2'">
              <el-select  v-model="userState.dialogData.roleIds" multiple placeholder="请选择用户角色">
                <el-option
                  v-for="item in userState.userRoleList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.label"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
              <el-input
                v-model.trim="userState.dialogData.mobile"
                maxlength="11"
                placeholder="请输入手机号">
              </el-input>
            </el-form-item>
            <el-form-item label="邮箱"  prop="email">
              <el-input v-model.trim="userState.dialogData.email" maxlength="30"  placeholder="请输入用户邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" v-if="userState.dialogType=='add'">
              <el-input type="password" maxlength="15"  v-model.trim="userState.dialogData.password" placeholder="请输入用户密码"></el-input>
            </el-form-item>
            <el-form-item  label="确认密码" prop="addpassword" v-if="userState.dialogType=='add'">
              <el-input type="password" maxlength="15"  v-model.trim="userState.dialogData.addpassword" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item  label="新密码" maxlength="15"  prop="passwordNew" v-if="userState.dialogType=='update'">
              <el-input type="password" v-model.trim="userState.dialogData.passwordNew" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item  label="确认密码" maxlength="15"  prop="updatepassword"  v-if="userState.dialogType=='update'" >
              <el-input type="password" v-model.trim="userState.dialogData.updatepassword" placeholder="请确认密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="dialogOperator">
        <el-button type="info" size="small" @click="close">取消</el-button>
        <el-button type="primary" size="small" @click="addOrUpdate" :disabled="userState.dialogBottomShake" >确认</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    computed: {
      ...mapState({
        rootState: (state) => state,
        userState: (state) => state.User,
      }),
    },
    data() {
      return {
        dialogData:[],
        rules: {
          username: [
            { required: true, trigger: 'blur', message: '请输入用户名' },
          ],
          password: [
            { required: true, trigger: 'blur', message: '请输入密码' },
          ],
          email: [{ required: true, trigger: 'blur', message: '请输入邮箱' }],
          permissions: [
            { required: true, trigger: 'blur', message: '请选择权限' },
          ],
        },
        isUseSeal:0,
      };
    },
    methods: {
      _open() {
        this.userState.dialogReset = false;
      },
      //清除表单内容
      _close() {
        this.$refs["form"].resetFields();
      },
      close(){
        if(this.userState.dialogType==="add") {
          return this.userState.dialogShow = false;
        }
        let oldData = JSON.stringify(this.dialogData);
        let newData = JSON.stringify(this.userState.dialogData);
        if(oldData!==newData){
          this.$confirm('检测到您修改了内容，确定离开?', '提示信息', {
            distinguishCancelAndClose: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消'
          }).then(() => {this.userState.dialogShow = false}).catch(()=>{})
        }else{
          this.userState.dialogShow = false
        }
      },
      addOrUpdate() {
        this.$emit("addOrUpdateEvent");
      },
    },
  };
</script>
<style scoped>
</style>
