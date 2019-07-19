<template>
  <div class="Home">
    <div class="Home__Item">
      <Separator :payload="getSeparatorPayload(0)" />
      <partWelcome />
      <Separator :payload="getSeparatorPayload(1)" />
    </div>
    <div class="Home__Item">
      <Separator :payload="getSeparatorPayload(2)" />
      <part />
      <Separator :payload="getSeparatorPayload(3)" />
    </div>
    <div class="Home__Item">
      <Separator :payload="getSeparatorPayload(2)" />
      <part />
      <Separator :payload="getSeparatorPayload(3)" />
    </div>
  </div>
</template>

<script>
import Separator from '@/partials/Separator'
import partWelcome from '@/partials/welcome'

export default {
  components: {
    Separator,
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
    padding: $space-base * 10 0;
    // border-bottom: solid 1px $--color-grey-5;
    &:nth-child(even) {
      background: $--color-grey-2;
    }
  }
}

.Background__Upper {
  position: relative;
  &__Shape {
    right: 50%;
    top: -160px;
    border-right: 978px solid transparent;
    border-top: 128px solid $--color-grey-2;
    position: absolute;
  }
}
.Background__Lower {
  position: relative;
  &__Shape {
    left: 50%;
    top: 32px;
    border-left: 978px solid transparent;
    border-bottom: 128px solid $--color-grey-2;
    position: absolute;
  }
}
</style>
