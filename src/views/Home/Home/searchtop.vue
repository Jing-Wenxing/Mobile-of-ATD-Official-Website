
<template>
  <van-row class="top">
    <van-col span="20">
      <van-search v-model="value"
                  shape="round"
                  background="#294D7C"
                  @search="onSearch"
                  placeholder="请输入搜索关键词" />
    </van-col>
    <van-col class="serach-button"
             span="4">
      <van-button round
                  color="#294D7C"
                  type="info"
                  @click="onSearch">搜索</van-button>
    </van-col>
  </van-row>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    };
  },
  methods: {
    onSearch () {
      if (this.value != '')
        this.$router.push({
          path: '/home/search',
          query: {
            value: this.value
          }
        })
    },
  },
  created () {
  }
};
</script>

<style>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.serach-button {
  line-height: 54px;
  height: 54px;
  background: #294d7c;
}
</style>