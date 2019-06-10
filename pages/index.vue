<template>
  <main class="Main">
    <Sidebar />
    <Converter />
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Converter from '@/components/Converter.vue'

export default {
  components: {
    Sidebar,
    Converter
  }
}
</script>

<style lang="scss">
// PC
@media (min-width: 768px) {
  .Main {
    display: grid;
    grid-template-columns: 512px minmax(256px, auto);
  }
}
</style>
