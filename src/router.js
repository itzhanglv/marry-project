import Vue from 'vue'
import VueRouter from 'vue-router'
import homeComponent from './components/homeContaner/homeComponent.vue'
import taocanComponent from './components/taocan/taocanComponent.vue'
import inviteComponent from './components/invite/inviteComponent.vue'
import concatComponent from './components/concat/concatComponent.vue'
import taocanItem from './components/taocan/taocanItem.vue'
Vue.use(VueRouter)
var router=new VueRouter({
    routes:[
      {path:'/',redirect:'/home'},
      {path:'/home',component:homeComponent},
      {path:'/taocan',component:taocanComponent},
      {path:'/invite',component:inviteComponent},
      {path:'/concat',component:concatComponent},
      {path:'/taocan/item/:id',component:taocanItem}
    ]
})
export default router