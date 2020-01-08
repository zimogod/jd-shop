<template>
  <div class="loop">
    <van-swipe :style="{height:h}" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in loopItem" :key="index">
        <img v-if="!item.center" v-lazy="item.goodimg" />
        <van-grid v-else :border="false" :column-num="5">
          <van-grid-item
            v-for="(value,i) in item.children"
            :key="i"
            :icon="value.imgs"
            :text="value.text"
          />
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name:'loop',
  props:['loopItem','h'],
  data(){
    return {
      value:''
    }
  },
  methods:{
    
  },
  mounted(){
      
  }
}

</script>
<style lang="less">
.loop {
  width:100%;
  img{
      width:100%;
      // height:100%;
  }
}
</style>
