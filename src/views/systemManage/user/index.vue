<template>
  <div>
    <UserTable
      ref="TableArea"
      @getTableList="getTableList">
    </UserTable>
  </div>
</template>

<script>
import UserEdit from "./components/UserEdit";
import UserSearch from "./components/UserSearch";
import UserTable from "./components/UserTable";
import { mapState } from "vuex";
// import Pagination from "../../../components/manage/Pagination/test1"

export default {
  name: "index",
  computed:{
    ...mapState({
      rootState: state=>state,
      userState: state=>state.User
    })
  },
  components: {
    UserEdit, UserSearch, UserTable
  },
  created(){ this.getTableList(); },
  methods: {
    getTableList(current) {
      if (current) this.rootState.current = current;
      this.api.post("/user/getList?current=" + this.rootState.current + "&size=" + this.rootState.size, this.userState.searchForm).then((res) => {
        if (res.code === 200) {
          this.userState.tableList = res.data.records;
          console.log(res.data.records)
          this.rootState.total = res.data.total;
          this.$store.dispatch("ROOT_UPDATE_TABLE_HEIGHT", {$}); // 动态设置表格高度
        }
      });
    },
  }
}

</script>

<style scoped>

</style>
