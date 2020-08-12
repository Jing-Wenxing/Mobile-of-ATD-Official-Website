
<template>
  <van-row class="top">
    <van-col class="Search-serach-button"
             span="3">
      <van-button round
                  color="#fff"
                  type="info"
                  @click="back_page">
        <van-icon name="arrow-left"
                  color="#2B2C30" />
      </van-button>
    </van-col>
    <van-col span="17">
      <van-search v-model="value"
                  shape="round"
                  background="#fff"
                  @search="onSearch"
                  placeholder="请输入搜索关键词" />
    </van-col>
    <van-col class="Search-serach-button"
             span="4">
      <van-button round
                  color="#fff"
                  type="info"
                  @click="onSearch"><span style="color: #2B2C30;">搜索</span></van-button>
    </van-col>
  </van-row>
</template>

<script>
export default {
  data () {
    return {
      value: 'dfdf'
    };
  },
  methods: {
    onSearch () {
      if (this.value != '')
        console.log('重新搜索')
      // this.$router.push({
      //   path: '/search/home',
      //   query: {
      //     value: this.value
      //   }
      // })
    },
    back_page () {
      this.$router.go(-1)
    }
  },
  created () {
    this.value = this.$route.query.value
  }
};
</script>

<style>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Search-serach-button {
  line-height: 54px;
  height: 54px;
  background: #fff;
}
</style>