<template>
  <div class="Home">
    <div class="Home__Item">
      <partWelcome />
    </div>
  </div>
</template>

<script>
import partWelcome from '@/partials/welcome'

export default {
  components: {
    partWelcome
  },
  asyncData({ store }) {
    // サイドバーメニューの非表示化
    store.commit('menu/setEnabled', false)
  },
  methods: {
    getSeparatorPayload(count) {
      const payload = {}

      if (count % 2 === 0) payload.side = 'upper'
      else payload.side = 'lower'
      if (Math.floor(count / 2) % 2 === 0) payload.color = 'grey'
      else payload.color = 'white'

      return payload
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {
  grid-column-start: 1;
  grid-column-end: 3;

  &__Item {
    padding: $space-base * 3 0;
    border-bottom: solid 2px $--color-grey-5;
    &:nth-child(even) {
      background: $--color-grey-3;
    }
  }
}
</style>
