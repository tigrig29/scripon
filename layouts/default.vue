<template>
  <div>
    <Header :title="title" />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

const title = 'Scripon!'

export default {
  head() {
    return {
      title: `${title} | ノベルゲーム制作のスクリプト作業を簡単に！`
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
