<template>
  <aside class="Sidebar">
    <template v-if="$store.state.layout.sidebar === 'config'">
      <draggable>
        <div
          v-for="conf in $store.state.config.list"
          :key="conf.id"
          class="Sidebar__Item"
        >
          <Config :config="conf" />
        </div>
      </draggable>
    </template>
  </aside>
</template>

<script>
import draggable from 'vuedraggable'

import Config from '@/components/Config.vue'

export default {
  components: {
    draggable,
    Config
  }
}
</script>

<style lang="scss">
// SP
.Sidebar {
  @include thin-scrollbar(12px);

  padding: 8px;
  overflow-x: auto;
  height: 50vh;
  border-bottom: 2px solid #efefef;
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
