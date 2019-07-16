<template>
  <!-- ハンバーガーメニュー -->
  <div class="Hamburger">
    <fa-icon
      v-if="$store.state.menu.visible"
      icon="times"
      class="fa-lg Hamburger__Icon"
      @click="toggleMenu"
    />
    <fa-icon
      v-else
      icon="bars"
      class="fa-lg Hamburger__Icon"
      @click="toggleMenu"
    />
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
  right: 0;
  margin: $space-sm $space-base;
  display: block;
  position: absolute;
  z-index: 100;
  &__Icon {
    cursor: pointer;
  }
}

// PC
.Hamburger {
  @media (min-width: $--sm) {
    display: none;
  }
}
</style>
