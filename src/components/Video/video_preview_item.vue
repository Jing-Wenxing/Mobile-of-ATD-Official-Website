<template>
  <div @click="video_playpage">
    <div class="video-preview-item-flex">
      <img :class="infinal?'video-preview-item-image-final':'video-preview-item-image'"
           :src="invideo_content.imgurl">
    </div>
    <div class="video-preview-item-flex">
      <div :class="infinal?'video-preview-item-content-final':'video-preview-item-content'">
        <p class="video-preview-item-content-title">{{this.invideo_content.title}}</p>
        <p class="video-preview-item-content-text">
          <span class="video-text-item">{{invideo_content.author}}</span>
          <span class="video-text-item">
            <van-icon name="play-circle-o"
                      style="margin-right: 2.5px;" />{{invideo_content.activity}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['videodata', 'final',],
  data () {
    return {
      invideo_content: this.videodata,
      infinal: this.final,
    }
  },
  methods: {
    video_playpage () {
      this.$router.push({
        path: '/video/play',
        query: {
          videodata: this.invideo_content,
        },
      })
    },
    back_page () {
      this.$router.go(-1)
    }
  },
  watch: {
    tempAddress (newVal) {
      this.$emit('update', newVal)
    }
  },
  created () {

  },
}
</script>

<style>
.video-preview-item-flex {
  display: flex;
  justify-content: center;
}

.video-preview-item-image {
  height: 80px;
  width: 95%;
  border-radius: 7.5px 7.5px 0 0;

  object-fit: cover;
}

.video-preview-item-image-final {
  height: 140px;
  width: 97.5%;
  border-radius: 7.5px 7.5px 0 0;

  object-fit: cover;
}

.video-preview-item-content {
  height: 40px;
  width: 95%;
  border-radius: 0 0 7.5px 7.5px;

  background: #fff;
}

.video-preview-item-content-final {
  height: 40px;
  width: 97.5%;
  border-radius: 0 0 7.5px 7.5px;

  background: #fff;
}

.video-preview-item-content-title {
  margin: 0;
  margin-top: 2.5px;
  padding: 0 5px;
  font-size: 12px;
}

.video-preview-item-content-text {
  margin: 2.5px 0;
  padding: 0 5px;
  font-size: 12px;

  display: flex;
  justify-content: space-between;
}

.video-preview-item-content-text .video-text-item {
  display: flex;
  align-items: center;
}
</style>