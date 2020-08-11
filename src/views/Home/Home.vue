<template>
  <div>
    <search></search>
    <notice></notice>
    <swiper></swiper>
    <fastcard></fastcard>
    <action></action>
    <videos></videos>
    <software></software>
    <microservice></microservice>
  </div>
</template>

<script>
import search from './component/search'
import swiper from './component/swiper'
import notice from './component/notice'
import fastcard from './component/fast_card'
import action from './component/action'
import videos from './component/videos'
import software from './component/software'
import microservice from './component/microservice'

export default {
  components: {
    search,
    swiper,
    notice,
    fastcard,
    action,
    videos,
    software,
    microservice,
  },
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
</style>