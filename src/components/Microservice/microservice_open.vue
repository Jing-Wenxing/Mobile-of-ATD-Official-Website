<template>
  <div class="microservice_playpage">
    <van-row class="top">
      <van-col class="microservice-playpage-top-bg"
               span="3">
        <van-button round
                    color="#fff"
                    type="info"
                    @click="back_page">
          <van-icon name="arrow-left"
                    color="#2B2C30" />
        </van-button>
      </van-col>
      <van-col class="top microservice-playpage-top-bg"
               span="18">
        软件下载
      </van-col>
      <van-col class="microservice-playpage-top-bg"
               span="3">

      </van-col>
    </van-row>

    <!-- 软件基础信息 -->
    <van-row class="top">
      <van-col class="top microservice-playpage-title-bg"
               span="8">
        <el-avatar shape="square"
                   :size="70"
                   :src="this.inmicroservice_content.imgurl"></el-avatar>
      </van-col>
      <van-col class="microservice-playpage-title-bg"
               span="14">
        <p style="margin: 0 0 7.5px 0; font-size: 20px; font-weight: 700; color: #2B2C30;">{{inmicroservice_content.title}}</p>
        <p style="margin: 5px 0 0 0; font-size: 14px; color: #2B2C30;">{{inmicroservice_content.subtitle}}</p>
      </van-col>
      <van-col class="microservice-playpage-title-bg"
               span="2">

      </van-col>
    </van-row>

    <!-- 应用评分 -->
    <van-notice-bar color="#2B2C30"
                    class="microservice-notice"
                    background="#ffffff">
      <div class="align-items">
        服务评分
        <van-icon name="warning-o"
                  style="padding-left: 10px;" />
      </div>
    </van-notice-bar>

    <van-row class="top">
      <van-col class="microservice-playpage-score"
               span="8">
        <div class="microservice-playpage-score-left">
          <div class="microservice-playpage-score-left-item">
            <span style="font-size: 50px; font-weight: 400; color: #2B2C30;">
              {{((5 * inmicroservice_content.activityitem[0] + 4 * inmicroservice_content.activityitem[1] + 3 * inmicroservice_content.activityitem[2] + 2 * inmicroservice_content.activityitem[3] + 1 * inmicroservice_content.activityitem[4]) / inmicroservice_content.activity).toFixed(1)}}
            </span>
          </div>
          <div class="microservice-playpage-score-left-item">
            <el-rate v-model="value"
                     :show-score="false"
                     :colors="colors"
                     disabled
                     text-color="#294D7C">
            </el-rate>
          </div>
        </div>
      </van-col>
      <van-col class="microservice-playpage-score"
               span="14">
        <el-progress v-for="item in inmicroservice_content.activityitem"
                     :key="item.id"
                     :text-inside="true"
                     :stroke-width="7.5"
                     :percentage="item/inmicroservice_content.activity*100"
                     color="#294D7C"
                     :show-text="false"
                     style="margin: 10px 0;"></el-progress>
      </van-col>
      <van-col class="microservice-playpage-score"
               span="2">

      </van-col>
    </van-row>

    <div style="margin: 20px 0; padding: 0 20px;">
      <van-button type="primary"
                  color="#294D7C"
                  block>打开 / 转到</van-button>
    </div>

    <!-- 关于应用 -->
    <van-notice-bar color="#2B2C30"
                    class="microservice-notice"
                    background="#ffffff">
      <div class="align-items">
        关于服务
        <van-icon name="warning-o"
                  style="padding-left: 10px;" />
      </div>
    </van-notice-bar>
    <div style="padding: 0 20px;">{{inmicroservice_content.description}}</div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      inmicroservice_content: [],
      value: 0,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    };
  },
  mounted () {
    this.value = Number(((5 * this.inmicroservice_content.activityitem[0] + 4 * this.inmicroservice_content.activityitem[1] + 3 * this.inmicroservice_content.activityitem[2] + 2 * this.inmicroservice_content.activityitem[3] + 1 * this.inmicroservice_content.activityitem[4]) / this.inmicroservice_content.activity).toFixed(1))
  },
  methods: {
    back_page () {
      this.$router.go(-1)
    },
  },
  created () {
    this.inmicroservice_content = this.$route.query.microservicedata
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

.microservice_playpage {
  height: calc(100vh - 50px);

  background: #fff;
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.microservice-playpage-top-bg {
  line-height: 54px;
  height: 54px;
  background: #fff;
}

.microservice-playpage-title-bg {
  padding: 15px 0;
  height: 100px;
  background: #fff;
}

.microservice-playpage-notice {
  font-size: 18px;
}

.microservice-playpage-score {
  height: 100px;
}

.microservice-playpage-score-left {
  display: flex;
  flex-direction: column;
}

.microservice-playpage-score-left-item {
  display: flex;
  justify-content: center;
}

.microservice-playpage {
}

.microservice-playpage {
}

.microservice-playpage {
}
</style>
