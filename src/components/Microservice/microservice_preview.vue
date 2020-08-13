<template>
  <div>
    <div v-if="incolumn"
         class="microservice-preview-flex">
      <van-row class="microservice-preview-width">
        <van-col class="microservice-preview-content"
                 span="24"
                 v-for="item in inmicroservice_content"
                 :key="item.id">
          <microservicepreviewitem :final="true"
                                   :microservicedata="item"></microservicepreviewitem>
        </van-col>
      </van-row>
    </div>
    <div v-else
         class="microservice-preview-flex">
      <van-row v-if="inmicroservice_content.length%2=='1'"
               class="microservice-preview-width">
        <van-col class="microservice-preview-content"
                 span="12"
                 v-for="(item, i) in inmicroservice_content"
                 :key="item.id"
                 :style="i===inmicroservice_content.length-1?'display: none;':''">
          <microservicepreviewitem :microservicedata="item"></microservicepreviewitem>
        </van-col>
        <van-col class="microservice-preview-content"
                 span="24"
                 v-for="(item, i) in inmicroservice_content"
                 :key="item.id"
                 :style="i===inmicroservice_content.length-1?'':'display: none;'">
          <microservicepreviewitem :final="i===inmicroservice_content.length-1?true:false"
                                   :microservicedata="item"></microservicepreviewitem>
        </van-col>
      </van-row>

      <van-row v-else
               class="microservice-preview-width">
        <van-col class="microservice-preview-content"
                 span="12"
                 v-for="item in inmicroservice_content"
                 :key="item.id">
          <microservicepreviewitem :microservicedata="item"></microservicepreviewitem>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import microservicepreviewitem from '@/components/Microservice/microservice_preview_item'

export default {
  components: {
    microservicepreviewitem,
  },
  props: ['microservicedata', 'column'],
  data () {
    return {
      inmicroservice_content: this.microservicedata,
      incolumn: this.column
    };
  },
}
</script>

<style>
.microservice-preview-flex {
  display: flex;
  justify-content: center;
}

.microservice-preview-width {
  width: 90%;
}

.microservice-preview-content {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
</style>