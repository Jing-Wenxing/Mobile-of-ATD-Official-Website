<template>
  <div class="video_playpage">
    <van-row class="top">
      <van-col class="video-playpage-top-bg"
               span="3">
        <van-button round
                    color="#fff"
                    type="info"
                    @click="back_page">
          <van-icon name="arrow-left"
                    color="#2B2C30" />
        </van-button>
      </van-col>
      <van-col class="top video-playpage-top-bg"
               span="18">
        {{invideo_content.title}}
      </van-col>
      <van-col class="video-playpage-top-bg"
               span="3">

      </van-col>
    </van-row>

    <d-player :options="options"
              ref="player">
    </d-player>

    <van-panel icon="video-o"
               :title="invideo_content.title"
               :desc="invideo_content.author+' 友情贡献 ----- '+'播放量：'+invideo_content.activity">
      <div class="video-playpage-description">
        {{invideo_content.description}}
      </div>
    </van-panel>
  </div>
</template>

<script>
import dPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  components: {
    dPlayer
  },
  data () {
    return {
      invideo_content: [],
      // 视频
      options: {
        video: {
          url: ''
        },
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
        autoplay: false,
      },
      player: null,
    };
  },
  mounted () {
    this.player = this.$refs.player.dp
    this.setVideoUrl(this.$route.query.videodata.videourl)
  },
  methods: {
    back_page () {
      this.$router.go(-1)
    },
    setVideoUrl (url) {
      this.player.switchVideo({
        url: url
      })
    }
  },
  created () {
    this.invideo_content = this.$route.query.videodata
  }
};
</script>

<style>
.video_playpage {
  height: calc(100vh - 50px);

  background: #fff;
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-playpage-top-bg {
  line-height: 54px;
  height: 54px;
  background: #fff;
}

.video-playpage-description {
  padding: 20px;
  width: 90%;
}
</style>
