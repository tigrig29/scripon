<template>
  <div class="Converter__Body">
    <!-- ファイル変換モード -->
    <div v-if="false" class="Converter__Body__Item"></div>
    <!-- テキスト変換モード -->
    <div v-if="true" class="Converter__Body__Item">
      <!-- 入力エリア -->
      <div class="Converter__Body__Item__Input">
        <input-form :rows="12" />
      </div>
      <!-- 矢印 -->
      <font-awesome-icon
        icon="angle-double-down"
        class="fa-4x Converter__Body__Item__Arrow"
      />
      <!-- 出力エリア -->
      <div class="Converter__Body__Item__Output">
        <output-form :rows="12" />
      </div>
    </div>

    <!-- Ad -->
    <div class="Converter__Body__Item">
      <adsbygoogle
        class="Converter__Body__Item__Adsense"
        :ad-slot="'3728637730'"
        :ad-format="'false'"
      />
    </div>
  </div>
</template>

<script>
import OutputForm from '@/components/converter/OutputForm'
import InputForm from '@/components/converter/InputForm'

export default {
  components: {
    OutputForm,
    InputForm
  }
}
</script>

<style lang="scss" scoped>
.Converter__Body {
  display: flex;
  flex-flow: column nowrap;
  &__Item {
    text-align: center;
    margin-bottom: $space-base;
    &__Input {
      margin-top: $space-base;
      margin-bottom: $space-base;
    }
    &__Arrow {
      color: mix($color-secondary, $--color-white);
    }
    &__Output {
      margin-top: $space-base;
      margin-bottom: $space-base;
    }

    &__Adsense {
      height: 90px;
      margin: auto;
    }
  }
}
</style>
