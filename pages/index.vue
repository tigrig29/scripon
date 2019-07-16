<template>
  <div class="Content">
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
  fetch({ store }) {
    // メニューの非表示化（SP用）
    store.commit('menu/setVisible', false)
  }
}
</script>

<style lang="scss" scoped>
.Content {
  grid-column-start: 1;
  grid-column-end: 3;

  @media (min-width: $--sm) {
    display: grid;
    grid-template-columns: 512px minmax(256px, auto);
  }
}
</style>
