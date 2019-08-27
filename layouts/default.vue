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

export default {
  components: {
    Header,
    Sidebar,
    Hamburger
  },
  data() {
    return {
      title: 'Scripon!'
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
