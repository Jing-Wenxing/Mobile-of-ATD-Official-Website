
<template>
  <div>
    <van-row class="top">
      <van-col class="serach-button"
               span="6">
        <van-button round
                    color="#294D7C"
                    type="info"
                    @click="service_change_state">
          <van-icon name="arrow-down"
                    size="10px" /> {{option[option_value]}}</van-button>
      </van-col>
      <van-col span="14">
        <van-search v-model="value"
                    shape="round"
                    background="#294D7C"
                    @search="onSearch"
                    placeholder="请输入搜索关键词" />
      </van-col>
      <van-col class="serach-button"
               span="4">
        <van-button round
                    color="#294D7C"
                    type="info"
                    @click="onSearch">搜索</van-button>
      </van-col>
    </van-row>

    <videoes v-if="option_value=='0'"></videoes>
    <software v-if="option_value=='1'"></software>
    <microservice v-if="option_value=='2'"></microservice>

    <van-popup v-model="show"
               round
               position="top">
      <van-radio-group v-model="option_value">
        <van-cell-group>
          <van-cell title="视频"
                    clickable
                    @click="option_value = '0', show = false">
            <template #right-icon>
              <van-radio checked-color="#294d7c"
                         name="0" />
            </template>
          </van-cell>
          <van-cell title="软件"
                    clickable
                    @click="option_value = '1', show = false">
            <template #right-icon>
              <van-radio checked-color="#294d7c"
                         name="1" />
            </template>
          </van-cell>
          <van-cell title="微服务"
                    clickable
                    @click="option_value = '2', show = false">
            <template #right-icon>
              <van-radio checked-color="#294d7c"
                         name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-popup>
  </div>
</template>

<script>
import videoes from './video/video'
import software from './software/software'
import microservice from './microservice/microservice'

export default {
  components: {
    videoes,
    software,
    microservice,
  },
  data () {
    return {
      value: '',
      show: false,
      option_value: '0',
      option: ['视频', '软件', '微服务']
    };
  },
  methods: {
    onSearch (val) {
      console.log(this.value)
    },
    service_change_state () {
      this.show = true
    },
  },
  created () {
  }
};
</script>

<style>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.serach-button {
  line-height: 54px;
  height: 54px;
  background: #294d7c;
}
</style>