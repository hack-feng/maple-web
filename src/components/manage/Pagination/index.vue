<template>
  <div class="listTemplatePage">
    <el-pagination
      large
      background
      layout="prev, pager, next"
      :page-size="rootState.size"
      :current-page="rootState.current"
      @current-change="changePage"
      :total="rootState.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      rootState: state => state
    })
  },
  data() {
    return {};
  },
  methods: {
    changePage(val) {
      this.rootState.current = val;
      this.$emit("getTableList");
    }
  }
};
</script>
<style scoped>
.listTemplatePage {
  padding-top: 15px;
  text-align: left;
  border: 1px transparent;
}
</style>

<style>
.el-pager > li {
  border: 1px solid #EEEEEE !important;
  background-color: white !important;
  color: black !important;
}
.el-pager > .active {
  border:1px solid #D8D8D8 !important;
  background-color: #EEEEEE !important;
  color: black !important;
}
.btn-prev,
.btn-next {
  border: 1px solid #D8D8D8 !important;
  background-color: white !important;
  color: black !important;
}
</style>
