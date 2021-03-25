<template>
  <div class="article-content">
    <div class="left">

    </div>
    <div class="right">
      <div class="article-title">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <template v-for="item in tabList">
            <el-tab-pane :label="item.label" :name="item.name">
              <div class="article-list" style="overflow:auto">
                <ul class="list">
                  <li v-for="i in count" class="list-item">{{ i }}</li>
                </ul>
                <p v-if="loading">加载中...</p>
                <p v-if="noMore">没有更多了</p>
              </div>
            </el-tab-pane>
          </template>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 10,
                loading: false,
                activeName: 'all',
                tabList:[
                  { id: "1", label: "全部", name: "all" },
                  { id: "2", label: "最近", name: "now" },
                  { id: "3", label: "测试", name: "test" }
                ]
            }
        },
        computed: {
            noMore () {
                return this.count >= 20
            },
            disabled () {
                return this.loading || this.noMore
            }
        },
        methods: {
            load () {
                this.loading = true
                setTimeout(() => {
                    this.count += 2
                this.loading = false
                }, 2000)
            },
            handleClick(tab, event) {
            }
        }
    }
</script>

<style>
  .article-content{
    background-color: #f4f5f5;
    max-width: 1366px;
    width: 100%;
    padding: 0 68px;
    min-height: 700px;
    margin: 16px auto 0;
    display: flex;
  }
  .left{
    background-color: #fff;
    width: 300px;
    margin-right: 16px;
  }
  .right{
    width: 1000px;
  }

  .article-title{
    background-color: #fff;
    height: 40px;
  }

  .article-list{
    margin-bottom: 15px;
    background-color: #fff;
    height: 200px;
  }
</style>

