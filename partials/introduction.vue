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
        <link-button name="設定ガイドを見る" to="/guide" color="primary" />
        <link-button name="サンプルを見る" to="/example" />
      </div>
    </div>

    <!-- 動作動画 -->
    <div class="Introduction__Movie">
      <video
        class="Introduction__Movie__Item"
        src="~/assets/movies/scripon-sample.mp4"
        controls
      ></video>
    </div>
  </div>
</template>

<script>
import LinkButton from '@/components/LinkButton'

export default {
  components: {
    LinkButton
  }
}
</script>

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
      display: flex;
      margin-top: $space-xl;
      .LinkButton {
        margin-right: $space-xl;
      }
    }
  }
  &__Movie {
    padding-top: $space-lg;
    &__Item {
      width: 100%;
      height: auto;
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
