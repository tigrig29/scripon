<template>
  <header class="Header sticky">
    <nuxt-link to="/" class="Header__Title">
      <scripon-title />
      <h1 class="Header__Title__Text">
        {{ title }}
      </h1>
    </nuxt-link>
    <NavHamburger />
    <HeaderNav />
  </header>
</template>

<script>
import scriponTitle from '@/components/icons/scriponTitle'
import NavHamburger from '@/components/NavHamburger'
import HeaderNav from '@/components/HeaderNav'

export default {
  components: {
    scriponTitle,
    NavHamburger,
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
  @media (min-width: $--md) {
    height: $header-height-pc;
  }
  // ヘッダー固定用
  &.sticky {
    top: 0;
    z-index: 30;
  }
  // ロゴエリア
  &__Title {
    display: flex;
    align-items: center;
    @media (min-width: $--md) {
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
