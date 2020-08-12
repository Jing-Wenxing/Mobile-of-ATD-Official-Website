<template>
  <div>
    <search></search>

  </div>
</template>

<script>
import search from './Search/searchtop'

export default {
  components: {
    search,
  },
  data () {
    return {
      value: ''
    };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
  },
  created () {
    this.value = this.$route.query.value
  }
}
</script>

<style>
</style>