<template>
  <div @click="software_playpage">
    <div class="software-preview-item-flex">
      <img :class="infinal?'software-preview-item-image-final':'software-preview-item-image'"
           :src="insoftware_content.imgurl">
    </div>
    <div class="software-preview-item-flex">
      <div :class="infinal?'software-preview-item-content-final':'software-preview-item-content'">
        <p class="software-preview-item-content-text">
          <span class="software-text-item">{{insoftware_content.title}}</span>
          <span class="software-text-item">
            <van-icon name="down"
                      style="margin-right: 2.5px;" />{{insoftware_content.activity}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['softwaredata', 'final',],
  data () {
    return {
      insoftware_content: this.softwaredata,
      infinal: this.final,
    }
  },
  methods: {
    software_playpage () {
      this.$router.push({
        path: '/software/download',
        query: {
          softwaredata: this.insoftware_content,
        },
      })
    },
    back_page () {
      this.$router.go(-1)
    }
  },
  watch: {
    tempAddress (newVal) {
      this.$emit('update', newVal)
    }
  },
  created () {

  },
}
</script>

<style>
.software-preview-item-flex {
  display: flex;
  justify-content: center;
}

.software-preview-item-image {
  height: 80px;
  width: 95%;
  border-radius: 7.5px 7.5px 0 0;

  object-fit: cover;
}

.software-preview-item-image-final {
  height: 140px;
  width: 97.5%;
  border-radius: 7.5px 7.5px 0 0;

  object-fit: cover;
}

.software-preview-item-content {
  height: 30px;
  width: 95%;
  border-radius: 0 0 7.5px 7.5px;

  background: #fff;
}

.software-preview-item-content-final {
  height: 30px;
  width: 97.5%;
  border-radius: 0 0 7.5px 7.5px;

  background: #fff;
}

.software-preview-item-content-title {
  margin: 0;
  margin-top: 2.5px;
  padding: 0 5px;
  font-size: 12px;
}

.software-preview-item-content-text {
  margin: 2.5px 0;
  padding: 0 5px;
  font-size: 12px;

  display: flex;
  justify-content: space-between;
}

.software-preview-item-content-text .software-text-item {
  display: flex;
  align-items: center;
}
</style>