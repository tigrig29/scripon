<template>
  <ul class="Menu">
    <!-- <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/guide">
        使い方
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/examples">
        使用例
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/converter">
        コンバーター
      </nuxt-link>
    </li> -->
  </ul>
</template>

<style lang="scss" scoped>
.Menu {
  display: flex;
  list-style: none;
  padding: 0;
  &__Item {
    display: flex;
    align-items: center;
    margin-left: $space-base;
    @media (min-width: $--sm) {
      margin-left: $space-xl;
    }
    &__Link {
      font-size: $font-size-sm;
      color: $color-reverse;
      text-decoration: none;
      white-space: nowrap;
      &:hover {
        color: $color-primary;
      }
      @media (min-width: $--sm) {
        font-size: $font-size-base;
      }
    }
    .nuxt-link-active,
    .nuxt-link-active:hover {
      color: $color-primary;
    }
  }
}
</style>
