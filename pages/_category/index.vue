<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="Content">
    <h1>{{ title }}</h1>
    <div class="Content__Body" v-html="bodyHtml"></div>
    <div class="Content__TOC">
      <h2>目次</h2>
      <ul class="Content__TOC__List">
        <li
          v-for="item in $store.state.menu.items"
          :key="item.id"
          class="Content__TOC__List__Item"
        >
          <nuxt-link
            class="Content__TOC__List__Item__Link"
            :to="item.link"
            exact
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fileMap, sourceFileArray } from '@/content/json/summary.json'
import menuBuilder from '@/assets/js/menu'

export default {
  validate({ params }) {
    return sourceFileArray.includes(`content/markdown/${params.category}.md`)
  },
  asyncData({ store, params }) {
    // グローバルナビゲーションの非表示化
    store.commit('navigation/setVisible', false)
    // メニューの非表示化（SP用）
    store.commit('menu/setVisible', false)

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
      require(`~/content/json/${params.category}.json`),
      { params }
    )
  }
}
</script>

<style lang="scss" scoped>
.Content /deep/ {
  padding-left: $space-xl;
  padding-right: $space-xl;
  h2 {
    margin-top: $space-xl;
  }
  li {
    margin-top: $space-sm;
  }
}
</style>
