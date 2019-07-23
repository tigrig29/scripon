<template>
  <div>
    <Header :title="title" />
    <main class="Main">
      <Hamburger v-if="$store.state.menu.enabled" />
      <Sidebar v-if="$store.state.menu.enabled" />
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Hamburger from '@/components/Hamburger.vue'

const title = 'Scripon!'

export default {
  head() {
    return {
      title: `${title} | ノベルゲーム制作のスクリプト作業を簡単に！`
    }
  },
  components: {
    Header,
    Sidebar,
    Hamburger
  },
  computed: {
    title() {
      return title
    }
  }
}
</script>

<style lang="scss" scoped>
.Main {
  @media (min-width: $--md) {
    display: grid;
    grid-template-columns: 288px minmax(256px, auto);
  }
}
</style>
