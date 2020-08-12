<template>
  <div class="softwaretop">
    <van-notice-bar mode="link"
                    color="#2B2C30"
                    class="notice-swipe"
                    background="#ffffff"
                    @click="tosoftware">
      软件专区
    </van-notice-bar>

    <softwarepreview :column="false"
                     :softwaredata="this.insoftware_content"></softwarepreview>
  </div>
</template>

<script>
import softwarepreview from '@/components/Software/software_preview'

export default {
  components: {
    softwarepreview,
  },
  data () {
    return {
      insoftware_content: [
        {
          softwareid: '10001',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '软件名称',
          activity: '233',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          softwareurl: 'http://jingwenxing.top/23333.mp4',
          activityitem: ['180', '35', '10', '5', '3']
        },
        {
          softwareid: '10002',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '软件名称',
          activity: '233',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          softwareurl: 'http://jingwenxing.top/Marvel.mp4',
          activityitem: ['180', '35', '10', '5', '3']
        },
        {
          softwareid: '10003',
          imgurl: 'https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg',
          title: '软件名称',
          activity: '233',
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
      ]
    };
  },
  methods: {
    tosoftware () {
      console.log('转到软件页')
    }
  },
}
</script>

<style>
.softwaretop {
  margin: 10px 0;
}
</style>