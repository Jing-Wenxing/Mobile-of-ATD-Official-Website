<template>
  <div id="app">
    <transition name="fade"
                mode="out-in">
      <router-view />
    </transition>

    <van-tabbar v-model="active"
                active-color="#294D7C"
                inactive-color="#C0C8D3">
      <van-tabbar-item v-if="active!=0"
                       to="/"
                       icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item v-if="active==0"
                       to="/"
                       icon="wap-home">首页</van-tabbar-item>

      <van-tabbar-item v-if="active!=1"
                       to="/association"
                       icon="send-gift-o">协会</van-tabbar-item>
      <van-tabbar-item v-if="active==1"
                       to="/association"
                       icon="send-gift">协会</van-tabbar-item>

      <van-tabbar-item v-if="active!=2"
                       to="/service"
                       icon="cluster-o">服务</van-tabbar-item>
      <van-tabbar-item v-if="active==2"
                       to="/service"
                       icon="cluster">服务</van-tabbar-item>

      <van-tabbar-item v-if="active!=3"
                       to="/shop"
                       icon="bag-o">商城</van-tabbar-item>
      <van-tabbar-item v-if="active==3"
                       to="/shop"
                       icon="bag">商城</van-tabbar-item>

      <van-tabbar-item v-if="active!=4"
                       to="/personal"
                       icon="manager-o">个人</van-tabbar-item>
      <van-tabbar-item v-if="active==4"
                       to="/personal"
                       icon="manager">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  data () {
    return {
      active: 0,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.25s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.1s;
}
</style>
