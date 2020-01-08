<template>
  <div class="car">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <Forus />
  </div>
</template>
<script>
import Forus from '../components/forus';
export default {
  name:'sort',
  components:{
    Forus
  },
  data(){
    return {
      
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
.car {
  width:100%;
  height:100%;
}
</style>
