<template>
  <div class="Welcome partical-container">
    <div class="Welcome__Icon">
      <scripon-icon :width="iconWidth" />
    </div>
    <div class="Welcome__Content">
      <h2 class="Welcome__Content__Text">
        <scripon-logo :width="logoWidth" />
      </h2>
      <p class="Welcome__Content__Text">
        Scripon! は、ノベルゲーム / ADV
        開発における『スクリプト制作』を手助けする Web アプリケーションです。
      </p>
      <p class="Welcome__Content__Text">
        シナリオ → スクリプト化
        の面倒な作業は、全てツールに任せてしまいましょう！
      </p>
      <div class="Welcome__Content__Link">
        <link-button name="使ってみる" to="/converter" color="primary" />
        <link-button
          name="GitHub"
          to="https://github.com/tigrig29/scripon"
          is-external
        />
      </div>
    </div>
  </div>
</template>

<script>
import scriponIcon from '@/components/icons/scriponIcon'
import scriponLogo from '@/components/icons/scriponLogo'
import LinkButton from '@/components/LinkButton'

import window from '@/assets/js/window.js'

export default {
  components: {
    scriponIcon,
    scriponLogo,
    LinkButton
  },
  mixins: [window],
  computed: {
    iconWidth() {
      return this.width >= this.BREAKPOINTS.MD ? '256px' : '224px'
    },
    logoWidth() {
      return this.width >= this.BREAKPOINTS.MD ? '256px' : '208px'
    }
  }
}
</script>

<style lang="scss" scoped>
.Welcome {
  &__Icon {
    margin-top: -1 * $space-base;
    padding-bottom: $space-base * 3;
  }
  &__Content {
    &__Text {
      margin-top: $space-base;
      margin-bottom: 0;
      /deep/ .ScriponLogo {
        margin: 0;
        margin-top: -1 * $space-base;
        margin-left: -1 * $space-base;
      }
    }
    &__Link {
      display: flex;
      margin-top: $space-xl;
      .LinkButton {
        margin-right: $space-xl;
      }
    }
  }

  @media (min-width: $--md) {
    display: flex;
    &__Icon {
      margin-top: $space-base;
      margin-right: $space-xl * 2.5;
      padding-bottom: 0;
    }
  }
}
</style>
