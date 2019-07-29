<template>
  <div class="Details partical-container">
    <!-- タイトル -->
    <div class="Details__Title">
      <div class="Details__Title__Wrapper">
        <h1>Scripon! の特徴</h1>
      </div>
    </div>
    <!-- ブロック１ -->
    <div class="Details__Content">
      <h2 class="Details__Content__Head">手軽な変換</h2>
      <p class="Details__Content__Text">
        ソフトのダウンロード不要、Web
        ブラウザさえあれば、パソコンでもスマホでも、いつでもどこでも使用できます。
      </p>
      <p class="Details__Content__Text">
        「行末にクリック待ちを置きたいだけ……」などのちょっとした変換処理なら、たった一つの設定だけで簡単かつ高速に変換が可能です。
      </p>
    </div>
    <!-- ブロック２ -->
    <div class="Details__Content">
      <h2 class="Details__Content__Head">自由度の高い設定</h2>
      <p class="Details__Content__Text">
        Scripon! には様々な設定項目があります。
        これらを使いこなせば、全てのシナリオをゲーム動作用スクリプトに変換することができます。
      </p>
      <p class="Details__Content__Text">
        また、『正規表現による置換処理』にも対応しているため、
        複雑な条件での変換、Scripon! の設定には無い変換方法なども、
        自由に実装することができます。
      </p>
    </div>
    <!-- ブロック３ -->
    <div class="Details__Content">
      <h2 class="Details__Content__Head">
        様々なエンジン対応
      </h2>
      <p class="Details__Content__Text">
        吉里吉里、NScripter、ティラノスクリプト、Light.vn、……
      </p>
      <p class="Details__Content__Text">
        Scripon! は、スクリプトエンジンに縛られることがありません。
        設定次第で、どんなエンジンのスクリプトにも対応することができます。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Details {
  display: grid;
  grid-gap: $space-base * 4 0;
  &__Title {
    &__Wrapper {
      width: 300px;
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
    &__Text {
      margin-top: $space-base;
      margin-bottom: 0;
    }
  }

  // PC
  @media (min-width: $--md) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: $space-base * 4;
    &__Title {
      grid-column: 1 / 4;
    }
    &__Content {
      margin-bottom: $space-base;
    }
  }
}
</style>
