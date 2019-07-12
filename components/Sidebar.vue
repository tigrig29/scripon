<template>
  <aside
    class="Sidebar"
    :class="{
      'Sidebar--Default': type === 'default',
      'Sidebar--Config': type === 'config'
    }"
  >
    <template v-if="type === 'default'">
      <div
        v-for="item in $store.state.menu.items"
        :key="item.id"
        class="Sidebar__Item"
      >
        <nuxt-link class="Sidebar__Item__Link" :to="`./${item.link}`">
          {{ item.title }}
        </nuxt-link>
      </div>
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
  border-bottom: 2px solid #efefef;

  &--Config {
    padding: $space-sm;
    @include thin-scrollbar(12px);
    overflow-y: auto;
    height: 50vh;
  }

  &--Default {
    padding: $space-lg;
    .Sidebar__Item {
      margin-bottom: $space-sm;
      padding: $space-xs;
      &__Link {
        display: block;
        text-decoration: none;
        color: $--color-black-8;
        padding: 0 $space-sm;
        border-radius: $space-sm;
        letter-spacing: 0.25px;
        &:hover {
          color: $--color-black-9;
          background-color: $--color-grey-4;
        }
      }
      .nuxt-link-active {
        color: $--color-white;
        background-color: rgba($color-primary, 0.8);
      }
    }
  }
}

// PC
.Sidebar {
  @media (min-width: $--sm) {
    top: 64px;
    height: calc(100vh - 64px);
    position: sticky;
    border-right: 2px solid #efefef;
  }
}
</style>
