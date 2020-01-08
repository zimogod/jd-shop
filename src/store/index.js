import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_CAR } from './actions-types'

Vue.use(Vuex)
// 存储数据  小型数据库(没有持久化)
const state = {
  supers:[
    {
      key:1001,
      alias:'推荐',
      path:'/sort/supermaket'
    },
    {
      key:1002,
      alias:'推荐1',
      path:'/sort/supermaket1'
    },
    {
      key:1003,
      alias:'推荐2',
      path:'/sort/supermaket2'
    }
  ],
  goodsList: [],
}
// 同步的方法，state职能通过mutations修改
const mutations = {
  // 添加购物车
  addCar(state,carData){
    // 判断数组内是否存在当前添加的商品数据，如果没有则push添加
    if(state.goodsList.indexOf(carData) < 0){
        Vue.set(carData,'num1',1);
        Vue.set(carData,'checked',false);
        state.goodsList.push(carData);
    }else{
      // 如果有，则让num1++
      let list = state.goodsList.map(item=>{
        // 判断正在添加的数据和否和购物车里面的数据一样，一样则num1++
        if(item.id == carData.id){
          item.num1++;
        }
        return item;
      })
      // 重新手动的将goodsList转换为响应式数据
      Vue.set(state,'goodsList',list);
    }

    // let list = state.goodsList.map(item=>{
    //   Vue.set(item,'num1',1);
    //   Vue.set(item,'checked',false);
    //   if(item.id == carData.id){
    //     item.num1++;
    //   }
    //   return item;
    // })
    // Vue.set(state,'goodsList',list);
  },
  clearCarList(state){
    state.goodsList = [];
  }
}
// 异步提交（commit）同步方法  store.dispatch()派发方法
const actions = {
  [ADD_CAR]({commit},carData){
    commit('addCar',carData);
  },
  CLEAR_GOODSLIST({commit}){
    commit('clearCarList')
  }
}
// vuex中的计算属性，有关于数据计算，拦截数据并导出等用getters
const getters = {
  // 直接计算定义的新数组的
  totalMoney(state){
    let sum = 0;
    state.goodsList.map(item=>{
      // 只有选择之后才进入计算总价格
      if(item.checked == true){
        sum += Number(item.price)*Number(item.num1);
      }
    });
    return sum || 0;
  }
}
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  // modules: {
  // }
})
// console.log(store)
export default store;
