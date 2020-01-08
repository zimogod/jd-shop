<template>
  <div class="mine">
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
    <Forus />
  </div>
</template>

<script>
import Forus from '../components/forus';
export default {
  name:'mine',
  components:{
    Forus
  },
  data(){
    return {
      loading:true
    }
  },
  methods:{
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="less">
.mine {
  width:100%;
  height:100%;
}
</style>
