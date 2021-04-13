<template>
  <div>
    <UserSearch @getTableList="getTableList"/>
    <UserTable  ref="TableArea" @getTableList="getTableList" @deleteEvent="deleteEvent"/>
    <UserEdit ref="UserEdit" @addOrUpdateEvent="addOrUpdateEvent"/>
    <Pagination @getTableList="getTableList" :current="userState.current" :total="userState.total"/>
  </div>
</template>

<script>
  import UserEdit from "./components/UserEdit";
  import UserSearch from "./components/UserSearch";
  import UserTable from "./components/UserTable";
  import {mapState} from "vuex";
  import Pagination from "../../../components/manage/Pagination"

  export default {
    name: "index",
    computed: {
      ...mapState({
        rootState: state => state,
        userState: state => state.User
      })
    },
    components: {
      UserEdit, UserSearch, UserTable, Pagination
    },
    data() {
      return {};
    },
    created() {
      this.getTableList();
    },
    methods: {
      getTableList(current) {
        if (current) this.rootState.current = current;
        this.api.post("/user/getList?current=" + this.rootState.current + "&size=" + this.rootState.size, this.userState.searchForm).then((res) => {
          if (res.code === 200) {
            this.userState.tableList = res.data.records;
            this.rootState.total = res.data.total;
            this.$store.dispatch("ROOT_UPDATE_TABLE_HEIGHT", {$}); // 动态设置表格高度
          }
        });
      },
      // 新增或修改角色
      addOrUpdateEvent() {
        this.$refs.UserEdit.$refs["form"].validate((valid) => {
          if (valid) {
            this.$store.dialogBottomShake = true;
            this.$store.dispatch("ROOT_ADD_OR_UPDATE", {
              that: this,
              url: 'user',
              type: this.userState.dialogType,
              data: this.userState.dialogData,
              cb: () => {
                this.userState.dialogShow = false;
                this.userState.selectList = [];
                this.getTableList(this.userState.dialogType === "新增" ? 1 : false);
              }
            });
          }
        })
      },
      // 删除用户
      deleteEvent(id) {
        id = id[0];
        this.$store.dispatch("ROOT_CONFIRM", {
          that: this,
          msg: '删除后将无法恢复',
          cb: () => {
            this.api.post("/user/deleteById/"+id).then(res => {
              if (res.code === 200) {
                this.getTableList();
                this.userState.selectList = [];
                this.$message.success(res.msg);
              }else{
                this.$message.error(res.msg)
              }
            });
          },
          hint: `确认要删除该账号吗？`,
        });
      },
    }
  }
</script>

<style scoped>

</style>
