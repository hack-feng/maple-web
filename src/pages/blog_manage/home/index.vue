<template>
  <div>
    <div class="page one">
      page1
    </div>
    <div class="page two">
      page2
    </div>
    <div class="page three">
      page3
    </div>
    <div class="page four">
      page4
    </div>
    <div class="page five">
      page4
    </div>
    <div class="page six">
      page4
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .page {
      height: 100vh;
      background-size: 100%;
    }
    .one{
      background-image: url('../../../assets/shouye/b1.jpg');
    }
    .two{
      /* 让图片不重覆排列 */
      background-repeat:no-repeat;
      /* 固定背景图片位置 */
      background-attachment:fixed;
      background-image: url('../../../assets/shouye/b2.jpg');
    }
    .three{
      background-image: url('../../../assets/shouye/b3.jpg');
    }
    .four{
      /* 让图片不重覆排列 */
      background-repeat:no-repeat;
      /* 固定背景图片位置 */
      background-attachment:fixed;
      background-image: url('../../../assets/shouye/b4.jpg');
    }
    .five{
      background-image: url('../../../assets/shouye/b5.jpg');
    }
    .six{
      /* 让图片不重覆排列 */
      background-repeat:no-repeat;
      /* 固定背景图片位置 */
      background-attachment:fixed;
      background-image: url('../../../assets/shouye/b6.jpg');
    }
</style>
