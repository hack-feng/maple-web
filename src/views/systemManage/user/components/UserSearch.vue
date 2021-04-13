<template>
  <div>
    <div class="listTemplateOperator">
      <el-button icon="el-icon-plus" type="primary" @click="addEvent">
        添加
      </el-button>
      <el-button icon="el-icon-delete" type="danger" @click="handleDelete">
        批量删除
      </el-button>
    </div>
    <div class="listTemplateSearch">
      <el-form ref="userForm" :inline="true" :model="userState.searchForm" label-width="80px">
        <el-row>
          <el-col :span="24">
            <el-form-item label="用户名称">
              <el-input v-model.trim="userState.searchForm.account" clearable></el-input>
            </el-form-item>
            <el-button type="primary" @click="$emit('getTableList', 1)">查询</el-button>
            <el-button type="primary" @click="resetSearchForm">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapState} from 'vuex';
  export default {
    computed:{
      ...mapState({ userState: state=>state.User })
    },
    methods: {
      addEvent(){
        this.userState.dialogType = '新增';
        this.userState.dialogShow = true;
        this.plugins.resetObjectValue(this.userState.dialogData);
      },
      resetSearchForm(){
        this.userState.searchForm.name = "";
        this.$emit('getTableList', 1)
      }
    }

  }
</script>

<style scoped>

</style>
