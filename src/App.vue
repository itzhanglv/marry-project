<template>
  <div id="app">
    <!--首页头部信息:使用mint-ui的header组件-->
   <mt-header fixed title="中国婚庆：爱尚你">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click='getBack' v-show="flag">返回</mt-button>
      </router-link>
   </mt-header>
   <!--首页显示区-->
   <transition>
      <router-view></router-view>
   </transition>
   <!--首页底部信息：使用mui的tabbar组件-->
  <mt-tabbar fixed v-model="selected">
    
      <mt-tab-item id="首页" href="#/home">
        <img slot="icon" src="./images/home.png">
        首页
      </mt-tab-item>
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
      selected:'首页',
      flag:true
    }
  },
  created:function(){
   this.getFocus()
  },
  methods:{
    getFocus:function(){
     if(this.$route.path==='/home'){
        this.selected='首页'
        this.flag=false
      }else if(this.$route.path.indexOf('/taocan')!=-1) {
        this.selected='套餐'
      }else if(this.$route.path.indexOf('/invite')!=-1){
        this.selected='邀请函'
      }else {
        this.selected='联系我们'
      }
    },
    getBack:function(){
      if(this.$route.path==='/home'){
        return
      }
      this.$router.go(-1)
    }
  },
  watch:{
    $route:function(newValue,oldValue){
      if(this.$route.path==='/home'){
        this.selected='首页'
        this.flag=false
        return
      }else if(this.$route.path.indexOf('/taocan')!=-1) {
        this.selected='套餐'
      }else if(this.$route.path.indexOf('/invite')!=-1){
        this.selected='邀请函'
      }else {
        this.selected='联系我们'
      }
      this.flag=true
    }
  }
}
</script>

<style>
#app {
  padding-top: 40px;
  padding-bottom: 55px;
  overflow-x: hidden;
  overflow-y:hidden;
}
.mint-header {
  background-color: pink !important;
}
.mint-tab-item-label{
  color:pink !important;
}
.mint-tabbar {
  height: 375px;
  height: 55px;
  overflow: hidden;
}
.router-link-active {
  display: inline-block;
  width: 48px;
  height: 41px;
}
/*动画效果*/
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter,.v-leave-to {
  opacity: 0;
 
}
.v-enter {
  transform: translateX(100%);
}
.v-leave-to {
  transform:translateX(-100%);
   position: absolute;
}
/* .v-enter{
        opacity: 0;
      transform:translateX(100%);
    }
    .v-leave{
        opacity: 0;
        transform:translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition:all 0.5s ease; 
    } */
</style>
