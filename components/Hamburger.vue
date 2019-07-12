<template>
  <!-- ハンバーガーメニュー -->
  <div class="Hamburger">
    <svg
      class="Hamburger__Icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30"
      height="30"
      focusable="false"
      @click="toggleMenu"
    >
      <title>メニュー</title>
      <path
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-miterlimit="10"
        d="M4 7h22M4 15h22M4 23h22"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const $menu = document.getElementsByClassName('Sidebar')[0]
      if ($menu.style.display === 'none') {
        $menu.style.display = 'block'
      } else {
        $menu.style.display = 'none'
      }
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
