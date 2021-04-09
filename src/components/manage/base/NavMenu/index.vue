<template>
  <div>
    <!--<el-radio-group v-model="isCollapse">-->
      <!--<el-radio-button :label="false">展开</el-radio-button>-->
      <!--<el-radio-button :label="true">收起</el-radio-button>-->
    <!--</el-radio-group>-->
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b"
      default-active="1-4-1"
      :collapse="isCollapse"
      router>

      <template v-for="item in navMenuData">
        <el-menu-item :index="item.index" v-if="!item.child">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>

        <el-submenu :index="item.index" v-if="item.child">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <template v-for="item2 in item.child">
            <el-menu-item :index="item2.index" v-if="!item2.child">{{item2.name}}</el-menu-item>
            <el-submenu :index="item2.index" v-if="item2.child">
              <span slot="title">{{item2.name}}</span>
              <template v-for="item3 in item2.child">
                <el-menu-item :index="item3.index">{{item3.name}}</el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: "home",
        isCollapse: false,
        navMenuData: [
          {index: "home", name: "首页"},
          {index: "user", name: "用户"},
          {index: "novel", name: "小说"},
          {
            index: "2",
            name: "我的工作台",
            child: [{index: "2-1", name: "选项1"}, {index: "2-2", name: "选项2"}, {index: "2-3", name: "选项3"}]
          },
          {index: "login", name: "控制台"},
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      this.activeIndex = this.$route.path.substring(1, this.$route.path.length);
    }
  };
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
