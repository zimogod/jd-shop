<template>
  <div class="sort">
    <Headers />
    <div class="content">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="item in supers" :key="item.key" :to="{path:item.path}" :title="item.alias" />
      </van-sidebar>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../components/headers';
import { mapState } from "vuex";
export default {
  name:'sort',
  components:{
    Headers
  },
  data(){
    return {
      activeKey: 0
    }
  },
  computed:{
    ...mapState(['supers'])
  },
  methods:{
    change(pageNum){
      this.getData(pageNum);
    },
    getData(page){
      this.$http.get(`http://localhost:3001/page?page=${page}`).then(res=>{
        this.totle = res.data.totleNum;
        this.glist = res.data.glist;
      })
    }
  },
  mounted(){
    // 初始化
    this.getData(this.currentPage);
  }
}
</script>
<style lang="less">
.sort {
  width:100%;
  height:100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  .content{
    flex:1;
    width:100%;
    display: flex;
    color:#000;
    justify-content: flex-start;
    .van-sidebar{
       background-color: rgba(240, 240, 240, 1);
      .van-sidebar-item{
        background-color: rgba(240, 240, 240, 1);
      }
      .van-sidebar-item--select{
        background:#fff;
      }
    }
  }
}
</style>
