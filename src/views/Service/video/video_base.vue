<template>
  <div class="videobottom">
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
        编程基础
      </van-col>
      <van-col class="video-playpage-top-bg"
               span="3">

      </van-col>
    </van-row>

    <videopreview class="videobottom"
                  :column="false"
                  :videodata="this.invideo_content"></videopreview>

  </div>
</template>

<script>
import videopreview from '@/components/Video/video_preview'

export default {
  components: {
    videopreview,
  },
  data () {
    return {
      invideo_content: [
        {
          videoid: '10001',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '视频名称',
          author: '作者',
          activity: '233',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          videourl: 'http://jingwenxing.top/23333.mp4'
        },
        {
          videoid: '10002',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '视频名称',
          author: '作者',
          activity: '233',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          videourl: 'http://jingwenxing.top/Marvel.mp4'
        },
        {
          videoid: '10003',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '视频名称',
          author: '作者',
          activity: '233',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          videourl: 'http://jingwenxing.top/Marvel.mp4'
        },
        // {
        //   videoid: '10004',
        //   imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
        //   title: '视频名称',
        //   author: '作者',
        //   activity: '233',
        //   videourl: 'http://jingwenxing.top/Marvel.mp4'
        // },
      ]
    };
  },
  methods: {
    back_page () {
      this.$router.go(-1)
    },
  },
}
</script>

<style>
.videobottom {
  margin-bottom: 10px;
}

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