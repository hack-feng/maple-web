<template>
  <el-table
    :data="userState.tableList"
    style="width: 100%">
    <el-table-column
      prop="account"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="nickName"
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间">
      <template slot-scope="scope">
        <div>
          {{plugins.changeDate(scope.row.createTime, "yymmddhhmmss")}}
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
      <template slot-scope="scope">
        <el-link
          v-if="scope.row.status === 0" >解锁</el-link>
        <span v-else>正常</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right" align="center" width="130">
      <template slot="header">
        <span class="headerTitle">操作</span>
      </template>
      <template slot-scope="scope">
        <div style="display: flex;justify-content: space-around">
          <span @click="updateEvent(scope.row)">编辑</span>
          <span @click="$emit('deleteEvent', [scope.row.id])">删除</span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      rootState: state => state,
      userState: state => state.User
    }),
  },
  data() {
    return {
    }
  },
  methods: {
    updateEvent(data) {
      this.userState.dialogType = "修改";
      this.userState.dialogShow = true;
      this.userState.dialogData = this.plugins.deepFullCopy(data);
    },
  }
}
</script>

<style scoped>

</style>
