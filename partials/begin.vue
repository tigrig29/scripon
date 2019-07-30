<template>
  <div class="Begin partical-container">
    <!-- タイトル -->
    <div class="Begin__Title">
      <div class="Begin__Title__Wrapper">
        <h1>始めましょう！</h1>
      </div>
    </div>
    <div class="Begin__Link">
      <link-button
        name="Scripon! を使ってみる"
        to="/converter"
        color="primary"
      />
    </div>
    <div class="Begin__Link">
      <link-button name="設定ガイドを見る" to="/guide" />
    </div>
    <div class="Begin__Link">
      <link-button name="使用例を見る" to="/example" />
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
.Begin {
  display: grid;
  grid-gap: $space-base * 4 0;
  max-width: $--md;
  &__Title {
    &__Wrapper {
      width: 275px;
      margin: auto;
      h1 {
        margin: 0;
        padding-bottom: $space-sm;
        border-bottom: solid 3px $color-primary;
        text-align: center;
      }
    }
  }
  &__Link {
    display: flex;
    justify-content: center;
    margin-top: $space-xl;
  }

  // PC
  @media (min-width: $--md) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: $space-base * 4;
    &__Title {
      grid-column: 1 / 4;
    }
  }
}
</style>
