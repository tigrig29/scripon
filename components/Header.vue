<template>
  <header class="Header sticky">
    <nuxt-link to="/" class="Header__Logo">
      <scripon-logo />
      <h1 v-if="$route.path === '/'" class="Header__Logo__Text">{{ title }}</h1>
    </nuxt-link>
    <HeaderNav />
  </header>
</template>

<script>
import scriponLogo from '@/components/icons/scriponLogo'
import HeaderNav from '@/components/HeaderNav'

export default {
  components: {
    scriponLogo,
    HeaderNav
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.Header {
  display: flex;
  height: $header-height-sp;
  flex-direction: row;
  border-bottom: 2px $--color-grey-4 solid;
  background: $--color-white;
  @media (min-width: $--sm) {
    height: $header-height-pc;
  }
  // ヘッダー固定用
  &.sticky {
    top: 0;
  }
  // ロゴエリア
  &__Logo {
    display: flex;
    align-items: center;
    @media (min-width: $--sm) {
      width: 210px;
    }
    &__Text {
      width: 0;
      overflow: hidden;
    }
    &:hover {
      color: $color-primary;
      text-decoration: none;
    }
  }
}
</style>
