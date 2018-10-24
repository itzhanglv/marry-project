<template>
  <div id="app">
    <!--首页头部信息:使用mint-ui的header组件-->
   <mt-header fixed title="中国婚庆：爱尚你">
      <!-- <span  slot="left">  @click="goback" v-show="flag" 
            <mt-button icon="back"><返回</mt-button>
      </span> -->
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
   <!--首页显示区-->
   <router-view></router-view>
   <!--首页底部信息：使用mui的tabbar组件-->
  <mt-tabbar fixed v-model="selected">
    
      <mt-tab-item id="首页" href="#/home">
        <img slot="icon" src="./images/home.png">
        首页
      </mt-tab-item>
      <!-- <router-link class="mint-tab-item" to="/taocan" id="套餐">
        <img slot="icon" src="./images/tc.png">
        套餐
      </router-link> -->
      <mt-tab-item id="套餐" href="#/taocan">
        <img slot="icon" src="./images/tc.png">
        套餐
      </mt-tab-item>
      <mt-tab-item id="邀请函" href="#/invite">
        <img slot="icon" src="./images/invite.png">
        邀请函
      </mt-tab-item>
      <mt-tab-item id="联系我们" href="#/concat">
        <img slot="icon" src="./images/call.png">
        联系我们
      </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>


export default {
  data:function(){
    return {
      selected:'首页'
    }
  }
}
</script>

<style>
#app {
  padding-top: 40px;
  padding-bottom: 55px;
}
.mint-header {
  background-color: pink !important;
}
.mint-tab-item-label{
  color:pink !important;
}
</style>
