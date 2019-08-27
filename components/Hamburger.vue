<template>
  <!-- ハンバーガーメニュー -->
  <div class="Hamburger" @click="toggleMenu">
    <fa-icon
      v-if="$store.state.menu.visible"
      icon="times"
      class="fa-lg Hamburger__Icon"
    />
    <fa-icon v-else icon="ellipsis-v" class="fa-lg Hamburger__Icon" />
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit('menu/toggleVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// SP
.Hamburger {
  top: 64px;
  right: 16px;
  padding: $space-xs $space-sm;
  border: solid 2px $--color-black-5;
  border-radius: 5px;
  display: block;
  position: fixed;
  z-index: 20;
  cursor: pointer;
  &__Icon {
    color: $--color-black-4;
  }
}

// PC
.Hamburger {
  @media (min-width: $--md) {
    display: none;
  }
}
</style>
