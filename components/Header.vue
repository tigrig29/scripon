<template>
  <header class="Header sticky">
    <nuxt-link to="/" class="Header__Logo">
      <scripon-logo />
      <h1 class="Header__Logo__Text">{{ title }}</h1>
    </nuxt-link>

    <div class="Header__Toggler">
      <div class="Header__Toggler__Button" @click="toggle">
        <div :class="{ 'icon menu': !visible, 'icon close': visible }"></div>
      </div>
    </div>
    <HeaderNav />
  </header>
</template>

<script>
import scriponLogo from '@/components/icons/scripon'
import HeaderNav from '@/components/HeaderNav'

export default {
  components: {
    scriponLogo,
    HeaderNav
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    visible() {
      return this.$store.state.view.visibleHeader
    }
  },
  methods: {
    toggle() {
      this.$store.commit('view/toggle', 'visibleHeader')
    }
  }
}
</script>

<style lang="scss">
@include font-face(
  'spin cycle 3d',
  '~static/fonts/spincycle_3d_ot.otf',
  null,
  null,
  otf
);
.Header {
  display: flex;
  height: 60px;
  flex-direction: row;
  border-bottom: 2px $--color-grey-4 solid;
  @media (min-width: $--md) {
    height: 80px;
  }
  // ヘッダー固定用
  &.sticky {
    top: 0;
  }
  // ロゴエリア
  &__Logo {
    display: flex;
    align-items: center;
    @media (min-width: $--md) {
      width: 189px;
    }
    &__Text {
      margin: 0;
      width: 0;
      overflow: hidden;
    }
  }
  &__Toggler {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 991px) {
      display: none;
    }
    &__Button {
      display: flex;
      width: 25px;
      height: 20px;
      cursor: pointer;
    }
  }
}
</style>
