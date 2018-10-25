<template>
<div class="tc-details">
  <h5 class="title">{{tcName}}</h5>
  <!--婚礼现场轮播图-->
  <mt-swipe :auto="4000">
  <!-- <mt-swipe-item v-for='(item,index) in tcItemlbt' :key='index'><img :src="item.url"></mt-swipe-item> -->
  <mt-swipe-item><img src="../../images/widding3.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../images/widding4.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../images/widding5.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../images/widding6.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../images/widding7.jpg"></mt-swipe-item>
</mt-swipe>
<!--套系内容：九宫格使用mui的grid-default-->
    <div class="mui-content">
		<ul class="mui-table-view mui-grid-view mui-grid-9">
            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for='(item,index) in tcItemtxnr' :key='index'>
                        <a href="#">
		                    <img :src="item.url">
		                    <div class="mui-media-body">{{item.name}}</div>
                        </a>
            </li> -->
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/widding/y19.png">
		                    <div class="mui-media-body">仪式</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/widding/y21.png">
		                    <div class="mui-media-body">婚纱礼服</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/widding/y6.png">
		                    <div class="mui-media-body">造型</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/widding/y23.png">
		                    <div class="mui-media-body">摄影摄像</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/widding/y18.png">
		                    <div class="mui-media-body">酒水</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/widding/y2.png">
		                    <div class="mui-media-body">用餐</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/widding/y17.png">
		                    <div class="mui-media-body">专车接送</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/widding/y3.png">
		                    <div class="mui-media-body">酒店住宿</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body more">更多</div>
                        </a>
                    </li>
		</ul> 
	</div>
    <!--团队配置-->
    <div class="team-config" v-for='(item,index) in tcItemothers' :key='index'>
        <h5 class='title'>{{item.title}}</h5>
     <ul>
         <!-- <li v-for='(i,id) in item.items' :key='id'>
             <span class='mui-icon mui-icon-star-filled'></span>
             {{i}}
         </li> -->
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             国内顶级策划师1位
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             专业婚礼执行2位
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             婚礼管家全程24小时服务
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             婚礼牧师主持仪式
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             资深婚礼化妆师一对一全程跟妆服务
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             双机位资深摄影师2位
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             国内专业修片师1位
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             国内专业剪辑师1位
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             服务监督1位
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             现场演奏2弹1唱
         </li>
     </ul>
    </div>
    <!--婚礼内容-->
    <div class="widding-content">
      <h5 class='title'>婚礼内容</h5>
      <ul>
          <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             新人沟通会议
         </li>
         <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             新娘捧花和新郎胸花
         </li>
          <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             幸福通道鲜花布置
         </li>
          <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             鲜花礼成花瓣雨
         </li>
          <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             婚礼浪漫音乐现场演奏
         </li>
          <li>
             <span class='mui-icon mui-icon-star-filled'></span>
             婚礼全程摄影
         </li>
      </ul>
    </div>
</div>
</template>
<script>
export default {
    data:function(){
        return {
            tcItemlbt:[],
            tcItemtxnr:[],
            tcItemothers:[],
            tcName:''
        }
    },
    created:function(){
        // this.getTcName()
        //  this.getTcItem()
    },
    methods:{
        getTcName:function(){
           this.tcName=this.$route.query.name
        },
        getTcItem:function(){
            var id=this.$route.params.id
            this.$http.get('tc/'+id+'/detail').then(result=>{
                if(result.body.status==0){
                    this.tcItemlbt=result.body.data.lbt
                    this.tcItemtxnr=result.body.data.txnr
                    this.tcItemothers=result.body.data.others
                }
            })
        }
    }
};
</script>
<style lang="scss" scoped>
.tc-details {
  .title {
    text-align: center;
    color: #000;
    font-weight: 700;
    margin-top: 10px;
  }
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      width: 100%;
      height: 200px;
      img {
        width: 100%;
      }
    }
  }
  .mui-content {
    margin: 10px;
    border: 1px dashed pink;
    .mui-table-view-cell {
      a {
        display: inline-block;
        width: 87px;
        height: 89px;
        img {
          width: 41px;
          height: 41px;
        }
        .mui-icon-more {
          color: pink;
        }
        .mui-media-body {
          font-size: 12px;
        }
        .more {
          font-size: 12px;
          margin-top: 14px;
        }
      }
    }
  }
  .team-config,
  .widding-content {
    border: 1px dashed pink;
    margin: 10px;
    .title {
      margin-top: 10px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 10px;
      li {
        font-size: 12px;
        span {
          color: pink;
        }
      }
    }
  }
}
</style>
