<template>
  <div class="row">
    <van-row class="row-width">
      <van-col span="12">
        <div class="row">
          <img class="row-left-image"
               src="https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg">
        </div>
      </van-col>
      <van-col span="12">
        <div class="row-right">
          <div style="margin-bottom: 4px;">
            <van-row>
              <van-col span="24">
                <div class="row">
                  <img class="row-righttop-image"
                       src="https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg">
                </div>
              </van-col>
            </van-row>
          </div>
          <div class="row">
            <van-row style="width: 95%;">
              <van-col span="12">
                <div style="display: flex; justify-content: flex-start;">
                  <img class="row-rightbottomleft-image"
                       src="https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg">
                </div>
              </van-col>
              <van-col span="12">
                <div style="display: flex; justify-content: flex-end;">
                  <img class="row-rightbottomright-image"
                       src="https://pic.gksec.com/2020/08/10/05564be60ae6a/pexels-roberto-nickson-2762179.jpg">
                </div>
              </van-col>
            </van-row>
          </div>
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
.row {
  display: flex;
  justify-content: center;
}

.row-width {
  width: 90%;
}

.row-right {
  display: flex;
  flex-direction: column;
}

.row-left-image {
  height: 104px;
  width: 95%;
  border-radius: 7.5px;

  object-fit: cover;
}

.row-righttop-image {
  height: 50px;
  width: 95%;
  border-radius: 7.5px;

  object-fit: cover;
}

.row-rightbottomleft-image {
  height: 50px;
  width: 97.5%;
  border-radius: 7.5px;

  object-fit: cover;
}

.row-rightbottomright-image {
  height: 50px;
  width: 97.5%;
  border-radius: 7.5px;

  object-fit: cover;
}
</style>