<template>
  <div>
    <search :isvideo="classification=='0'"
            :issoftware="classification=='1'"
            :ismicroservice="classification=='2'"></search>
    233
  </div>
</template>

<script>
import search from '@/components/Search/search'

export default {
  components: {
    search,
  },
  data () {
    return {
      value: '',
      classification: null,
    };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
  },
  created () {
    this.value = this.$route.query.value
    this.classification = this.$route.query.classification
  }
}
</script>

<style>
</style>