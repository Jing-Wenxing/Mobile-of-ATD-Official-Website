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
import search from './Home/searchtop'
import swiper from './Home/swiper'
import notice from './Home/notice'
import fastcard from './Home/fast_card'
import action from './Home/action'
import videos from './Home/videos'
import software from './Home/software'
import microservice from './Home/microservice'

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