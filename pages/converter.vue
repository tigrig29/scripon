<template>
  <div class="App">
    <Config />
    <Converter />
  </div>
</template>

<script>
import Converter from '@/components/Converter.vue'
import Config from '@/components/Config.vue'

export default {
  components: {
    Converter,
    Config
  },
  asyncData({ store }) {
    // サイドバーメニューの非表示化
    store.commit('menu/setEnabled', false)
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
