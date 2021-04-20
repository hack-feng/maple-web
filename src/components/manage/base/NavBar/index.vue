<template>
  <div class="flex">
    <div class="nav-bar-container">
        <i v-model="manageState.isCollapse"
          :class="manageState.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          :title="manageState.isCollapse ? '展开' : '收起'"
          class="fold-unfold"
           @click="test1()"
        ></i>
    </div>
    <div class="breadEval">
      <div class="breadTitle">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>您的位置：</el-breadcrumb-item>
          <el-breadcrumb-item :to="item.path" v-for="item of breadListLast" :key="item.path">
            {{item.name}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

  export default {
    name: 'NavBar',
    data() {
      return {
        //手动配置项：breadListIm为路由与面包屑名称对应关系,breadLoadName为面包屑组件路由
        breadLoadName: '/manage',
        breadListIm: [
          {
            path: 'user',
            name: '用户'
          },
          {
            path: 'add',
            name: '二级'
          },
          {
            path: '03',
            name: '三级'
          },
        ],
        breadListLast: []
      };
    },
    computed: {
      ...mapState({
        rootState: state => state,
        manageState: state => state.Manage
      })
    },
    methods:{
      test1(){
        let isCollapse = this.manageState.isCollapse
        this.manageState.isCollapse = !isCollapse;
      },
      loadChange() {
        debugger
        this.breadListLast = []
        if (this.$route.path.indexOf(this.breadLoadName) === -1) {
          console.log('面包屑路由地址breadLoadName没有配置正确！')
        } else {
          debugger
          let breadListAgo = this.$route.path.split(this.breadLoadName)
          console.log("0", breadListAgo)

          // let breadListAgo = '/index/indexSchool/breadList/01/02/03'.split(this.breadLoadName)
          let breadList = breadListAgo[1].split('/')
          let obje = {}
          let breadIndex = ''
          //删除掉数组的前1个，提升遍历性能
          breadList.splice(0, 1)
          //考虑到顺序问题，只能先遍历breadList,再遍历breadListIm
          console.log("1", breadList)
          console.log("2", this.breadListIm)
          for (let p of breadList) {
            for (let q of this.breadListIm) {
              if (p === q.path) {
                breadIndex += '/' + q.path
                obje.path = breadListAgo[0] + this.breadLoadName + breadIndex
                obje.name = q.name
                this.breadListLast.push(obje)
                obje = {}
              }
            }
          }
        }
        console.log(JSON.stringify(this.breadListLast))
      }
    },
    watch: {
      $route(to, from) {
        this.loadChange()
      }
    },
    //页面挂载之后,解析路由，给出面包屑，路由里面一定要含有breadCom组件的path
    mounted: function () {
      this.loadChange()
    }
  }
</script>

<style scoped>
  .nav-bar-container{
    margin: 17px 15px;
  }

  .breadEval {
    position: relative;
    font-size: 14px;
    height: 100%;
    background: #F3F7FD;
  }
  .breadTitle{
    padding: 20px 30px;
    background: #fff;
  }
</style>
