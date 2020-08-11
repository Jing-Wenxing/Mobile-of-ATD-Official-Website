<template>
  <div class="microservicetop">
    <van-notice-bar mode="link"
                    color="#2B2C30"
                    class="notice-swipe"
                    background="#ffffff"
                    @click="tomicroservice">
      微服务专区
    </van-notice-bar>

    <div class="microservicecontent">
      <van-row class="microservice-width">
        <van-col class="microservice-item"
                 span="12"
                 v-for="item in microservice_content"
                 :key="item.id">
          <img class="microservice-image"
               src="https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg">
          <div class="microservice-property">
            <p class="microservice-text">
              <span class="microservice-text-item">服务</span>
              <span class="microservice-text-item">
                <van-icon name="fire-o"
                          style="margin-right: 2.5px;" />233
              </span>
            </p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      microservice_content: [{}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    tomicroservice () {
      console.log('软件视频页')
    }
  },
}
</script>

<style>
.microservicetop {
  margin: 10px 0;
}

.microservice-notice {
  margin-bottom: 10px;
}

.microservice-width {
  width: 90%;
}

.microservicecontent {
  display: flex;
  justify-content: center;
}

.microservice-item {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.microservice-image {
  height: 80px;
  width: 95%;
  border-radius: 7.5px 7.5px 0 0;

  object-fit: cover;
}

.microservice-property {
  height: 25px;
  width: 95%;
  border-radius: 0 0 7.5px 7.5px;

  background: #fff;
}

.microservice-title {
  margin: 0;
  margin-top: 2.5px;
  padding: 0 5px;
  font-size: 12px;
}

.microservice-text {
  margin: 2.5px 0;
  padding: 0 5px;
  font-size: 12px;

  display: flex;
  justify-content: space-between;
}

.microservice-text-item {
  display: flex;
  align-items: center;
}
</style>