<template>
  <div>
    <TableArea
      ref="TableArea"
      @getTableList="getTableList">
    </TableArea>
  </div>
</template>

<script>
import DialogArea from "./dialogArea";
import OperatorArea from "./operatorArea";
import SearchArea from "./searchArea";
import TableArea from "./tableArea";
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
    DialogArea, OperatorArea, SearchArea, TableArea
  },
  created(){ this.getTableList(); },
  methods: {
    // 获取角色列表
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
