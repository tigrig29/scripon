<template>
  <div class="Converter__Body">
    <div v-if="false" class="Converter__Body__Item"></div>
    <div v-if="true" class="Converter__Body__Item">
      <!-- 入力エリア -->
      <ScriponTextarea
        class="Converter__Body__Item__Input"
        :value="converterText.input"
        placeholder="変換したいシナリオテキストを入力（貼り付け等）して下さい。"
        :rows="12"
        @input="
          e => {
            inputScenario(e.target.value)
            // リアルタイム変換
            if (converterSetting.realtime) outputScript()
          }
        "
      />
      <!-- 変換ボタン（リアルタイム変換 OFF 時のみ） -->
      <scripon-button
        v-if="!converterSetting.realtime"
        class="Converter__Body__Item__Convert"
        caption="変換"
        :horizontal="true"
        @click="outputScript"
      />
      <!-- 矢印 -->
      <font-awesome-icon
        icon="angle-double-down"
        class="fa-4x Converter__Body__Item__Arrow"
      />
      <!-- 出力エリア -->
      <div class="Converter__Body__Item__Output">
        <output-form :value="converterText.output" />
      </div>
    </div>
  </div>
</template>

<script>
import utils from '~/assets/js/utils'
import convert from '~/assets/js/convert'
import { mapState } from 'vuex'

import ScriponButton from '@/components/forms/ScriponButton'
import ScriponTextarea from '@/components/forms/ScriponTextarea'
import OutputForm from '@/components/converter/OutputForm'

export default {
  components: {
    ScriponButton,
    ScriponTextarea,
    OutputForm
  },
  mixins: [utils, convert],
  computed: {
    ...mapState('converter', {
      converterSetting: 'setting',
      converterText: 'text'
    })
  },
  methods: {
    inputScenario(value) {
      this.$store.commit('converter/updateInputText', value)
    },
    outputScript() {
      this.$store.commit(
        'converter/updateOutputText',
        this.convertSenarioToScript(this.converterText.input)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.Converter__Body {
  display: flex;
  flex-flow: column nowrap;
  &__Item {
    text-align: center;
    &__Input {
      margin-top: $space-base;
      margin-bottom: $space-base;
    }
    &__Convert {
      text-indent: 2rem;
      letter-spacing: 2rem;
    }
    &__Arrow {
      color: mix($color-secondary, $--color-white);
    }
    &__Output {
      margin-top: $space-base;
      margin-bottom: $space-base;
    }
  }
}
</style>
