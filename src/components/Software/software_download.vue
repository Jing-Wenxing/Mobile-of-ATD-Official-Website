<template>
  <div class="software_playpage">
    <van-row class="top">
      <van-col class="software-playpage-top-bg"
               span="3">
        <van-button round
                    color="#fff"
                    type="info"
                    @click="back_page">
          <van-icon name="arrow-left"
                    color="#2B2C30" />
        </van-button>
      </van-col>
      <van-col class="top software-playpage-top-bg"
               span="18">
        {{insoftware_content.title}}
      </van-col>
      <van-col class="software-playpage-top-bg"
               span="3">

      </van-col>
    </van-row>

    <!-- 软件基础信息 -->
    <van-row class="top">
      <van-col class="top software-playpage-title-bg"
               span="8">
        <el-avatar shape="square"
                   :size="70"
                   :src="this.insoftware_content.imgurl"></el-avatar>
      </van-col>
      <van-col class="software-playpage-title-bg"
               span="14"
               style="font-size: 20px; font-weight: 700; color: #2B2C30;">
        {{insoftware_content.title}}
      </van-col>
      <van-col class="software-playpage-title-bg"
               span="2">

      </van-col>
    </van-row>

    <!-- 应用评分 -->
    <van-notice-bar color="#2B2C30"
                    class="software-notice"
                    background="#ffffff">
      <div class="align-items">
        应用评分
        <van-icon name="warning-o"
                  style="padding-left: 10px;" />
      </div>
    </van-notice-bar>

    <van-row class="top">
      <van-col class="software-playpage-score"
               span="8">
        <div class="software-playpage-score-left">
          <div class="software-playpage-score-left-item">
            <span style="font-size: 50px; font-weight: 400; color: #2B2C30;">
              {{((5 * insoftware_content.activityitem[0] + 4 * insoftware_content.activityitem[1] + 3 * insoftware_content.activityitem[2] + 2 * insoftware_content.activityitem[3] + 1 * insoftware_content.activityitem[4]) / insoftware_content.activity).toFixed(1)}}
            </span>
          </div>
          <div class="software-playpage-score-left-item">
            <el-rate v-model="value"
                     :show-score="false"
                     :colors="colors"
                     disabled
                     text-color="#294D7C">
            </el-rate>
          </div>
        </div>
      </van-col>
      <van-col class="software-playpage-score"
               span="14">
        <el-progress v-for="item in insoftware_content.activityitem"
                     :key="item.id"
                     :text-inside="true"
                     :stroke-width="7.5"
                     :percentage="item/insoftware_content.activity*100"
                     color="#294D7C"
                     :show-text="false"
                     style="margin: 10px 0;"></el-progress>
      </van-col>
      <van-col class="software-playpage-score"
               span="2">

      </van-col>
    </van-row>

    <div style="margin: 20px 0; padding: 0 20px;">
      <van-button type="primary"
                  color="#294D7C"
                  block>下载 / 转到</van-button>
    </div>

    <!-- 关于应用 -->
    <van-notice-bar color="#2B2C30"
                    class="software-notice"
                    background="#ffffff">
      <div class="align-items">
        关于应用
        <van-icon name="warning-o"
                  style="padding-left: 10px;" />
      </div>
    </van-notice-bar>
    <div style="padding: 0 20px;">{{insoftware_content.description}}</div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      insoftware_content: [],
      value: 0,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    };
  },
  mounted () {
    this.value = Number(((5 * this.insoftware_content.activityitem[0] + 4 * this.insoftware_content.activityitem[1] + 3 * this.insoftware_content.activityitem[2] + 2 * this.insoftware_content.activityitem[3] + 1 * this.insoftware_content.activityitem[4]) / this.insoftware_content.activity).toFixed(1))
  },
  methods: {
    back_page () {
      this.$router.go(-1)
    },
  },
  created () {
    this.insoftware_content = this.$route.query.softwaredata
  }
};
</script>

<style>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.align-items {
  display: flex;
  align-items: center;
}

.software_playpage {
  height: calc(100vh - 50px);

  background: #fff;
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.software-playpage-top-bg {
  line-height: 54px;
  height: 54px;
  background: #fff;
}

.software-playpage-title-bg {
  padding: 15px 0;
  height: 100px;
  background: #fff;
}

.software-playpage-notice {
  font-size: 18px;
}

.software-playpage-score {
  height: 100px;
}

.software-playpage-score-left {
  display: flex;
  flex-direction: column;
}

.software-playpage-score-left-item {
  display: flex;
  justify-content: center;
}

.software-playpage {
}

.software-playpage {
}

.software-playpage {
}
</style>
