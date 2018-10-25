<template>
<div class="tc-list">
    <router-link v-for='item in tcList' :key='item.id' class="tc-item" :to="'/taocan/item/'+item.id+'?name='+item.name" >
      <div class="photo">
     </div>
     <div class="details">
       <h5 class="title">{{item.name}}</h5>
       <p class="tools">{{item.desc}}</p>
       <p class="price">{{item.price}}</p>
     </div>
    </router-link>
    <router-link  class="tc-item" to="/taocan/item/1" >
      <div class="photo">
     </div>
     <div class="details">
       <h5 class="title">套餐一</h5>
       <p class="tools">道具一、道具二、道具三、道具四、道具五、道具六、道具七</p>
       <p class="price">￥5000-8000</p>
     </div>
    </router-link>

</div>
</template>
<script>
 export default {
   data:function(){
     return {
       tcList:[]
     }
   },
   created:function(){
    //  this.getTcList()
   },
   methods:{
     getTcList:function(){
       this.$http.get('tc/list').then(result=>{
         if(result.body.status==0){
           this.tcList=result.body.data
         }
       })
     }
   }
 }
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
            height: 100px;
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

