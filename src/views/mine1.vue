<template>
  <div class="Mine">
    <div class="mine_top">
      <img class="main_top_img" :src="imgUrl" />
      <div class="mine_top_right">
        <span>昵称</span>
        <div>
          <div class="jindutiao">
            <div class="jindutiao_in"></div>
          </div>
          <span>78.3小白信用分</span>
        </div>
        <span>金牌会员</span>
      </div>
    </div>
    <div class="mine_nav">
      <div>待付款</div>
      <div>待收货</div>
      <div>待评价</div>
      <div>退货/售后</div>
      <div>我的订单</div>
    </div>
    <div class="mine_nav mine_nav1">
      <div>
        <span>684</span>
        <br />
        <span class="mine_span1">京豆</span>
      </div>
      <div>
        <span>684</span>
        <br />
        <span class="mine_span1">京豆</span>
      </div>
      <div>
        <span>684</span>
        <br />
        <span class="mine_span1">京豆</span>
        <br />
        <span class="mine_span2">七日代还</span>
      </div>
      <div>
        <span>684</span>
        <br />
        <span class="mine_span1">京豆</span>
        <br />
        <span class="mine_span2">昨日收益</span>
      </div>
      <div>
        <img :src="imgUrl" alt />
        <span>我的钱包</span>
      </div>
    </div>

    <!-- 我的关注 -->
    <div class="mine_guanzhu">
      <div class="mine_nav mine_nav2">
        <div>
          <span>2</span>
          <br />
          <span>商品关注</span>
        </div>
        <div>
          <span>2</span>
          <br />
          <span>店铺关注</span>
        </div>
        <div>
          <span>31</span>
          <br />
          <span>浏览记录</span>
        </div>
        <div>
          <img :src="imgUrl" />
          <br />
          <span>客服服务</span>
        </div>
      </div>

      <div class="mine_nav">
        <div>
          <img :src="imgUrl" />
          <br />
          <span class="mine_span1">我的活动</span>
          <br />
          <span class="mine_span2">预售/拍卖等</span>
        </div>
        <div>
          <img :src="imgUrl" />
          <br />
          <span class="mine_span1">我的活动</span>
          <br />
          <span class="mine_span2">有料有福利</span>
        </div>
        <div>
          <img :src="imgUrl" />
          <br />
          <span class="mine_span1">我的活动</span>
          <br />
        </div>
        <div>
          <img :src="imgUrl" />
          <br />
          <span class="mine_span1">我的活动</span>
          <br />
        </div>
      </div>
    </div>

    <!-- 为你推荐 -->
    <Forus />
  </div>
</template>
<script>
import Forus from "../components/forus";
export default {
  name: "Mine",
  components: { Forus },
  data() {
    return {
      imgUrl: require("../assets/logo.png")
    };
  },
  created(){
    // window.localStorage.removeItem('userInfo');
  },
  // beforeRouteEnter(to,from,next){
  //   if(to.path == '/admin/mine'){
  //     // 此时，组件还在渲染阶段，不能直接访问this,可以通过vm的实力对象进行操作
  //     // vm：其实就是vue的实力对象
  //     next((v)=>{
  //       // console.log(v)
  //       alert('确定要进入个人中心吗？')
  //     })
  //   }
  // },
  mounted(){
    
  }
};
</script>
<style lang="less">
.Mine {
  background: #ccc;
  .mine_top {
    display: flex;
    justify-content: space-around;
  }
  .jindutiao {
    width: 64px;
    height: 3px;
    border-radius: 2px;
    background-color: rgba(51, 51, 51, 1);
  }
  .jindutiao_in {
    width: 44px;
    height: 3px;
    border-radius: 2px;
    background-color: rgba(204, 204, 204, 1);
  }
  .main_top_img {
    width: 60px;
    height: 60px;
    margin-left: 17px;
    margin-top: 45px;
    border-radius: 30px;
    background-color: rgba(204, 204, 204, 1);
  }
  .mine_top_right {
    flex: 1;
    margin-top: 45px;
    padding-left: 20px;
  }
  // 我的页面
  .Mine {
    background-color: #eee;
    margin-bottom: 70px;
  }
  .shop_car_main_main{
    margin-top:.1rem;
  }
  .mine_top {
    width: 100%;
    height: 134px;
    background-color: rgba(240, 92, 58, 1);
  }
  .mine_nav {
    display: flex;
    padding-top: 10px;
    background-color: white;
    justify-content: space-between;
  }
  .mine_nav1 {
    height: 70px;
    border-top: 1px solid rgb(22, 21, 21);
    margin-bottom: 10px;
  }
  .mine_nav div {
    width: 75px;
    height: 32px;
    line-height: 17px;
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    text-align: center;
    font-family: PingFangSC-regular;
  }
  .mine_nav img {
    width: 20px;
    height: 20px;
  }
  .mine_span1 {
    display: inline-block;
    margin-top: 10px;
  }
  .mine_span2 {
    line-height: 13px;
    color: rgba(153, 153, 153, 1);
    font-size: 9px;
    text-align: center;
    font-family: PingFangSC-regular;
  }

  // 我的关注
  .mine_guanzhu {
    left: 0px;
    height: 164px;
    line-height: 20px;
    text-align: center;
    background-color: white;
  }
  .mine_nav2 {
    padding-bottom: 20px;
    border-bottom: solid 1px gray;
  }
}
// 顶部内容
</style>