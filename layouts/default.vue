<template>
  <div>
    <Header :title="title" />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

const title = 'NovelGame-SS-Converter'

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

<style lang="scss">
// 共通レイアウト
@font-face {
  font-family: 'spin cycle 3d';
  src: url('~static/fonts/spincycle_3d_ot.otf') format('opentype');
}
.container {
  // grid.scss 帳消し
  max-width: 1920px;
  padding: 0;
}
</style>

<style lang="scss">
// デフォルトの設定
html {
  font-family: 'GenNoKakuJP', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
