<template>
  <nav
    class="Nav"
    :class="{
      'Sidebar--Hidden': !$store.state.navigation.visible
    }"
  >
    <div class="Nav__Menu">
      <nuxt-header-nav-menu />
    </div>
    <div class="Nav__Social">
      <nuxt-header-nav-social />
    </div>
  </nav>
</template>

<script>
import NuxtHeaderNavMenu from '~/components/HeaderNavMenu.vue'
import NuxtHeaderNavSocial from '~/components/HeaderNavSocial.vue'

export default {
  components: {
    NuxtHeaderNavMenu,
    NuxtHeaderNavSocial
  }
}
</script>

<style lang="scss" scoped>
.Nav {
  left: 0px;
  top: 56px;
  width: 100%;
  height: calc(100vh - 56px);
  padding: 0;
  position: absolute;
  background: $--color-white;
  z-index: 30;
  &--Hidden {
    display: none;
  }
}

// PC
.Nav {
  @media (min-width: $--md) {
    height: $header-height-pc;
    padding: 0;
    display: flex;
    flex: 1;
    position: static;
    background: transparent;
    &__Menu {
      display: flex;
    }
    &__Social {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      margin-left: $space-base;
    }
    &--Hidden {
      display: block;
    }
  }
}
</style>
