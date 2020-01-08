import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var str = 'fhdjkfhsdkjfhklsdfhidsjsjflkasjflkdsjflkjdgjfdg';
var obj = {
  adminUser:'admin',
  token:`token${str}`
};
window.localStorage.setItem('userInfo',JSON.stringify(obj));

const routes = [
  {
    path:'/login',
    name:'login',
    component: () => import( '../views/login/login'),
    meta:{
      isAdmin:true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../admin'),
    redirect:'/admin/index',
    meta:{
      isAdmin:true,
    },
    children:[
      {
        path:'/admin/index',
        alias:'首页',
        name:'Index',
        component: () => import( '../views/index'),
        meta:{
          isAdmin:true,
        },
      },
      {
        path:'/admin/sort',
        alias:'分类',
        name:'sort',
        component: () => import( '../views/sort'),
        redirect:'/sort/supermaket',
        children:[
          {
            path:'/sort/supermaket',
            alias:'推荐部分',
            name:'supermaket',
            meta:{
              isAdmin:false,
            },
            component: () => import( '../views/super/supermaket'),
          },
          {
            path:'/sort/supermaket1',
            alias:'推荐部分1',
            name:'supermaket1',
            component: () => import( '../views/super/supermaket1'),
          },
          {
            path:'/sort/supermaket2',
            alias:'推荐部分2',
            name:'supermaket2',
            component: () => import( '../views/super/supermaket2'),
          },
        ]
      },
      {
        path:'/admin/car',
        alias:'购物车',
        name:'car',
        meta:{
          isAdmin:true,
        },
        // beforeEnter:(to,from,next)=>{
        //   if(to.path == '/admin/car'){
        //     alert('我一定要去购物车');
        //     next();
        //   }
        // },
        component: () => import( '../views/shop_car'),
      },
      {
        path:'/admin/mine',
        alias:'我的',
        name:'mine',
        meta:{
          isAdmin:true,
        },
        component: () => import( '../views/mine1'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 前置路由守卫
// router.beforeEach((to,from,next)=>{
//   console.log(to,from)
//   if(to.path!="/admin/mine"){
//     // 判断是否是管理员，是管理员则不拦截，否则拦截到登录页面
//     let auth = to.meta.isAdmin;
//     if(auth){
//       next();
//     }else{
//       next({path:'/login'});
//     }
//   }else{
//     next({path:'/login'})
//   }
// });
// 后置路由守卫 不常用
// router.afterEach((to,from)=>{
//   if(to.path == '/admin/index'){
//     alert('确定要离开吗？');
//   }
// });
// console.log(router)
export default router;
