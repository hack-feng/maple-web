<template>
  <div>
    <UserSearch/>
    <UserTable
      ref="TableArea"
      @getTableList="getTableList">
    </UserTable>
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
        this.$refs.DialogArea.$refs["form"].validate((valid) => {
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
                this.getTableList(this.userState.dialogType === "add" ? 1 : false);
              }
            });
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
