<template>
  <van-notice-bar left-icon="volume-o"
                  color="#2B2C30"
                  background="#f0f0f0"
                  :scrollable="false">
    <van-swipe vertical
               class="notice-swipe"
               :autoplay="3000"
               :touchable="false"
               :show-indicators="false">
      <van-swipe-item v-for="item in notice_message"
                      :key="item.id">
        公告：{{item.text}}
      </van-swipe-item>
    </van-swipe>
  </van-notice-bar>
</template>

<script>
export default {
  data () {
    return {
      notice_message: [
        { text: '八月十五中秋节' },
        { text: '十月一日国庆节' },
        { text: '十二月五日女生节' },
      ]
    };
  },
  methods: {

  },
  created () {
  }
};
</script>

<style>
.notice-swipe {
  height: 40px;
  line-height: 40px;

  font-weight: bold;
}
</style>