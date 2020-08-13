
<template>
  <div>
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

    <van-notice-bar v-show="invideo_content.length!=0&&inisvideo"
                    color="#2B2C30"
                    class="notice-swipe"
                    background="#ffffff">
      视频结果
    </van-notice-bar>

    <videopreview v-show="invideo_content.length!=0&&inisvideo"
                  :column="true"
                  :videodata="this.invideo_content"
                  style="margin-bottom: 10px;"></videopreview>

    <van-notice-bar v-show="insoftware_content.length!=0&&inissoftware"
                    color="#2B2C30"
                    class="notice-swipe"
                    background="#ffffff">
      软件结果
    </van-notice-bar>

    <softwarepreview v-show="inmicroservice_content.length!=0&&inissoftware"
                     :column="true"
                     :softwaredata="this.insoftware_content"
                     style="margin-bottom: 10px;"></softwarepreview>

    <van-notice-bar v-show="insoftware_content.length!=0&&inismicroservice"
                    color="#2B2C30"
                    class="notice-swipe"
                    background="#ffffff">
      微服务结果
    </van-notice-bar>

    <microservicepreview v-show="inmicroservice_content.length!=0&&inismicroservice"
                         :column="true"
                         :microservicedata="this.inmicroservice_content"
                         style="margin-bottom: 10px;"></microservicepreview>

  </div>
</template>

<script>
import videopreview from '@/components/Video/video_preview'
import softwarepreview from '@/components/Software/software_preview'
import microservicepreview from '@/components/Microservice/microservice_preview'

export default {
  props: ['isvideo', 'issoftware', 'ismicroservice'],
  components: {
    videopreview,
    softwarepreview,
    microservicepreview,
  },
  data () {
    return {
      inisvideo: this.isvideo,
      inissoftware: this.issoftware,
      inismicroservice: this.ismicroservice,
      value: '',
      // invideo_content: [],
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
      ],
      insoftware_content: [
        {
          softwareid: '10001',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '软件名称',
          activity: '233',
          subtitle: '副标题',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          softwareurl: 'http://jingwenxing.top/23333.mp4',
          activityitem: ['180', '35', '10', '5', '3']
        },
        {
          softwareid: '10002',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '软件名称',
          activity: '233',
          subtitle: '副标题',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          softwareurl: 'http://jingwenxing.top/Marvel.mp4',
          activityitem: ['180', '35', '10', '5', '3']
        },
        {
          softwareid: '10003',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '软件名称',
          activity: '233',
          subtitle: '副标题',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          softwareurl: 'http://jingwenxing.top/Marvel.mp4',
          activityitem: ['180', '35', '10', '5', '3']
        },
        // {
        //   softwareid: '10004',
        //   imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
        //   title: '软件名称',
        //   activity: '233',
        //   softwareurl: 'http://jingwenxing.top/Marvel.mp4'
        // },
      ],
      inmicroservice_content: [
        {
          microserviceid: '10001',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '微服务名称',
          subtitle: '副标题',
          activity: '233',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          microserviceurl: 'http://jingwenxing.top/23333.mp4',
          activityitem: ['180', '35', '10', '5', '3']
        },
        {
          microserviceid: '10002',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '微服务名称',
          subtitle: '副标题',
          activity: '233',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          microserviceurl: 'http://jingwenxing.top/Marvel.mp4',
          activityitem: ['180', '35', '10', '5', '3']
        },
        {
          microserviceid: '10003',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '微服务名称',
          subtitle: '副标题',
          activity: '233',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          microserviceurl: 'http://jingwenxing.top/Marvel.mp4',
          activityitem: ['180', '35', '10', '5', '3']
        },
        // {
        //   microserviceid: '10004',
        //   imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
        //   title: '微服务名称',
        //   activity: '233',
        //   microserviceurl: 'http://jingwenxing.top/Marvel.mp4'
        // },
      ]
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