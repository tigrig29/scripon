<template>
  <div class="container">
    <aside>
      <Sidebar />
    </aside>
    <article>
      <Converter />
    </article>
  </div>
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
  .container {
    display: grid;
    grid-template-columns: 512px minmax(256px, auto);
  }
}
</style>
