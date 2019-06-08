<template>
  <div>
    <Header :title="title" />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

const title = 'ScriPon!'

export default {
  head() {
    return {
      title: `${title} | ノベルゲーム制作のシナリオ→スクリプト化作業を簡単に！`
    }
  },
  components: {
    Header
  },
  data() {
    return {
      title
    }
  }
}
</script>
