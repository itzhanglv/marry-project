<template>
<div class="home">
<!--婚礼轮播图-->
<mt-swipe :auto="4000">
  <mt-swipe-item><img src="../../images/swipe1.jpeg"></mt-swipe-item>
  <mt-swipe-item><img src="../../images/swipe2.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../images/swipe3.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../images/swipe4.jpeg"></mt-swipe-item>
  <mt-swipe-item><img src="../../images/swipe5.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../images/swipe6.jpg"></mt-swipe-item>
</mt-swipe>
<!--精选婚礼照片-->
<div class="selectPhoto">
    <h5 class="title">精选婚礼照片</h5>
<ul class="photoItems">
    <li class="photo-item">
        <img src="../../images/widding1.jpg">
        <p class="introduce">李先生&张女士</p>
    </li>
    <li class="photo-item">
        <img src="../../images/widding2.jpg">
        <p class="introduce">李先生&张女士</p>
    </li>
    <li class="photo-item">
        <img src="../../images/widding3.jpg">
        <p class="introduce">李先生&张女士</p>
    </li>
</ul>
</div>
</div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.home {
background-color:rgba(254, 193, 204,0.3);
.mint-swipe{
    height: 200px;
  .mint-swipe-item {
    //   height: 100%;
      overflow: hidden;
      img{
          width: 100%;
      }
  }
}
.selectPhoto{
    margin-top: 20px;
    .title {
        text-align: center;
        color: #000;
        margin-bottom: 10px;
    }
    .photoItems {
        list-style: none;
        width: 350px;
        margin: 0 auto;
        padding:0;
        .photo-item {
            img {
                width: 100%;
                box-shadow: 3px 3px 3px 2px #ccc;
            }
            .introduce {
                text-align: center;
                font-size: 12px;
                color: #000;
                margin-bottom: 0;
            }
        }
    }
}
}
</style>
