<template>
  <div>
    <van-row class="bar">
      <van-col span="9">
        <div class="van-col-item">
          <van-icon name="video-o"
                    size="35" />
          信息
        </div>
      </van-col>
      <van-col span="6">
        <div class="van-col-item">
          <van-icon name="points"
                    size="35" />
          技术
        </div>
      </van-col>
      <van-col span="9">
        <div class="van-col-item">
          <van-icon name="apps-o"
                    size="35" />
          办综
        </div>
      </van-col>
    </van-row>
  </div>

</template>

<script>
export default {
  data () {
    return {

    };
  },
  methods: {
  },
  created () {
  }
};
</script>

<style>
.bar {
  margin: 20px 0;
  text-align: center;
}

.van-col-item {
  display: flex;
  justify-content: center;

  flex-direction: column;
}
</style>