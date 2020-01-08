<template>
  <div class="admin">
    <section class="content">
        <router-view></router-view>
    </section>
    <footer>
        <ul class="list-nav">
            <router-link v-for="(item,i) in $router.options.routes[1].children" 
            tag="li"
            :key="i"
            :to="{path:item.path}"
            >
                {{ item.alias }}
            </router-link>
        </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name:'admin',
  data(){
    return {
      value:''
    }
  },
  methods:{
    
  },
   mounted(){
    //  localStorage.removeItem('userInfo');
   }
}

</script>

<style>
.van-search__content{
  border-radius: 0.3rem;
}
</style>
<style lang="less">
.admin {
  width:100%;
  height:100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;
  header{
    width:100%;
    height:0.44rem;
  }
  .content{
    width:100%;
    flex: 1;
    overflow-y: auto;
    font-size: 14px;
    // padding:
  }
  footer{
    width:100%;
    height:0.49rem;
    border-top:1px solid #ccc;
    .list-nav{
      height:.49rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li{
        list-style: none;
        font-size: 14px;
      }
      .router-link-active{
        color:red;
      }
    }
  }
}
</style>
