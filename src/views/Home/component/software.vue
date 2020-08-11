<template>
  <div class="softwaretop">
    <van-notice-bar mode="link"
                    color="#2B2C30"
                    class="notice-swipe"
                    background="#ffffff"
                    @click="tosoftware">
      软件专区
    </van-notice-bar>

    <div class="softwarecontent">
      <van-row class="software-width">
        <van-col class="software-item"
                 span="12"
                 v-for="item in software_content"
                 :key="item.id">
          <img class="software-image"
               src="https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg">
          <div class="software-property">
            <p class="software-text">
              <span class="software-text-item">软件</span>
              <span class="software-text-item">
                <van-icon name="down"
                          style="margin-right: 2.5px;" />233
              </span>
            </p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      software_content: [{}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    tosoftware () {
      console.log('软件视频页')
    }
  },
}
</script>

<style>
.softwaretop {
  margin: 10px 0;
}

.software-notice {
  margin-bottom: 10px;
}

.software-width {
  width: 90%;
}

.softwarecontent {
  display: flex;
  justify-content: center;
}

.software-item {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.software-image {
  height: 80px;
  width: 95%;
  border-radius: 7.5px 7.5px 0 0;

  object-fit: cover;
}

.software-property {
  height: 25px;
  width: 95%;
  border-radius: 0 0 7.5px 7.5px;

  background: #fff;
}

.software-title {
  margin: 0;
  margin-top: 2.5px;
  padding: 0 5px;
  font-size: 12px;
}

.software-text {
  margin: 2.5px 0;
  padding: 0 5px;
  font-size: 12px;

  display: flex;
  justify-content: space-between;
}

.software-text-item {
  display: flex;
  align-items: center;
}
</style>