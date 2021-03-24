<template>
  <div id="NavMenu" class="flex">
    <div>
      <span class="nick-name">笑小枫</span>
      <span class="desc">做一只爱笑爱疯的笑小枫</span>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="rgb(255 255 255 / 0%)"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <template v-for="item in navMenuData">
        <el-menu-item :index="item.index" v-if="!item.child" :key="item.index">{{item.name}}</el-menu-item>

        <el-submenu :index="item.index" v-if="item.child" :key="item.index">
          <template slot="title">{{item.name}}</template>
          <template v-for="item2 in item.child">
            <el-menu-item :index="item2.index" :key="item2.index">{{item2.name}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "NavMenu",
    data() {
      return {
        activeIndex: "home",
        navMenuData: [
          { index: "home", name: "首页" },
          { index: "article", name: "文章管理" },
          { index: "novel", name: "小说" },
          {
            index: "2",
            name: "我的工作台",
            child: [{ index: "2-1", name: "选项1" },{ index: "2-2", name: "选项2" },{ index: "2-3", name: "选项3" }]
          },

        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){
      console.log(this.activeIndex)
      console.log(this.$route.path)
      this.activeIndex = this.$route.path.substring(1,this.$route.path.length);

    }
  };
</script>

<style scoped>
  #NavMenu{
    padding: 0 18%;
  }
  .flex{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  img{
    float:left;
    max-height: 55px;
  }

  .el-menu.el-menu--horizontal{
    border-bottom: solid 0;
  }
  .nick-name{
    font-size: 35px;
    font-family: cursive;
    font-weight: bold;
    color: #fed99c;
  }
  .desc{
    color: #d2ef90;
    font-family: cursive;
    font-weight: bold;
    margin-left: 20px;
    font-size: 20px;
  }
</style>
