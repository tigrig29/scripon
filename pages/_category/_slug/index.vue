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
  head() {
    return {
      title: `${this.title} - ${this.categoryTitle}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  },
  validate({ params }) {
    return sourceFileArray.includes(
      `content/markdown/${params.category}/${params.slug}.md`
    )
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

    // タイトル用に、カテゴリページのタイトルも取得する
    const categoryTitle = require(`~/content/json/${params.category}.json`)
      .title

    // 記事用コンテンツのインポート
    return Object.assign(
      { categoryTitle },
      require(`~/content/json/${params.category}/${params.slug}.json`),
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
    margin-top: $space-base * 4;
    padding-bottom: $space-base;
    border-bottom: solid 1px $--color-grey-5;
  }
  li {
    margin-top: $space-base;
  }
  img {
    width: 100%;
    height: auto;
  }

  // PC
  @media (min-width: $--md) {
    img {
      max-width: $--sm;
    }
  }
}
</style>
