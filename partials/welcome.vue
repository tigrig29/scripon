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
        <nuxt-link
          to="/converter"
          class="Welcome__Content__Link__Item link-button color-primary"
        >
          <span class="Welcome__Content__Link__Item__Text link-button-text">
            使ってみる
          </span>
        </nuxt-link>
        <a
          rel="noopener"
          target="_blank"
          href="https://github.com/tigrig29/scripon"
          class="Welcome__Content__Link__Item link-button"
        >
          <span class="Welcome__Content__Link__Item__Text link-button-text">
            GitHub
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import scriponIcon from '@/components/icons/scriponIcon'
import scriponLogo from '@/components/icons/scriponLogo'

import window from '@/assets/js/window.js'

export default {
  components: {
    scriponIcon,
    scriponLogo
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
      margin-top: $space-xl;
      &__Item {
        margin-right: $space-xl;
        padding-top: $space-base - 1;
        padding-bottom: $space-base + 1;
        padding-left: $space-lg;
        padding-right: $space-lg;
        box-shadow: 5px 5px 3px mix($--color-white, $color-reverse);
        border-radius: $space-xs;
        line-height: $space-xl * 2.5;
        font-weight: $font-weight-bold;
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
