<template>
  <div class="Content">
    <div v-html="bodyHtml"></div>
  </div>
</template>

<script>
import { sourceFileArray } from '@/content/json/summary.json'

export default {
  validate({ params }) {
    return sourceFileArray.includes(
      `content/markdown/${params.category}/${params.slug}.md`
    )
  },
  asyncData({ params }) {
    return Object.assign(
      {},
      require(`~/content/json/${params.category}/${params.slug}.json`),
      { params }
    )
  }
}
</script>

<style lang="scss" scoped>
.Content /deep/ {
  padding: $space-base;
  h2 {
    margin-top: $space-xl;
  }
}
</style>
