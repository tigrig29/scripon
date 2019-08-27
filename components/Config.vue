<template>
  <div
    class="Config"
    :class="{ 'Config--Hidden': !$store.state.config.visible }"
  >
    <draggable>
      <div
        v-for="conf in $store.state.config.list"
        :key="conf.id"
        class="Config__Item"
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

  max-height: 70vh;
  margin-bottom: $space-xl;
  padding: $space-sm;
  overflow-y: auto;
  background: white;
  border-bottom: 2px solid $--color-grey-4;
  z-index: 10;

  &--Hidden {
    display: none;
  }
}

// PC
.Config {
  @media (min-width: $--md) {
    top: 64px;
    height: calc(100vh - 64px);
    max-height: none;
    margin-bottom: 0;
    border-right: 2px solid $--color-grey-4;
    position: sticky;

    &--Hidden {
      display: block;
    }
  }
}
</style>
