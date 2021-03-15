<template>
    <div id="NavMenu">
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                router
        >
            <img src="../../assets/logo.png">
            <template v-for="item in navMenuData">
                <el-menu-item :index="item.index" v-if="!item.child">{{item.name}}</el-menu-item>

                <el-submenu :index="item.index" v-if="item.child">
                    <template slot="title">{{item.name}}</template>
                    <template v-for="item2 in item.child">
                        <el-menu-item :index="item2.index">{{item2.name}}</el-menu-item>
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
        margin: 0 auto;
        max-width: 1200px;
    }
    .el-menu{
        background-color: transparent !important;
    }
    img{
        float:left;
        max-height: 55px;
        margin-right: 30px;
    }
</style>