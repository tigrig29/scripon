<template>
  <div class="container">
    <header>
      <HeaderArea :title="title" />
    </header>
    <main>
      <aside>
        <SettingArea />
      </aside>
      <article>
        <ConvertArea />
      </article>
    </main>
  </div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea.vue'
import SettingArea from '@/components/SettingArea.vue'
import ConvertArea from '@/components/ConvertArea.vue'

const title = 'NovelGame-SS-Converter'

export default {
  head() {
    return {
      title: `${title} | ノベルゲーム制作のシナリオ→スクリプト化作業を簡単に！`
    }
  },
  components: {
    HeaderArea,
    SettingArea,
    ConvertArea
  },
  data() {
    return {
      title
    }
  }
}
</script>

<style lang="scss">
.container {
  header {
    padding: 8px;
    background: #fff;
    border-bottom: 2px #efefef solid;
    // ヘッダー固定用
    top: 0;
    position: sticky;
    z-index: 10;
  }
}

// PC
@media (min-width: 768px) {
  .container {
    main {
      display: grid;
      grid-template-columns: 512px minmax(256px, auto);
    }
  }
}
</style>
