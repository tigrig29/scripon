<template>
  <aside class="Sidebar">
    <div v-for="conf in config" :key="conf.id" class="Sidebar__Item">
      <Config :config="conf" />
    </div>
  </aside>
</template>

<script>
import Config from '@/components/Config.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Config
  },
  computed: {
    ...mapState('config', { config: 'list' })
  }
}
</script>

<style lang="scss">
// SP
.Sidebar {
  padding: 8px;
  overflow-x: auto;
  height: 50vh;
  border-bottom: 2px solid #efefef;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: rgba(0, 0, 50, 0.2);
    border: solid 3px rgba(0, 0, 0, 0);
    border-radius: 10px;
  }
}

// PC
@media (min-width: 768px) {
  .Sidebar {
    top: 64px;
    height: calc(100vh - 64px);
    border-right: 2px solid #efefef;
    position: sticky;
  }
}
</style>
