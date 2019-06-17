<template>
  <div>
    <Header :title="title" />
    <main class="Main">
      <Sidebar />
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

const title = 'Scripon!'

export default {
  head() {
    return {
      title: `${title} | ノベルゲーム制作のスクリプト作業を簡単に！`
    }
  },
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
// PC
@media (min-width: 768px) {
  .Main {
    display: grid;
    grid-template-columns: 512px minmax(256px, auto);
  }
}
</style>
