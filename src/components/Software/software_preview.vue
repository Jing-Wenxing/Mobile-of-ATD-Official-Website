<template>
  <div>
    <div v-if="incolumn"
         class="software-preview-flex">
      <van-row class="software-preview-width">
        <van-col class="software-preview-content"
                 span="24"
                 v-for="item in insoftware_content"
                 :key="item.id">
          <softwarepreviewitem :final="true"
                               :softwaredata="item"></softwarepreviewitem>
        </van-col>
      </van-row>
    </div>
    <div v-else
         class="software-preview-flex">
      <van-row v-if="insoftware_content.length%2=='1'"
               class="software-preview-width">
        <van-col class="software-preview-content"
                 span="12"
                 v-for="(item, i) in insoftware_content"
                 :key="item.id"
                 :style="i===insoftware_content.length-1?'display: none;':''">
          <softwarepreviewitem :softwaredata="item"></softwarepreviewitem>
        </van-col>
        <van-col class="software-preview-content"
                 span="24"
                 v-for="(item, i) in insoftware_content"
                 :key="item.id"
                 :style="i===insoftware_content.length-1?'':'display: none;'">
          <softwarepreviewitem :final="i===insoftware_content.length-1?true:false"
                               :softwaredata="item"></softwarepreviewitem>
        </van-col>
      </van-row>

      <van-row v-else
               class="software-preview-width">
        <van-col class="software-preview-content"
                 span="12"
                 v-for="item in insoftware_content"
                 :key="item.id">
          <softwarepreviewitem :softwaredata="item"></softwarepreviewitem>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import softwarepreviewitem from '@/components/Software/software_preview_item'

export default {
  components: {
    softwarepreviewitem,
  },
  props: ['softwaredata', 'column'],
  data () {
    return {
      insoftware_content: this.softwaredata,
      incolumn: this.column
    };
  },
}
</script>

<style>
.software-preview-flex {
  display: flex;
  justify-content: center;
}

.software-preview-width {
  width: 90%;
}

.software-preview-content {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
</style>