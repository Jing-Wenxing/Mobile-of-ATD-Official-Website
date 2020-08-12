<template>
  <div class="videotop">
    <van-notice-bar mode="link"
                    color="#2B2C30"
                    class="notice-swipe"
                    background="#ffffff"
                    @click="tovideo">
      视频专区
    </van-notice-bar>

    <videopreview :column="false"
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
</style>