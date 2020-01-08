<template>
  <div class="Index">
    <Headers />
    <Loop :loopItem="images" :h="loopH" />
    <Loop :loopItem="arr" :h="itemH" />
    <Loop :loopItem="images1" :h="photoH" />
    <Forus :enjoy="images" />
  </div>
</template>

<script>
import Loop from '../components/loop';
import Headers from '../components/headers';
import Forus from '../components/forus';
import { msiteclassify,classifytwo,allData } from '../server';
export default {
  name:'Index',
  components:{
    Loop,
    Headers,
    Forus
  },
  data() {
    return {
      currentPage:1,
      itemH:'1.99rem',
      loopH:'1.04rem',
      photoH:'.95rem',
      images: [],
      images1: [],
      arr:[
        { 
          center:true,
          children:[
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'袜子',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'鞋子',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'裤子',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'洗衣液',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'鱼豆腐',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'香肠',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
          ]
        },
        {
          center:true,
          children:[
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'相似',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'好货',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
            {
              text:'京东豆',
              imgs:'https://img.yzcdn.cn/vant/apple-1.jpg',
            },
          ]
        },
      ]
    };
  },
  mounted(){
    // msiteclassify().then(res=>{
    //   console.log(res,'===')
    // }).catch(err=>{
    //   console.log(err)
    // })
    // classifytwo('5df99678f78106223f8cf038').then(res=>{
    //   console.log(res)
    // })
    allData().then(res=>{
      this.images = res.data;
      this.images1 = res.data;
    }).catch(err=>{
      console.log(err)
    })
  }
};
</script>

<style lang="less">
.Index {
  width: 100%;
  height: 100%;
  .van-swipe {
    margin-top:.1rem;
    background: #ccc;
  }
}
</style>
