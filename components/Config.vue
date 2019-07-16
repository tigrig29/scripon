<template>
  <div class="Config">
    <draggable>
      <div
        v-for="conf in $store.state.config.list"
        :key="conf.id"
        class="Sidebar__Item"
      >
        <ConfigHeader :config="conf" />
        <ConfigBody :config="conf" />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import ConfigHeader from '@/components/ConfigHeader.vue'
import ConfigBody from '@/components/ConfigBody.vue'

export default {
  components: {
    draggable,
    ConfigHeader,
    ConfigBody
  }
}
</script>

<style lang="scss" scoped>
// SP
.Config {
  @include thin-scrollbar(12px);

  top: 64px;
  height: 50vh;
  padding: $space-sm;
  position: sticky;
  overflow-y: auto;
  background: white;
  z-index: 10;

  border-bottom: 2px solid $--color-grey-4;
}

// PC
.Config {
  @media (min-width: $--sm) {
    height: calc(100vh - 64px);
    border-right: 2px solid $--color-grey-4;
  }
}
</style>
