<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="Content">
    <h1>{{ title }}</h1>
    <div v-html="bodyHtml"></div>
  </div>
</template>

<script>
import { fileMap, sourceFileArray } from '@/content/json/summary.json'

export default {
  validate({ params }) {
    return sourceFileArray.includes(
      `content/markdown/${params.category}/${params.slug}.md`
    )
  },
  asyncData({ store, params }) {
    // $store.menu.items に、サイドバー項目を設定

    // url の _category から、対象となる記事マークダウンのファイルパスを全て取得
    const contentPaths = sourceFileArray.filter(value => {
      return value.includes(params.category)
    })

    // summary.json から、対象記事全ての menuTitle を取得
    const menuTitleList = []
    for (const path of contentPaths) {
      const jsonPath = path.replace('markdown', 'json').replace('.md', '.json')
      menuTitleList.push(fileMap[jsonPath].menuTitle)
    }

    // $store.menu に登録
    store.commit('menu/setItems', menuTitleList)

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
