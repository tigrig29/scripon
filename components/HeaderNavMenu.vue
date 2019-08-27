<template>
  <ul class="Menu">
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/converter">
        コンバーター
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/guide">
        ガイド
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/examples">
        活用サンプル
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/history">
        更新履歴
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.Menu {
  list-style: none;
  padding: 0;
  &__Item {
    padding: $space-lg 0;
    border-bottom: solid 1px $--color-grey-4;
    text-align: center;
    &__Link {
      color: $color-reverse;
      text-decoration: none;
      white-space: nowrap;
      font-size: $font-size-base;
      &:hover {
        color: $color-primary;
      }
    }
    .nuxt-link-active,
    .nuxt-link-active:hover {
      color: $color-primary;
    }
  }
}

// PC
.Menu {
  @media (min-width: $--md) {
    display: flex;
    &__Item {
      display: flex;
      align-items: center;
      margin-left: $space-xl;
      padding: 0;
      border-bottom: none;
    }
  }
}
</style>
