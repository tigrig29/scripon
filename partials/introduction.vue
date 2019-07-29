<template>
  <div class="Introduction partical-container">
    <div class="Introduction__Title">
      <div class="Introduction__Title__Wrapper">
        <h1>Scripon! の使い方</h1>
      </div>
    </div>

    <!-- 紹介文 -->
    <div class="Introduction__Content">
      <h2 class="Introduction__Content__Head">様々な設定ができます</h2>
      <ul class="Introduction__Content__List">
        <li class="Introduction__Content__List__Item">
          コメントの削除
        </li>
        <li class="Introduction__Content__List__Item">
          文章の行頭・行末にスクリプトを挿入
        </li>
        <li class="Introduction__Content__List__Item">
          文章の先頭行・最終行にスクリプトを挿入
        </li>
        <li class="Introduction__Content__List__Item">
          正規表現による詳細な置換処理
        </li>
      </ul>
      <div class="Introduction__Content__Link">
        <nuxt-link
          to="/converter"
          class="Introduction__Content__Link__Item link-button color-primary"
        >
          <span
            class="Introduction__Content__Link__Item__Text link-button-text"
          >
            設定方法を見る
          </span>
        </nuxt-link>
        <nuxt-link
          to="/converter"
          class="Introduction__Content__Link__Item link-button"
        >
          <span
            class="Introduction__Content__Link__Item__Text link-button-text"
          >
            サンプルを見る
          </span>
        </nuxt-link>
      </div>
    </div>

    <!-- 動作動画 -->
    <div class="Introduction__Movie">
      <p class="Introduction__Movie__Item"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Introduction {
  display: grid;
  grid-gap: $space-base * 4 0;
  &__Title {
    &__Wrapper {
      width: 350px;
      margin: auto;
      h1 {
        margin: 0;
        padding-bottom: $space-sm;
        border-bottom: solid 3px $color-primary;
        text-align: center;
      }
    }
  }
  &__Content {
    &__Head {
      padding-bottom: $space-base;
    }
    &__List {
      &__Item {
        margin-top: $space-base;
        margin-bottom: 0;
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
  &__Movie {
    padding-top: $space-lg;
    &__Item {
      // 実際の動画を挿入するまで仮置
      display: block;
      width: 100%;
      padding-top: calc(100% / 16 * 9);
      background: grey;
    }
  }

  // PC
  @media (min-width: $--md) {
    grid-template-columns: 1fr 1fr;
    &__Title {
      grid-column: 1 / 3;
    }
  }
}
</style>
