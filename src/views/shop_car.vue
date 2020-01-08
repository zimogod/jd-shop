<template>
  <div class="Shop_car">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <div v-if="goodsList.length>0" class="shop_car_main">
      <div class="shop_car_main_top">
        <div>
          <van-checkbox v-model="allChecked" checked-color="#ee0a24" @click="change">全选</van-checkbox>
        </div>
        <div>
          JD京东自营
          <img class="car_img1" :src="imgUrl" />
        </div>
      </div>

      <div class="shop_car_main_top2"></div>
      <div class="shop_car_main_main" v-for="(item,index) in goodsList" :key="index">
        <van-checkbox
          v-model="item.checked"
          :value="item.id"
          @click="chooseChange(item.id)"
          checked-color="#ee0a24"
        ></van-checkbox>
        <img class="car_img2" :src="item.goodimg" />
        <div class="shop_car_main_main_right">
          <div class="shop_car_main_main_right_text">{{item.info}}</div>
          <div class="zongliang">
            <span>重量:0.39kg</span>
            <span>选服务</span>
          </div>
          <div class="press_div">
            <span class="span_press">￥{{item.price}}</span>
            <span class="jisuan">
              <button @click="reduce(index)">-</button>
              <span class="jisuan_span">{{item.num1}}</span>
              <button @click="addNum(index)">+</button>
            </span>
          </div>
        </div>
      </div>
      <div class="submit_money">
        <span>总价：￥&nbsp;&nbsp;{{ totalMoney }}</span>
        <button @click="CLEAR_GOODSLIST">清空购物车</button>
        <span>结算</span>
      </div>
    </div>
    <div v-else class="no-goods-car">求你了，买点儿东西吧！</div>
    <!-- 为你推荐 -->
    <Forus />
  </div>
</template>
<script>
import Forus from "../components/forus";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Shop_car",
  components: { Forus },
  data() {
    return {
      allChecked: false,
      selectedData: [],
      imgUrl: require("../assets/logo.png"),
    };
  },
  computed: {
    ...mapState(["goodsList"]),
    ...mapGetters(["totalMoney"]),

  // 判断goodsList里面的ID和新数组里面的ID相等，当前goodsList里面的当前项的num和price进行
  // 计算，再进行+=计算
  },
  mounted() {},
  methods: {
    ...mapActions(['CLEAR_GOODSLIST']),
    // 全选复选框
    change() {
      let list = this.goodsList;
      // console.log(this.allChecked,'===')
      if (this.allChecked) {
        // 全选之后 每一条数据都已经是checked,需要把checked状态修改为false
        list.forEach(item => {
          item.checked = false;
        });
        this.selectedData = [];
      } else {
        list.forEach(item => {
          item.checked = true;
          if (this.selectedData.indexOf(item.id) < 0) {
            this.selectedData.push(item.id);
          }
        });
        // console.log(this.selectedData,'===');
      }
    },
    // 单独的复选框
    chooseChange(id) {
      // console.log(id,'==')
      // 在新数组里面查找当前项的id是否存在
      if (this.selectedData.indexOf(id) > -1) {
        // 先清空数组里面的数据ID
        this.remove(this.selectedData, id);
      } else {
        // 没有找到则当前的ID push()进去
        this.selectedData.push(id);
      }
      // 判断全选状态和每条数据的关系
      // 如果循环的数组长度大于选中数据的数组长度，则让全选的状态为false
      if (this.selectedData.length < this.goodsList.length) {
        this.allChecked = false;
      } else {
        this.allChecked = true;
      }
      console.log(this.selectedData,this.goodsList);
    },
    remove(arr, val) {
      // val:代表的是ID
      // arr：代表的是数组
      var index = arr.indexOf(val);
      if (index > -1) {
        arr.splice(index, 1);
      }
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    addNum(index) {
      this.goodsList[index].num1++;
    },
    reduce(index) {
      this.goodsList[index].num1 > 1
        ? this.goodsList[index].num1--
        : this.goodsList.splice(index, 1);
    }
  },
  created() {
    // this.filterGoodsList();
  }
};
</script>
<style lang="less">
.btn {
  margin-left: 80px;
}
.van-submit-bar {
  position: absolute;
  left: 0;
  bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
}
.Shop_car {
  background: #ccc;
  margin-bottom: 120px;
}
.shop_car_main {
  background-color: white;
  // margin-top: 54px;
  padding: 5px 10px;
}
.no-goods-car{
  width: 100%;
  height:1.5rem;
  background: #fff;
  text-align: center;
  line-height: 1.5rem;
}
.shop_car_top {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  font-family: Microsoft Yahei;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
}
.shop_car_top_span {
  position: absolute;
  right: 20px;
  left: 290px;
  color: rgba(153, 153, 153, 1);
  font-size: 15px;
  font-family: PingFangSC-regular;
}
.car_img1 {
  width: 20px;
  height: 20px;
}
.car_img2 {
  width: 0.9rem;
  height: 0.93rem;
}
.shop_car_main_main_right {
  height: 0.93rem;
}
.shop_car_main_main {
  display: flex;
  height: 1rem;
  justify-content: space-around;
  margin: 0.1rem;
  align-items: center;
}
.shop_car_main_top {
  padding: 10px 5px 20px 5px;
  display: flex;
  justify-content: space-between;
}
.shop_car_main_top2 {
  padding: 0px 5px 5px 5px;
  display: flex;
  justify-content: space-between;
}
.zongliang {
  display: flex;
  justify-content: space-between;
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.shop_car_main_foot {
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.shop_car_main_main_right_text {
  width: 180px;
  font-size: 13px;
}
.span_press {
  color: rgba(242, 48, 48, 1);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.press_div {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
}
.press_div button {
  border: none;
  background-color: white;
  font-size: 20px;
}
.jisuan {
  width: 86px;
  height: 24px;
  line-height: 17px;
  color: rgba(51, 51, 51, 1);
  font-size: 12px;
  text-align: center;
  font-family: SFUIText-regular;
  display: inline-block;
}
.submit_money {
  width: 100%;
  height: 0.49rem;
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:nth-of-type(2) {
    margin-right: 0.2rem;
  }
}
.jisuan_span {
  width: 40px;
  display: inline-block;
}
</style>