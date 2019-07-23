<template>
  <div class="Welcome partical-container">
    <div class="Welcome__Title">
      <scripon-icon width="224px" />
      <div class="spacer"></div>
      <scripon-logo width="256px" />
    </div>
    <div class="Welcome__Content">
      <p class="Welcome__Content__Text">
        Scripon! は、ノベルゲーム / ADV
        開発における『スクリプト制作』を手助けする Web アプリケーションです。
      </p>
      <p class="Welcome__Content__Text">
        シナリオ → スクリプト化
        の面倒な作業は、全てツールに任せてしまいましょう！
      </p>
      <div class="Welcome__Content__Link">
        <div class="Welcome__Content__Link__Wrapper">
          <nuxt-link
            to="/converter"
            class="Welcome__Content__Link__Item link-button color-primary"
          >
            <span class="Welcome__Content__Link__Item__Text link-button-text">
              使ってみる
            </span>
          </nuxt-link>
        </div>
        <div class="Welcome__Content__Link__Wrapper">
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
  </div>
</template>

<script>
import scriponIcon from '@/components/icons/scriponIcon'
import scriponLogo from '@/components/icons/scriponLogo'

export default {
  components: {
    scriponIcon,
    scriponLogo
  }
}
</script>

<style lang="scss" scoped>
.Welcome {
  &__Title {
    padding-bottom: $space-lg;
  }
  &__Content {
    &__Text {
      margin-top: $space-base;
      margin-bottom: 0;
    }
    &__Link {
      margin-top: $space-xl;
      display: flex;
      &__Item {
        margin-right: $space-xl;
        padding: $space-base $space-lg;
        border-radius: $space-xs;
        line-height: $space-xl * 2.5;
        font-weight: $font-weight-bold;
      }
    }
  }

  @media (min-width: $--md) {
    &__Title {
      margin-right: $space-xl * 2.5;
      padding-bottom: 0;
    }
  }
}
</style>
