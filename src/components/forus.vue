<template>
  <div class="forus">
    <div class="tils-word">为/你/推/荐</div>
    <div class="contents">
      <dl class="enjoy-list" v-for="(item,i) in enjoy" :key="i">
        <dt>
          <img :src="item.goodimg" />
        </dt>
        <dd>{{ item.info }}</dd>
        <dd>
          <span>{{ item.price }}</span>
          <span @click="ADD_CAR(item)">添加购物车</span>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import {allData} from '../server';
import { mapActions } from 'vuex';
export default {
  name: "forus",
  //   props:['enjoy'],
  data() {
    return {
      value: "",
      enjoy: []
    };
  },
  methods: {
    ...mapActions(['ADD_CAR'])
  },
  mounted() {
    allData().then(res => {
      this.enjoy = res.data;
    });
  }
};
</script>
<style lang="less">
.forus {
  width: 100%;
  background: #ccc;
  .tils-word {
    width:100%;
    background: #ccc;
    height: 0.34rem;
    line-height: .34rem;
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    text-align: center;
    font-family: PingFangSC-regular;
  }
  .contents {
    width:100%;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    .enjoy-list {
      width: 49.5%;
      height: 2.61rem;
      background: #fff;
      margin-bottom: 0.05rem;
      dt {
        text-align: center;
        img {
          width: 90%;
          height: 1.86rem;
        }
      }
      dd:nth-of-type(1) {
        left: 8.5px;
        height: 0.40rem;
        line-height: 18px;
        color: rgba(16, 16, 16, 1);
        font-size: 12px;
        text-align: left;
        font-family: PingFangSC-regular;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      dd:nth-of-type(2) {
        height: 0.34rem;
        line-height: 18px;
        color: red;
        font-size: 13px;
        text-align: left;
        font-family: PingFangSC-regular;
        span:nth-of-type(2){
          margin-left:.7rem;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
