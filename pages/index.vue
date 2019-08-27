<template>
  <div class="Home">
    <div class="Home__Item">
      <partWelcome />
    </div>
    <div class="Home__Item">
      <partIntroduction />
    </div>
    <div class="Home__Item">
      <partDetails />
    </div>
    <div class="Home__Item">
      <partBegin />
    </div>
  </div>
</template>

<script>
import partWelcome from '@/partials/welcome'
import partIntroduction from '@/partials/introduction'
import partDetails from '@/partials/details'
import partBegin from '@/partials/begin'

export default {
  components: {
    partWelcome,
    partIntroduction,
    partDetails,
    partBegin
  },
  asyncData({ store }) {
    // グローバルナビゲーションの非表示化
    store.commit('navigation/setVisible', false)
    // サイドバーメニューの非表示化
    store.commit('menu/setEnabled', false)
  }
}
</script>

<style lang="scss" scoped>
.Home {
  grid-column-start: 1;
  grid-column-end: 3;

  &__Item {
    padding: 0;
    padding-top: $space-base * 4.5;
    padding-bottom: $space-base * 5;
    border-bottom: solid 2px $--color-grey-5;
    &:nth-child(even) {
      background: $--color-grey-3;
    }
  }
}
</style>
