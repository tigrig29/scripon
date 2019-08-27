<template>
  <div class="App">
    <Config />
    <ConfigCloser />
    <Converter />
  </div>
</template>

<script>
import ConfigCloser from '@/components/ConfigCloser.vue'
import Converter from '@/components/Converter.vue'
import Config from '@/components/Config.vue'

export default {
  head() {
    return {
      title: 'Scripon! コンバーター',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Scripon コンバーターは、シナリオテキストからスクリプトへの変換作業を手助けします。' +
            'シナリオテキストを入力して、各種設定を行い、スクリプト製作作業をしてみましょう！'
        }
      ]
    }
  },
  components: {
    ConfigCloser,
    Converter,
    Config
  },
  asyncData({ store }) {
    // グローバルナビゲーションの非表示化
    store.commit('navigation/setVisible', false)
    // サイドバーメニューの非表示化
    store.commit('menu/setEnabled', false)
    // 設定（Config）メニューの表示
    store.commit('config/setVisible', true)
  }
}
</script>

<style lang="scss" scoped>
.App {
  grid-column-start: 1;
  grid-column-end: 3;

  @media (min-width: $--md) {
    display: grid;
    grid-template-columns: 512px minmax(256px, auto);
  }
}
</style>
