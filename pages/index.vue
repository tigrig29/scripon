<template>
  <div>
    <Converter />
  </div>
</template>

<script>
import Converter from '@/components/Converter.vue'

export default {
  components: {
    Converter
  },
  fetch({ store }) {
    // メニューの非表示化（SP用）
    store.commit('menu/setVisible', true)
  }
}
</script>
