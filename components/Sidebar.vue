<template>
  <aside
    class="Sidebar"
    :class="{
      'Sidebar--Hidden': !$store.state.menu.visible
    }"
  >
    <div
      v-for="item in $store.state.menu.items"
      :key="item.id"
      class="Sidebar__Item"
    >
      <nuxt-link class="Sidebar__Item__Link" :to="item.link" exact>
        {{ item.title }}
      </nuxt-link>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
// SP
.Sidebar {
  top: 56px;
  position: sticky;
  padding: $space-lg;
  padding-right: $space-xl * 2;
  background: white;
  z-index: 10;
  border-bottom: 2px solid $--color-grey-4;

  &__Item {
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

  &--Hidden {
    display: none;
  }
}

// PC
.Sidebar {
  @media (min-width: $--md) {
    height: calc(100vh - 64px);
    border-right: 2px solid $--color-grey-4;

    &--Hidden {
      display: block;
    }
  }
}
</style>
