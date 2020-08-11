<template>
  <div class="videotop">
    <van-notice-bar mode="link"
                    color="#2B2C30"
                    class="notice-swipe"
                    background="#ffffff"
                    @click="tovideo">
      视频专区
    </van-notice-bar>

    <div class="videocontent">
      <van-row class="video-width">
        <van-col class="video-item"
                 span="12"
                 v-for="item in video_content"
                 :key="item.id">
          <img class="video-image"
               src="https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg">
          <div class="video-property">
            <p class="video-title">视频名称</p>
            <p class="video-text">
              <span class="video-text-item">作者</span>
              <span class="video-text-item">
                <van-icon name="play-circle-o"
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
      video_content: [{}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    tovideo () {
      console.log('转到视频页')
    }
  },
}
</script>

<style>
.videotop {
  margin: 10px 0;
}

.video-notice {
  margin-bottom: 10px;
}

.video-width {
  width: 90%;
}

.videocontent {
  display: flex;
  justify-content: center;
}

.video-item {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.video-image {
  height: 80px;
  width: 95%;
  border-radius: 7.5px 7.5px 0 0;

  object-fit: cover;
}

.video-property {
  height: 40px;
  width: 95%;
  border-radius: 0 0 7.5px 7.5px;

  background: #fff;
}

.video-title {
  margin: 0;
  margin-top: 2.5px;
  padding: 0 5px;
  font-size: 12px;
}

.video-text {
  margin: 2.5px 0;
  padding: 0 5px;
  font-size: 12px;

  display: flex;
  justify-content: space-between;
}

.video-text-item {
  display: flex;
  align-items: center;
}
</style>