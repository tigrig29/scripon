<template>
  <div>
    <Header :title="title" />
    <main
      class="Main"
      :class="{
        'Main--Default': route !== '/',
        'Main--Converter': route === '/'
      }"
    >
      <Sidebar :type="sidebarType" />
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
  computed: {
    title() {
      return title
    },
    route() {
      return this.$route.path
    },
    sidebarType() {
      return this.route === '/' ? 'config' : 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
.Main {
  @media (min-width: $--sm) {
    display: grid;
    &--Default {
      grid-template-columns: 288px minmax(256px, auto);
    }
    &--Converter {
      grid-template-columns: 512px minmax(256px, auto);
    }
  }
}
</style>
