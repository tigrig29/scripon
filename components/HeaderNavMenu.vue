<template>
  <ul class="Menu">
    <li
      v-for="navItem in $store.state.navigation.list"
      :key="navItem.link"
      class="Menu__Item"
      @click="childClick"
      @mouseenter="childMouseEnter"
      @mouseleave="childMouseLeave"
    >
      <nuxt-link class="Menu__Item__Link" :to="`/${navItem.link}`">
        {{ navItem.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    // SP 用、クリック処理を a タグへ伝播
    childClick(e) {
      const linkElement = e.target.children
      if (linkElement.length !== 0) linkElement[0].click()
    },
    // SP 用、ホバー処理を a タグへ伝播
    childMouseEnter(e) {
      const linkElement = e.target.children
      if (linkElement.length !== 0)
        linkElement[0].classList.add('Menu__Item__Link--Hover')
    },
    // SP 用、ホバー処理を a タグへ伝播
    childMouseLeave(e) {
      const linkElement = e.target.children
      if (linkElement.length !== 0)
        linkElement[0].classList.remove('Menu__Item__Link--Hover')
    }
  }
}
</script>

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
      &:hover,
      &--Hover {
        color: $color-primary;
      }
    }
    .nuxt-link-active,
    .nuxt-link-active:hover {
      color: $color-primary;
    }
    cursor: pointer;
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
