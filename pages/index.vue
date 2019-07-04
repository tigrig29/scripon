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
    store.commit('layout/changeSidebar', 'config')
  }
}
</script>
