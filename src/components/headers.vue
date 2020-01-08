<template>
  <div class="loop">
    <form action="/">
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
        />
        </form>
  </div>
</template>
<script>
export default {
  name:'loop',
//   props:['loopItem','h'],
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
  height:.49rem;
}
</style>
