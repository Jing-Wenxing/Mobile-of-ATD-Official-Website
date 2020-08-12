<template>
  <van-swipe class="swiper"
             :autoplay="4500"
             :show-indicators="false">
    <van-swipe-item class="swipe-item"
                    v-for="item in slideShowimage"
                    :key="item.id">
      <img class="swiper-item-img"
           :src="item.location">
      <span class="swiper-item-text">{{item.name}}</span>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data () {
    return {
      slideShowimage: []
    };
  },
  methods: {
    swiper_image () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true
      axios({
        method: 'get',
        url: '/api/image/display',
      })
        .then((response) => {
          this.slideShowimage = response.data.Result
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  },
  created () {
    this.swiper_image()
  }
};
</script>

<style>
.swiper {
  margin: 0px 0px 10px 0px;
  height: 175px;
}

.swipe-item {
  display: flex;
  justify-content: center;
}

.swiper-item-img {
  height: 175px;
  width: 90%;
  border-radius: 7.5px;
  object-fit: cover;
}

.swiper-item-text {
  position: absolute;
  bottom: 15px;
  left: 30px;

  color: #fff;
  font-weight: bold;
}
</style>