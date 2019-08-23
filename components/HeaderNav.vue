<template>
  <nav class="Nav">
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
  height: $header-height-sp;
  padding: 0;
  display: flex;
  flex: 1;
  overflow: hidden;
  @media (min-width: $--md) {
    height: $header-height-pc;
  }
  &__Menu {
    display: flex;
  }
  &__Social {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    margin-left: $space-base;
    @media (max-width: $--xs) {
      display: none;
    }
  }
}
</style>
