<template>
  <div id="app">
    <transition name="fade"
                mode="out-in">
      <router-view class="appcontent"
                   :class="appcontentse?'':'appcontentse'" />
    </transition>

    <van-tabbar class="tabbar"
                ref="tabbar"
                v-model="active"
                :class="hidshow?'':'dianone'"
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
      docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
      showHeight: document.documentElement.clientHeight,   //实时屏幕高度
      hidshow: true,  //显示或者隐藏footer
      appcontentse: true
    };
  },
  mounted () {
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        this.showHeight = document.body.clientHeight;
      })()
    }
  },
  watch: {
    showHeight () {
      if (this.docmHeight > this.showHeight) {
        this.hidshow = false
        this.appcontentse = false
      } else {
        this.hidshow = true
        this.appcontentse = true
      }
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  background: #f0f0f0;
}

.appcontent {
  height: calc(100vh - 50px);
  overflow-y: scroll;
}

.appcontentse {
  height: 100vh;
  overflow-y: scroll;
}

.dianone {
  display: none !important;
}

.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 0.1s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.1s;
}

.tabbar {
  margin-top: 50px;
}
</style>
