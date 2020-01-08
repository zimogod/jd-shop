import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Axios from 'axios'

// 因为axios没有 function install(Vue,options)方法，所以不能使用Vue.use(插件)全局使用

// import './registerServiceWorker'

import { 
  Button,
  Search,
  Swipe, 
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image,
  Pagination,
  Card,
  SubmitBar,
  NavBar,
  Sidebar,
  Skeleton,
  SidebarItem,
  Checkbox,
  CheckboxGroup,
  Field,
  Cell,
  Toast,
  CellGroup
} from 'vant';
// Vue.prototype.$http = Axios;
Vue.config.productionTip = false
Vue.use(Cell).use(CellGroup);
Vue.use(Field);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(SubmitBar);
Vue.use(Sidebar);
Vue.use(Toast);
Vue.use(Skeleton);
Vue.use(SidebarItem);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Card);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Image);
// 使用vant分页
Vue.use(Pagination);
Vue.use(Grid).use(GridItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
