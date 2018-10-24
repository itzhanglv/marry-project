<template>
<div class="tc-list">
    <div class="tc-item">
     <div class="photo">
     <!-- <img src="../../images/widding1.jpg"> -->
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六\道具一、道具二、道具三、道具四、道具五、道具六</p>
       <p class="price">￥2000-3000</p>
     </div>
    </div>

     <div class="tc-item">
     <div class="photo">
     <!-- <img src="../../images/widding1.jpg"> -->
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六\道具一、道具二、道具三、道具四、道具五、道具六</p>
       <p class="price">￥2000-3000</p>
     </div>
    </div>

     <div class="tc-item">
     <div class="photo">
     <!-- <img src="../../images/widding1.jpg"> -->
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六\道具一、道具二、道具三、道具四、道具五、道具六</p>
       <p class="price">￥2000-3000</p>
     </div>
    </div>

     <div class="tc-item">
     <div class="photo">
     <!-- <img src="../../images/widding1.jpg"> -->
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六\道具一、道具二、道具三、道具四、道具五、道具六</p>
       <p class="price">￥2000-3000</p>
     </div>
    </div>

    
     <div class="tc-item">
     <div class="photo">
     <!-- <img src="../../images/widding1.jpg"> -->
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六\道具一、道具二、道具三、道具四、道具五、道具六</p>
       <p class="price">￥2000-3000</p>
     </div>
    </div>

    
     <div class="tc-item">
     <div class="photo">
     <!-- <img src="../../images/widding1.jpg"> -->
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六\道具一、道具二、道具三、道具四、道具五、道具六</p>
       <p class="price">￥2000-3000</p>
     </div>
    </div>

    
     <div class="tc-item">
     <div class="photo">
     <!-- <img src="../../images/widding1.jpg"> -->
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六\道具一、道具二、道具三、道具四、道具五、道具六</p>
       <p class="price">￥2000-3000</p>
     </div>
    </div>

    
     <div class="tc-item">
     <div class="photo">
     <!-- <img src="../../images/widding1.jpg"> -->
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六\道具一、道具二、道具三、道具四、道具五、道具六</p>
       <p class="price">￥2000-3000</p>
     </div>
    </div>

    
     <div class="tc-item">
     <div class="photo">
     <!-- <img src="../../images/widding1.jpg"> -->
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六\道具一、道具二、道具三、道具四、道具五、道具六</p>
       <p class="price">￥2000-3000</p>
     </div>
    </div>

</div>
</template>
<script>
 export default {}
</script>
<style lang="scss" scoped>
.tc-list {
    height: 100px;
    .tc-item {
        display: flex;
        justify-content: space-between;
        box-shadow: 2px 2px 3px #ccc;
        background-color: #fff;
        margin:10px;
        .photo {
            width: 100px;
            background: url(../../images/widding1.jpg);
            background-size:cover;
        }
        .details{
            padding-left: 10px;
            padding-right: 10px;
            .title {
                color: #000;
                font-weight: 700;
            }
            .tools {
                color: #000;
                font-size: 12px;
                width: 245px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin:15px 0;
            }
            .price {
               color:red;
               font-size: 14px;
            }
        }
    }
}
</style>

