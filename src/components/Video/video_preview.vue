<template>
  <div>
    <div v-if="incolumn"
         class="video-preview-flex">
      <van-row class="video-preview-width">
        <van-col class="video-preview-content"
                 span="24"
                 v-for="item in invideo_content"
                 :key="item.id">
          <videopreviewitem :final="true"
                            :videodata="item"></videopreviewitem>
        </van-col>
      </van-row>
    </div>
    <div v-else
         class="video-preview-flex">
      <van-row v-if="invideo_content.length%2=='1'"
               class="video-preview-width">
        <van-col class="video-preview-content"
                 span="12"
                 v-for="(item, i) in invideo_content"
                 :key="item.id"
                 :style="i===invideo_content.length-1?'display: none;':''">
          <videopreviewitem :videodata="item"></videopreviewitem>
        </van-col>
        <van-col class="video-preview-content"
                 span="24"
                 v-for="(item, i) in invideo_content"
                 :key="item.id"
                 :style="i===invideo_content.length-1?'':'display: none;'">
          <videopreviewitem :final="i===invideo_content.length-1?true:false"
                            :videodata="item"></videopreviewitem>
        </van-col>
      </van-row>

      <van-row v-else
               class="video-preview-width">
        <van-col class="video-preview-content"
                 span="12"
                 v-for="item in invideo_content"
                 :key="item.id">
          <videopreviewitem :videodata="item"></videopreviewitem>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import videopreviewitem from '@/components/Video/video_preview_item'

export default {
  components: {
    videopreviewitem,
  },
  props: ['videodata', 'column'],
  data () {
    return {
      invideo_content: this.videodata,
      incolumn: this.column
    };
  },
}
</script>

<style>
.video-preview-flex {
  display: flex;
  justify-content: center;
}

.video-preview-width {
  width: 90%;
}

.video-preview-content {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
</style>