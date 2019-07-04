<template>
  <aside
    class="Sidebar"
    :class="{
      'Sidebar--Default': type === 'default',
      'Sidebar--Config': type === 'config'
    }"
  >
    <template v-if="type === 'default'">
      aa
    </template>
    <template v-if="type === 'config'">
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
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
// SP
.Sidebar {
  padding: 8px;
  border-bottom: 2px solid #efefef;

  &--Config {
    @include thin-scrollbar(12px);
    overflow-y: auto;
    height: 50vh;
  }
}

// PC
@media (min-width: 768px) {
  .Sidebar {
    top: 64px;
    height: calc(100vh - 64px);
    position: sticky;
    border-right: 2px solid #efefef;
  }
}
</style>
