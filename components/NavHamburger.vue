<template>
  <!-- ハンバーガーメニュー -->
  <div class="NavHamburger" @click="toggleMenu">
    <fa-icon
      v-if="$store.state.navigation.visible"
      icon="times"
      class="fa-lg NavHamburger__Icon"
    />
    <fa-icon v-else icon="bars" class="fa-lg NavHamburger__Icon" />
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit('navigation/toggleVisible')
    }
  }
}
</script>

<style lang="scss" scoped>
// SP
.NavHamburger {
  right: 0px;
  padding: $space-sm;
  margin-right: $space-sm;
  display: block;
  position: absolute;
  z-index: 20;
  cursor: pointer;
  &__Icon {
    color: $--color-black-4;
  }
}

// PC
.NavHamburger {
  @media (min-width: $--md) {
    display: none;
  }
}
</style>
