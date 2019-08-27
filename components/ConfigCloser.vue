<template>
  <!-- コンフィグ開閉ボタン -->
  <div class="ConfigCloser" @click="toggleMenu">
    <fa-icon
      v-if="$store.state.config.visible"
      icon="chevron-up"
      class="fa-lg ConfigCloser__Icon"
    />
    <fa-icon v-else icon="chevron-down" class="fa-lg ConfigCloser__Icon" />
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit('config/toggleVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// SP
.ConfigCloser {
  margin: $space-sm;
  padding: $space-xs $space-sm;
  border: solid 2px $--color-black-4;
  border-radius: 5px;
  display: block;
  z-index: 20;
  cursor: pointer;
  text-align: center;
  &__Icon {
    color: $--color-black-4;
  }
}

// PC
.ConfigCloser {
  @media (min-width: $--md) {
    display: none;
  }
}
</style>
