<template>
  <div @click="microservice_playpage">
    <div class="microservice-preview-item-flex">
      <img :class="infinal?'microservice-preview-item-image-final':'microservice-preview-item-image'"
           :src="inmicroservice_content.imgurl">
    </div>
    <div class="microservice-preview-item-flex">
      <div :class="infinal?'microservice-preview-item-content-final':'microservice-preview-item-content'">
        <p class="microservice-preview-item-content-text">
          <span class="microservice-text-item">{{inmicroservice_content.title}}</span>
          <span class="microservice-text-item">
            <van-icon name="down"
                      style="margin-right: 2.5px;" />{{inmicroservice_content.activity}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['microservicedata', 'final',],
  data () {
    return {
      inmicroservice_content: this.microservicedata,
      infinal: this.final,
    }
  },
  methods: {
    microservice_playpage () {
      this.$router.push({
        path: '/microservice/open',
        query: {
          microservicedata: this.inmicroservice_content,
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
.microservice-preview-item-flex {
  display: flex;
  justify-content: center;
}

.microservice-preview-item-image {
  height: 80px;
  width: 95%;
  border-radius: 7.5px 7.5px 0 0;

  object-fit: cover;
}

.microservice-preview-item-image-final {
  height: 140px;
  width: 97.5%;
  border-radius: 7.5px 7.5px 0 0;

  object-fit: cover;
}

.microservice-preview-item-content {
  height: 30px;
  width: 95%;
  border-radius: 0 0 7.5px 7.5px;

  background: #fff;
}

.microservice-preview-item-content-final {
  height: 30px;
  width: 97.5%;
  border-radius: 0 0 7.5px 7.5px;

  background: #fff;
}

.microservice-preview-item-content-title {
  margin: 0;
  margin-top: 2.5px;
  padding: 0 5px;
  font-size: 12px;
}

.microservice-preview-item-content-text {
  margin: 2.5px 0;
  padding: 0 5px;
  font-size: 12px;

  display: flex;
  justify-content: space-between;
}

.microservice-preview-item-content-text .microservice-text-item {
  display: flex;
  align-items: center;
}
</style>