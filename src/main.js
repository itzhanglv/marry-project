import Vue from 'vue'
import App from './App.vue'
import 'mint-ui/lib/style.css'
import {Header,Button,Tabbar, TabItem,Swipe, SwipeItem} from 'mint-ui'
import router from './router.js'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// import './lib/mui/js/mui.min.js'

Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
