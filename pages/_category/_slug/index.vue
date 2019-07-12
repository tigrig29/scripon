<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="Content">
    <h1>{{ title }}</h1>
    <div class="Content__Body" v-html="bodyHtml"></div>
  </div>
</template>

<script>
import { fileMap, sourceFileArray } from '@/content/json/summary.json'
import menuBuilder from '@/assets/js/menu'

export default {
  validate({ params }) {
    return sourceFileArray.includes(
      `content/markdown/${params.category}/${params.slug}.md`
    )
  },
  asyncData({ store, params }) {
    // $store.menu.items に、サイドバー項目を設定
    const menuItems = menuBuilder.methods.getMenuItems(
      params,
      fileMap,
      sourceFileArray
    )
    store.commit('menu/setItems', menuItems)

    // 記事用コンテンツのインポート
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
